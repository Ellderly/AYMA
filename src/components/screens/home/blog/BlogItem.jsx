import { useState } from 'react'

const BlogItem = props => {
	const [isExpanded, setIsExpanded] = useState(false)

	// Функция для извлечения текста из HTML для подсчета слов
	const extractText = html => {
		const span = document.createElement('span')
		span.innerHTML = html
		return span.textContent || span.innerText
	}

	// Извлекаем и разделяем текст
	const text = extractText(props.description)
	const words = text.split(/\s+/)

	// Проверяем, нужно ли добавлять "..."
	const needsEllipsis = words.length > 30
	const displayedText = isExpanded
		? props.description
		: words.slice(0, 30).join(' ')

	return (
		<div className='font-ptMono border border-grayOpacity05 max-w-[486px] m-auto mx-2 md:m-2'>
			<div className='border border-grayOpacity m-1 h-full'>
				<div className='bg-blog-item bg-cover bg-no-repeat p-2  text-black text-[16px]'>
					{props.title}
				</div>
				<div className='flex gap-[10px]'>
					<div className='basis-[55%]'>
						<div className='w-full aspect-square bg-A9A9A9'></div>
					</div>
					<div className='basis-[40%] my-2 flex flex-col gap-[5px]'>
						<div className='flex gap-1 text-green  text-[14px]'>
							<img src='./blog-star.svg' alt='' />
							{props.time}
						</div>
						<div className='text-[12px] opacity-70'>{props.date}</div>
						<div className='text-[12px]'>{props.name}</div>
						<a
							href={props.link}
							className='text-green border border-green text-center py-3 my-5 transition-colors hover:text-black hover:bg-green'
						>
							read
						</a>
						<div className='flex gap-2 justify-between flex-auto items-end'>
							<div className='flex gap-1'>
								<span>
									<img src='./blog-item-svg-1.svg' alt='' />
								</span>
								<span>
									<img src='./blog-item-svg-2.svg' alt='' />
								</span>
							</div>
							<div className='flex gap-1'>
								<span>
									<img src='./blog-item-svg-3.svg' alt='' />
								</span>
								<span>
									<img src='./blog-item-svg-4.svg' alt='' />
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='pt-4  pb-14 px-1'>
					<div dangerouslySetInnerHTML={{ __html: displayedText }}></div>
					{/* .../// */}
					{needsEllipsis && !isExpanded && (
						<button onClick={() => setIsExpanded(true)}>...</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default BlogItem
