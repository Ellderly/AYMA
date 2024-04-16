import React, { useState, useEffect } from 'react'
import Button from '../../../UI/button/Button'
import axios from 'axios'

const Dropdown = ({ title, children, isOpen, toggleDropdown }) => {
	return (
		<div className='my-4 '>
			<button
				onClick={() => toggleDropdown(title)} // Изменено для управления состоянием в Services
				className={`px-4 py-2 rounded ${
					document.documentElement.classList.contains('ios')
						? 'text-h-ios'
						: 'text-h-android'
				} text-left font-druk lg:text-[18px] lg:ml-[50px] ${
					isOpen ? 'text-green lg:text-[28px] ' : 'text-white'
				}`}
			>
				{title}
			</button>
			<div
				className={`mt-2 ml-8 ${
					document.documentElement.classList.contains('ios')
						? 'text-[24px]'
						: 'text-[11px]'
				} lg:text-[16px] text-green font-druk lg:absolute lg:right-[80px] lg:top-0 lg:w-[400px] lg:text-right lg:h-[300px] justify-between ${
					isOpen ? 'flex flex-col gap-2' : 'hidden'
				}`}
				dangerouslySetInnerHTML={{ __html: children }}
			></div>
		</div>
	)
}

const Services = () => {
	const [services, setServices] = useState([])
	const [activeDropdown, setActiveDropdown] = useState('')

	useEffect(() => {
		axios
			.get('https://best-marketing.top/api/services')
			.then(response => {
				const servicesData = response.data.map(service => ({
					...service,
					description: {
						...service.description,
						description: decodeHtmlEntities(service.description.description),
					},
				}))
				setServices(servicesData)
				if (servicesData.length > 0) {
					setActiveDropdown(servicesData[0].description.name)
				}
			})
			.catch(error => console.log(error))
	}, [])

	// Функция для декодирования HTML-сущностей и замены className на class в строке
	function decodeHtmlEntities(text) {
		const textArea = document.createElement('textarea')
		textArea.innerHTML = text
		return textArea.value
			.replace(/className/g, 'class')
			.replace(/<\/?pre>/g, '')
			.replace(/<\/?em>/g, '')
	}
	let src = ''
	let dropTitle = ''
	// Определяем путь к изображению на основе активного Dropdown
	// Замечание: Может потребоваться обновить логику определения пути к изображению в зависимости от ваших данных
	switch (activeDropdown) {
		case 'CHATBOT DEVELOPMENT':
			src = './services-icon-1.svg'
			dropTitle = 'переваги'
			break
		case 'AYMA TECH BOTS':
			src = './services-icon-3.svg'
			dropTitle = 'за підпискою'

			break
		case 'PACKAGE SERVICES':
			src = './services-icon-2.svg'
			dropTitle = 'переваги'

			break
		default:
			src = './services-icon-1.svg'
	}

	const toggleDropdown = title => {
		setActiveDropdown(title)
	}

	return (
		<div className='my-[100px] lg:my-[150px]'>
			<div className='container mx-auto p-4 font-druk relative'>
				<div className='flex items-center justify-between'>
					<h2 className='text-white text-[50px] text-left font-kleemax lg:translate-y-[-70px]'>
						Послуги
					</h2>
					<h3 className='text-white text-[40px] hidden lg:block text-left font-kleemax lg:translate-y-[-70px]'>
						{dropTitle}
					</h3>
				</div>
				<img
					className={`hidden lg:block absolute left-5 top-18 w-10`}
					src={src}
					alt=''
				/>
				{services.map(service => (
					<Dropdown
						key={service.id}
						title={service.description.name}
						isOpen={activeDropdown === service.description.name}
						toggleDropdown={() => toggleDropdown(service.description.name)}
					>
						{service.description.description}
					</Dropdown>
				))}
				<img
					className='hidden lg:block absolute right-[35px] top-0 w-10'
					src='./services-icon.svg'
					alt=''
				/>
				<div className='my-10 lg:my-20 flex justify-start w-max relative'>
					<img
						src='./green-allipse.svg'
						alt=''
						className='absolute w-full h-[200px]'
					/>
					<img
						src='./green-allipse.svg'
						alt=''
						className='absolute w-full h-[200px]'
					/>
					<Button>Детальніше</Button>
				</div>
			</div>
		</div>
	)
}

export default Services
