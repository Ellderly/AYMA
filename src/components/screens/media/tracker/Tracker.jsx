import { useState } from 'react'
import TreackerPopup from './TreackerPopup'

const Tracker = () => {
	const [isPopUpOpen, setPopUpOpen] = useState(false)
	const [popUpData, setPopUpData] = useState(null)

	const handleOpenPopUp = type => {
		setPopUpData(popUpContents[type])
		setPopUpOpen(true)
	}

	const handleClosePopUp = () => {
		setPopUpOpen(false)
	}

	const popUpContents = {
		tracker: {
			title: `Налаштування  Трекерів`,
			img: '/cam.png',
			header1: 'Інтеграція та налаштування CRM-систем:',
			content1:
				'Звернувшись до нас за сервісом налаштування трекерів, ви зекономите час і ресурси, які можна буде спрямувати на розвиток вашого бізнесу. Ви також отримаєте доступ до експертних знань і передових технологій, забезпечуючи точність і ефективність відстеження.',
			header2: 'Інтеграція з бізнес-процесами:',
			content2:
				'Ми працюємо не тільки з технічною стороною налаштувань, але й допомагаємо інтегрувати аналітику трекерів безпосередньо в ваші бізнес-процеси, забезпечуючи цінні інсайти для стратегічного планування.',
			header3: 'Системи для інтеграції:',
			content3:
				'Keitaro, Binom, Affise, RedTrack, Voluum, AppsFlyer, Google Analytics etc.',
			header4: '*',
			content4: 'Також надаємо послугу з розробки CRM-систем під ключ.',
		},
		crm: {
			title: 'Інтеграція та налаштування CRM-систем',
			img: '/chip.png',
			header1: 'Переваги аутсорсингу:',
			content1:
				'Делегуючи процес інтеграції CRM нам, ви отримуєте не тільки технічну експертизу, але й стратегічне бачення оптимізації ваших відносин з клієнтами. Це дозволить вам зосередитися на ключових аспектах вашого бізнесу, маючи повний контроль над даними клієнтів.',
			header2: 'Інтеграція з бізнес-процесами:',
			content2:
				'Наша робота перевищує технічну інтеграцію, оскільки ми забезпечуємо впровадження CRM-систем в щоденні бізнес-операції, спрощуючи управління відносинами з клієнтами та оптимізуючи продажі та маркетинг.',
			header3: 'Системи для інтеграції:',
			content3: 'ZohoCRM, KeyCRM, HubSpot, ClickUp, Creatio etc.',
		},
	}
	return (
		<div className='my-[50px]'>
			<div className='container '>
				<h3 className='text-[27px] md:text-[45px] lg:text-[70px] text-center leading-none md:ml-auto text-white  font-kleemax tracking-widest'>
					Налаштування трекерів та CRM систем
				</h3>
				<div className='mt-[21px] grid grid-cols-1 md:grid-cols-2 gap-[40px] bg-track-bg-mobile md:bg-track-bg-desc bg-cover bg-no-repeat'>
					<div className='py-[15px] md:pt-[50px] lg:pt-[150px] lg:py-[50px] px-[21px] bg-whiteOpacity h-[353px] md:h-auto flex items-end relative border border-whiteOpacity'>
						<img
							src='./trackerHandOne.png'
							alt=''
							className='absolute pointer-events-none right-0 top-0'
						/>
						<img
							src='./trackerBorderBottomLeft.svg'
							alt=''
							className='absolute pointer-events-none left-0 bottom-0 w-[15px]'
						/>
						<img
							src='./trackerBorderBottomRight.svg'
							alt=''
							className='absolute pointer-events-none right-0 bottom-0 w-[15px]'
						/>
						<img
							src='./trackerBorderTopLeft.svg'
							alt=''
							className='absolute pointer-events-none left-0 top-0 w-[15px]'
						/>
						<img
							src='./trackerBorderTopRight.svg'
							alt=''
							className='absolute pointer-events-none right-0 top-0 w-[15px]'
						/>
						<div className='text-white flex flex-col gap-[18px]'>
							<h4
								className={`font-druk z-10  ${
									document.documentElement.classList.contains('ios')
										? 'text-22px]'
										: 'text-[14px]'
								} md:text-[20px] lg:text-[30px] normal-case`}
							>
								Налаштування <br /> трекерів
							</h4>
							<p className='text-[9px] md:text-[15px] lg:text-[20px]  normal-case z-10 tracking-widest'>
								Ми допоможемо вам встановити та налаштувати інструменти для
								моніторингу взаємодії людей з вашим вебсайтом або рекламою.
								Завдяки чому ви будете глибше розуміти, що цікавить вашу
								аудиторію та їх поведінку в інтернеті, щоб оптимізувати свої
								кампанії та підвищити конверсії
							</p>
							<div className={`overflow-hidden w-max `}>
								<button
									className={`block buttonMini m-auto  bg-contain bg-center bg-no-repeat text-white text-[9px] py-[5px]  md:text-[19px] px-[20px] tracking-widest flex items-center gap-[10px]`}
									onClick={() => handleOpenPopUp('tracker')}
								>
									Детальніше{' '}
									<img
										src='./pop-open.svg'
										alt=''
										className='w-[9px] md:w-[19px]'
									/>
								</button>
							</div>
						</div>
					</div>
					<div className='py-[15px] md:pt-[50px] lg:pt-[150px] lg:py-[50px] px-[21px] bg-whiteOpacity h-[353px] md:h-auto flex items-end relative text-right md:text-left border border-whiteOpacity'>
						<img
							src='./trackerHandTwo.png'
							alt=''
							className='absolute pointer-events-none right-0 top-0 scale-x-[-1] md:scale-x-[1]'
						/>

						<img
							src='./trackerBorderBottomLeft.svg'
							alt=''
							className='absolute pointer-events-none left-0 bottom-0 w-[15px]'
						/>
						<img
							src='./trackerBorderBottomRight.svg'
							alt=''
							className='absolute pointer-events-none right-0 bottom-0 w-[15px]'
						/>
						<img
							src='./trackerBorderTopLeft.svg'
							alt=''
							className='absolute pointer-events-none left-0 top-0 w-[15px]'
						/>
						<img
							src='./trackerBorderTopRight.svg'
							alt=''
							className='absolute pointer-events-none right-0 top-0 w-[15px]'
						/>
						<div className='text-white flex flex-col gap-[18px]'>
							<h4
								className={`font-druk z-10 ${
									document.documentElement.classList.contains('ios')
										? 'text-22px]'
										: 'text-[14px]'
								} md:text-[20px] lg:text-[30px] normal-case`}
							>
								Інтеграція <br /> та налаштування <br /> CRM-систем
							</h4>
							<p className='text-[9px] md:text-[15px] lg:text-[20px]  normal-case z-10 tracking-widest'>
								Ми спеціалізуємося на інтеграції та налаштуванні CRM-систем, що
								стають ключем до ефективного управління відносинамиз клієнтами.
								Наш підхід дозволяє об'єднати всю інформацію про клієнтів і
								взаємоді їз ними в одному місці, сприяючи більш глибокому
								розумінню їхніх потреб і підвищенню ефективності продажів та
								обслуговування
							</p>
							<div className={`overflow-hidden w-max ml-auto md:m-0`}>
								<button
									onClick={() => handleOpenPopUp('crm')}
									className={`block buttonMini m-auto  bg-contain bg-center bg-no-repeat text-white text-[9px] md:text-[19px] py-[5px] px-[20px] tracking-widest flex items-center gap-[10px]`}
								>
									Детальніше{' '}
									<img
										src='./pop-open.svg'
										alt=''
										className='w-[9px] md:w-[19px]'
									/>
								</button>
							</div>
						</div>
					</div>
					<TreackerPopup
						isOpen={isPopUpOpen}
						data={popUpData}
						onClose={handleClosePopUp}
					/>
				</div>
			</div>
		</div>
	)
}

export default Tracker
