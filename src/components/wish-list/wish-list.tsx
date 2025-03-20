import { ChangeEvent, useCallback, useState } from 'react'
import List from './list/list'
import WishAdd from './wish-add/wish-add'

function WishList() {
	const [wishes, setWishes] = useState<string[]>([])
	const [value, setValue] = useState('')

	const handleClick = () => {
		if (value === '') return
		setWishes([...wishes, value])
		setValue('')
	}
	const deleteWish = useCallback(
		(index: number) => {
			setWishes(wishes.filter((_, idx) => idx !== index))
		},
		[wishes]
	)
	return (
		<div>
			<WishAdd
				value={value}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setValue(e.target.value)
				}
				onClick={handleClick}
			/>
			<List wishes={wishes} onClick={deleteWish} />
		</div>
	)
}

export default WishList
