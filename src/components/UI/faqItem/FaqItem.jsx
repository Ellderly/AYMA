import { useState } from 'react'

const FaqItem = ({
	title,
	titleColor,
	children,
	hexagon,
	styles1,
	styles2,
	description,
	...props
}) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={'my-4 lg:my-5'}>
			<div
				className={'flex justify-between gap-2 cursor-pointer'}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div
					className={`font-druk flex flex-col overflow-hidden items-center justify-center w-full text-[10px] lg:text-[17px]  ${
						titleColor ? titleColor : isOpen ? 'text-orange' : 'text-white'
					} `}
				>
					<div className={`overflow-hidden w-full h-[100%] `}>
						<div className={`${styles1} py-[8px] px-[10px]`}>
							<span className='mr-[50px]'>{title}</span>
						</div>
					</div>
				</div>
				<img
					className={'w-full max-w-[30px]'}
					src={isOpen ? './pop-open.svg' : './pop-close.svg'}
					alt=''
				/>
			</div>
			{isOpen && (
				<div className='flex gap-2'>
					<div className='overflow-hidden'>
						<div
							className={`text-white font-ptMono text-[11px] box-border p-5 lg:text-[14px] w-full ${hexagon}`}
						>
							{description ? (
								<div dangerouslySetInnerHTML={{ __html: description }} />
							) : (
								children
							)}
						</div>
					</div>
					{/* <div className='w-[30px]'></div> */}
				</div>
			)}
		</div>
	)
}

export default FaqItem
