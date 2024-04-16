import React, { useState } from 'react'
import Carusel from '../../../carusel/Carusel'
import Button from '../../../UI/button/Button'

const MediaCases = () => {
	// Состояние для отслеживания позиции пустой картинки
	const [emptyImgIndex, setEmptyImgIndex] = useState(0)

	// Функция для обработки клика по кнопке
	const handleNextClick = () => {
		// Переключение позиции пустой картинки и обновление ее позиции
		const nextIndex = emptyImgIndex === 3 ? 0 : emptyImgIndex + 1
		setEmptyImgIndex(nextIndex)
	}

	// Рендеринг картинок карусели
	const renderCarouselImages = () => {
		return [0, 1, 2, 3].map(index => (
			<img
				key={index}
				src={
					index === emptyImgIndex ? './caruselEmptyImg.svg' : './caruselImg.svg'
				}
				alt=''
				style={{ marginRight: '0px', width: '50px' }} // небольшой отступ между картинками
			/>
		))
	}

	return (
		<div className='my-[70px] container'>
			<div className=''>
				<h2 className='text-white mb-5 text-[33px] md:text-[50px] text-letf'>
					Кейси
				</h2>
			</div>
			<Carusel
				dotsDefault={true}
				slidesDefault={4}
				slidesTablet={2}
				slidesMobile={1}
				autoPlay={false}
				speed={500}
			>
				<div className='max-w-[80%]'>
					<img src='./MediaCasesImg-1.png' alt='' />
				</div>
				<div className='max-w-[80%]'>
					<img src='./MediaCasesImg-1.png' alt='' />
				</div>
				<div className='max-w-[80%]'>
					<img src='./MediaCasesImg-2.png' alt='' />
				</div>
				<div className='max-w-[80%]'>
					<img src='./MediaCasesImg-3.png' alt='' />
				</div>
			</Carusel>
			<div className='flex flex-col md:flex-row gap-[50px] md:gap-[30px] justify-between py-[50px] md:py-[70px]'>
				<div className='text-white relative py-[5px] md:py-[40px] px-[20px] m-auto md:m-0'>
					<img
						src='./mediaCaruselBorder.svg'
						className='hidden md:block absolute top-0 left-0 right-0 bottom-0 pointer-events-none'
						alt=''
					/>
					<img
						src='./mediaCaruselBorderMobile.svg'
						className='md:hidden absolute top-0 left-0 right-0 bottom-0 pointer-events-none'
						alt=''
					/>
					{[
						{
							title: 'Lucky Jet',
							description:
								'Ця гра пропонує користувачам швидкі та емоційні раунди, де їхні рішення можуть призвести до миттєвих виграшів. Ідеально підходить для аудиторії, яка любить азарт та швидкі результати.',
						},
						{
							title: 'Burning Wins',
							description:
								'Класична слот-гра з фруктовою тематикою, яка сподобається шанувальникам традиційних казино-ігор. Проста, але затягуюча, ця гра відмінно підійде для тих, хто цінує класику.',
						},
						{
							title: 'Aviator',
							description:
								'Соціальна гра, яка пропонує користувачам змагатися з іншими у прогнозуванні моменту зростання множника. Відмінно підходить для спільнот, які полюбляють соціальну взаємодію та змагальний дух.',
						},
						{
							title: 'Trading',
							description:
								'Демо-гра, яка імітує реальні умови торгівлі на фінансових ринках. Це відмінний вибір для аудиторії, яка цікавиться фінансами та хоче навчитися торгівлі без ризиків.',
						},
					].map((game, index) => (
						<div
							key={index}
							style={{ display: index === emptyImgIndex ? 'block' : 'none' }}
						>
							<h3 className='text-green text-[11px] md:text-[13px] lg:text-[20px] normal-case'>
								{game.title}
							</h3>
							<p className='font-ptMono normal-case max-w-[320px] md:max-w-[600px] text-[9px] md:text-[11px] lg:text-[15px] mt-[10px] md:mt-[15px]'>
								{game.description}
							</p>
						</div>
					))}
				</div>
				<div className=''>
					<div className='hidden md:flex gap-[20px]'>
						<div className='flex'>{renderCarouselImages()}</div>
						<button onClick={handleNextClick}>
							<img className='w-[60px]' src='./caruselNext.svg' alt='' />
						</button>
					</div>
					<div className='w-max m-auto mt-[30px]'>
						<Button>Зв’язатися</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MediaCases
