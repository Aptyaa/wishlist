import { memo } from 'react'

interface WishItemProps {
	wish: string
	onDelete: (index: number) => void
	index: number
}

export default memo(function WishItem({
	onDelete,
	wish,
	index,
}: WishItemProps) {
	return (
		<li
			style={{
				listStyle: 'none',
				padding: '10px',
				margin: '5px 0',
				backgroundColor: '#f9f9f9',
				border: '1px solid #ddd',
				borderRadius: '5px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			{wish}
			<button
				onClick={() => onDelete(index)}
				style={{
					padding: '5px 10px',
					borderRadius: '5px',
					border: 'none',
					backgroundColor: '#ff4d4d',
					color: '#fff',
					cursor: 'pointer',
				}}
			>
				X
			</button>
		</li>
	)
})
