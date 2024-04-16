import FaqItem from '../../../UI/faqItem/FaqItem.jsx'

const MediaAnswers = () => {
	return (
		<div className='container'>
			<h3 className='text-[27px] md:text-[40px] lg:text-[70px] md:text-right lg:w-[55%] leading-none md:ml-auto text-white text-center font-kleemax tracking-widest'>
				Готові рішення за підпискою:
			</h3>
			<FaqItem
				title={'AT | Grabber'}
				hexagon={'hexagon'}
				styles1={'answer-btn-bg text-[11px] md:text-[16px]'}
			>
				<div
					className={
						'font-druk w-full box-border px-0 md:px-[30px] py-[10px] md:py-[20px]'
					}
				>
					<div className='text-[8px] md:text-[13px] lg:text-[15px] font-ptMono tracking-widest normal-case'>
						Легко скопіює текстовий та графічний контент з будь-якого
						телеграм-каналу. Має інтегрований редактор, який дозволяє
						адміністратору вносити зміни навіть під час процесу копіювання
					</div>
				</div>
			</FaqItem>
			<FaqItem
				title={'AT | AI Assistant'}
				hexagon={'hexagon'}
				styles1={'answer-btn-bg text-[11px] md:text-[16px]'}
			>
				<div
					className={
						'font-druk w-full box-border px-[10px] md:px-[30px] py-[10px] md:py-[20px]'
					}
				>
					<div className='text-[8px] md:text-[13px] lg:text-[15px] font-ptMono tracking-widest normal-case'>
						Використовує технології штучного інтелекту для надання текстової
						підтримки користувачам, а також генерує статичні зображення за
						запитом
					</div>
				</div>
			</FaqItem>
			<FaqItem
				title={'AT | Downloader'}
				hexagon={'hexagon'}
				styles1={'answer-btn-bg text-[11px] md:text-[16px]'}
			>
				<div
					className={
						'font-druk w-full box-border px-[10px] md:px-[30px] py-[10px] md:py-[20px]'
					}
				>
					<div className='text-[8px] md:text-[13px] lg:text-[15px] font-ptMono tracking-widest normal-case'>
						Швидко та ефективно завантажить аудіо- або відеофайли з будь-яких
						відкритих інтернет-ресурсів: Instagram, Pinterest, Pornhub, YouTube
						тощо
					</div>
				</div>
			</FaqItem>
			<FaqItem
				title={'AT | Economix'}
				hexagon={'hexagon'}
				styles1={'answer-btn-bg text-[11px] md:text-[16px]'}
			>
				<div
					className={
						'font-druk w-full box-border px-[10px] md:px-[30px] py-[10px] md:py-[20px]'
					}
				>
					<div className='text-[8px] md:text-[13px] lg:text-[15px] font-ptMono tracking-widest normal-case'>
						Потужний фінансовий асистент, що швидко конвертує валюту в будь-яку
						іншу валюту та працює з криптовалютами, ґрунтуючись на актуальних
						міжнародних курсах обміну
					</div>
				</div>
			</FaqItem>
		</div>
	)
}

export default MediaAnswers
