import React, { useEffect, useState } from 'react'
import Carusel from '../../../carusel/Carusel'
import Button from '../../../UI/button/Button'
import './Cases.css'
import axios from 'axios'

const Modal = ({ description, onMouseEnter, onMouseLeave }) => {
	return (
		<div className='overflow-hidden absolute top-0  w-full max-w-[330px] h-full'>
			<div
				className='absolute top-0  w-full max-w-[330px] h-full text-black modalCases'
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<div
					className='modaltext text-center p-5 font-ptMono'
					dangerouslySetInnerHTML={{ __html: description }}
				></div>

				<div className='mt-auto'>
					<Button casesStyle='casesStyle' casesStyleButton='casesStyleButton'>
						<a href='#' target='_blank' rel='nofollow noopener'>
							Read more
						</a>
					</Button>
				</div>
			</div>
		</div>
	)
}

const Cases = () => {
	const [caseItems, setCaseItems] = useState([])
	const [hoveredItem, setHoveredItem] = useState(null)

	useEffect(() => {
		axios
			.get('https://best-marketing.top/api/work-cases')
			.then(response => setCaseItems(response.data))
			.catch(error => console.error('Ошибка при получении данных:', error))
	}, [])

	return (
		<div id='cases' className='my-[150px]'>
			<div className='container'>
				<h2 className='text-white mb-5 text-[33px] md:text-[50px] text-right'>
					Кейси
				</h2>
			</div>

			<Carusel
				dotsDefault={true}
				slidesDefault={3}
				slidesTablet={2}
				slidesMobile={1}
				autoPlay={false}
				speed={500}
				infinite={true}
			>
				{caseItems.map((item, index) => (
					<div
						key={item.file_path}
						className='cursor-pointer relative max-w-[330px]'
						onMouseEnter={() => setHoveredItem(index)}
						onMouseLeave={() => setHoveredItem(null)}
					>
						<img className='m-auto max-w-[330px]' src={item.file_path} alt='' />
						{hoveredItem === index && (
							<Modal
								onMouseEnter={() => setHoveredItem(index)} // Задерживает исчезновение модалки при наведении на неё
								onMouseLeave={() => setHoveredItem(null)} // Скрывает модалку при уходе курсора
								description={item.description}
							/>
						)}
					</div>
				))}
			</Carusel>
		</div>
	)
}

export default Cases
