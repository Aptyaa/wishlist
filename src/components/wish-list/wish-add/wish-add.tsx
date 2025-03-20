import { ChangeEvent } from 'react'

interface WishAddProps {
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	onClick: () => void
}
function WishAdd({ value, onChange, onClick }: WishAddProps) {
	return (
		<div>
			<label htmlFor='inputWish' />
			<input
				style={{
					marginRight: '10px',
					padding: '10px',
					width: '300px',
					borderRadius: '5px',
					border: '1px solid #ccc',
					fontSize: '16px',
				}}
				type='text'
				id='inputWish'
				placeholder='Добавь желание'
				value={value}
				onChange={onChange}
			/>
			<button
				style={{
					padding: '10px 20px',
					borderRadius: '5px',
					border: 'none',
					backgroundColor: '#007bff',
					color: '#fff',
					fontSize: '16px',
					cursor: 'pointer',
				}}
				onClick={onClick}
			>
				Добавить
			</button>
		</div>
	)
}

export default WishAdd
