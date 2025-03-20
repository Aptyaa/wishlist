import { memo } from 'react'
import WishItem from '../wish-item/wish-item'

interface ListProps {
	wishes: string[]
	onClick: (index: number) => void
}
export default memo(function List({ wishes, onClick }: ListProps) {
	return wishes.length === 0 ? (
		<div>Пока желаний нет</div>
	) : (
		<ul style={{ padding: '0', margin: '0' }}>
			{wishes.map((wish, index) => (
				<WishItem key={index} wish={wish} onDelete={onClick} index={index} />
			))}
		</ul>
	)
})
