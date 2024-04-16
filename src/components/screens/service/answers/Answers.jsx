import FaqItem from '../../../UI/faqItem/FaqItem.jsx'

const Answers = () => {
	return (
		<div className={'container font-druk'}>
			<FaqItem
				title={'РОЗРОБКА ЧАТ-БОТІВ ПІД КЛЮЧ'}
				hexagon={'hexagon'}
				styles1={`answer-btn-bg ${
					document.documentElement.classList.contains('ios')
						? 'text-[15px]'
						: 'text-[8px]'
				} md:text-[16px]`}
			>
				<div
					className={
						'font-druk w-full box-border px-[10px] md:px-[30px] py-[10px] md:py-[20px]'
					}
				>
					<h3
						className={`lg:text-[20px] ${
							document.documentElement.classList.contains('ios')
								? 'text-[25px]'
								: 'text-[11px]'
						}`}
					>
						{' '}
						Ця послуга включає повний процес створення чат-БОТА, який
						відповідатиме конкретним потребам вашого бізнесу:
					</h3>
					<ul
						className={
							'list-disc list-inside  mr-[15px] box-border py-7 px-2 flex flex-col gap-[15px]'
						}
					>
						<li className={'text-[9px] lg:text-[15px]'}>
							<b>Аналіз потреб та цілей:</b>{' '}
							<span className='font-ptMono normal-case lg:text-[18px] ml-[10px]'>
								Визначаємо функціональність, яку повинен мати чат-БОТ, та як він
								може допомогти в досягненні бізнес-цілей.
							</span>
						</li>
						<li className={'text-[9px] lg:text-[15px]'}>
							<b>Проектування та розробка:</b>
							<span className='font-ptMono normal-case lg:text-[18px] ml-[10px]'>
								Створюємо унікальний чат-БОТ з урахуванням всіх необхідних
								інтеграцій та функцій.
							</span>
						</li>
						<li className={' text-[9px]lg:text-[16px]'}>
							<b>Тестування та запуск:</b>
							<span className='font-ptMono normal-case lg:text-[18px] ml-[10px]'>
								Переконуємось, що чат-БОТ працює бездоганно перед його запуском
								та робимо реліз.
							</span>
						</li>
					</ul>
				</div>
			</FaqItem>
			<FaqItem
				title={'Бізнес під ключ Website + Chatbot + CRM'}
				hexagon={'hexagon'}
				styles1={`answer-btn-bg ${
					document.documentElement.classList.contains('ios')
						? 'text-[15px]'
						: 'text-[8px]'
				} md:text-[16px]`}
			>
				<div className={'font-druk'}>
					<h3
						className={`lg:text-[20px] ${
							document.documentElement.classList.contains('ios')
								? 'text-[25px]'
								: 'text-[11px]'
						}`}
					>
						{' '}
						Ця послуга надає комплексний підхід до створення бізнесу з повного
						нуля до готового сервісу:
					</h3>
					<ul
						className={
							'list-disc list-inside py-7 px-2 flex flex-col gap-[15px]'
						}
					>
						<li className={'text-[10px] lg:text-[16px]'}>
							<b>Створення цільової сторінки (Landing Page):</b>{' '}
							<span className='font-ptMono normal-case lg:text-[18px] ml-[10px]'>
								Розробка привабливої та ефективної веб-сторінки , що сприяє
								конверсії відвідувачів у клієнтів.
							</span>
						</li>
						<li className={'text-[10px] lg:text-[16px]'}>
							<b>Розробка чат-БОТА:</b>
							<span className='font-ptMono normal-case lg:text-[18px] ml-[10px]'>
								Чат-БОТ для ефективної взаємодії з клієнтами на веб-сторінці та
								в месенджерах.
							</span>
						</li>
						<li className={' text-[10px] lg:text-[16px]'}>
							<b>Інтеграція з CRM-системою:</b>
							<span className='font-ptMono normal-case lg:text-[18px] ml-[10px]'>
								Підключення необхідних сервісів та інструментів для обліку
								клієнтів та продажів.
							</span>
						</li>
					</ul>
				</div>
			</FaqItem>
			<FaqItem
				title={'БОТИ ayma tech'}
				hexagon={'hexagon'}
				styles1={`answer-btn-bg ${
					document.documentElement.classList.contains('ios')
						? 'text-[15px]'
						: 'text-[8px]'
				} md:text-[16px]`}
			>
				<div
					className={
						'font-druk  w-full box-border px-0 md:px-[30px] py-[10px] md:py-[20px]'
					}
				>
					<ul
						className={
							'list-inside py-7 px-2 flex flex-col gap-[15px] list-none'
						}
					>
						<li className={'text-[10px] lg:text-[16px]'}>
							<b>АAT | Economix</b>
							<br />
							<span className='font-ptMono normal-case lg:text-[18px] ml-[10px]'>
								Швидко конвертує валюту в будь-яку іншу валюту та працює з
								криптовалютами, основуючись на актуальних міжнародних курсах
								обміну.
							</span>
						</li>
						<li className={'text-[10px] lg:text-[16px]'}>
							<b>AT | AI Assistant</b>
							<br />
							<span className='font-ptMono normal-case lg:text-[18px] ml-[10px]'>
								Використовує технології штучного інтелекту для надання текстової
								підтримки користувачам, а також має здатність генерувати
								статичні зображення за запитом.
							</span>
						</li>
						<li className={'text-[10px] lg:text-[16px]'}>
							<b>AT | AutoResponder</b>
							<br />
							<span className='font-ptMono normal-case lg:text-[18px] ml-[10px]'>
								Інструмент для обробки запитів на приєднання до груп або каналів
								у Телеграмі. Також БОТ надає можливість адміністратору
								налаштовувати відправку індивідуальних повідомлень або масової
								розсилки.
							</span>
						</li>
						<li className={'text-[10px] lg:text-[16px]'}>
							<b>AT | Grabber</b>
							<br />
							<span className='font-ptMono normal-case lg:text-[18px] ml-[10px]'>
								Інструмент для копіювання текстового та графічного контенту з
								будь-якого відкритого або закритого телеграм-каналу. Має
								інтегрований редактор, який дозволяє адміністратору вносити
								необхідні зміни безпосередньо під час процесу копіювання.
							</span>
						</li>
						<li className={'text-[10px] lg:text-[16px]'}>
							<b>AT | Translator</b>
							<br />
							<span className='font-ptMono normal-case lg:text-[18px] ml-[10px]'>
								Використовує передові технології штучного інтелекту для
								перекладу текстів на декілька десятків мов. Це ідеальний
								інструмент для подолання мовних бар'єрів і забезпечення зручної
								комунікації.
							</span>
						</li>
						<li className={'text-[10px] lg:text-[16px]'}>
							<b>AT | Video Converter</b>
							<br />
							<span className='font-ptMono normal-case lg:text-[18px] ml-[10px]'>
								Інструмент для конвертації відеофайлів різних форматів у
								нативний Телеграм-відеоформат, відомий як "кружечки".
							</span>
						</li>
						<li className={'text-[10px] lg:text-[16px]'}>
							<b>AT | Downloader</b>
							<br />
							<span className='font-ptMono normal-case lg:text-[18px] ml-[10px]'>
								Інструмент для швидкого та ефективного завантаження аудіо- або
								відеофайлів з будь-яких відкритих інтернет-ресурсів.
							</span>
						</li>
						<li className={'text-[10px] lg:text-[16px]'}>
							<b>AT | AutoPoster</b>
							<br />
							<span className='font-ptMono normal-case lg:text-[18px] ml-[10px]'>
								БОТ дозволяє налаштовувати параметри постів, включаючи додавання
								інтерактивних кнопок, планування публікацій заздалегідь, а також
								налаштування автоматичного щоденного постингу.
							</span>
						</li>
					</ul>
				</div>
			</FaqItem>

			{/* <FaqItem
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
			</FaqItem> */}
		</div>
	)
}

export default Answers
