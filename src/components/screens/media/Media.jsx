import React from 'react'
import Header from '../../header/Header.jsx'
import AboutMedia from './AboutMedia.jsx'
import Advantages from './advantages/Advantages.jsx'
import Contact from '../../contact/Contact.jsx'
import Blog from '../home/blog/Blog.jsx'
import MediaAnswers from './mediaAnswers/MediaAnswers.jsx'
import MediaServices from './mediaServices/MediaServices.jsx'
import MediaServicesTwo from './mediaServices/MediaServicesTwo.jsx'
import Tracker from './tracker/Tracker.jsx'
import MediaCases from './mediaCases/MediaCases.jsx'

const Media = () => {
	return (
		<div>
			<Header
				title={'Хочете, щоб ваша реклама працювала на повну?'}
				image1={'bg-double-bg-media'}
				text={'Наші інструменти допоможуть вам у цьому!'}
				bg={'double-bg-main'}
			/>
			<div className='container'>
				<div className='flex flex-col gap-[40px] md:flex-row justify-between my-[100px]'>
					<div className='md:w-[330px] text-center normal-case mx-auto my-0 relative'>
						<img
							src='./ellipse-default.svg'
							alt=''
							className='absolute hidden md:block'
						/>
						<img
							src='/infinity.svg'
							alt=''
							className='block m-auto h-[50px] lg:h-[110px]'
						/>
						<p className='text-white mt-[15px] tracking-widest text-[12px] md:text-[23px]'>
							Термін життя зв’язки
						</p>
					</div>
					<div className='md:w-[330px] text-center normal-case mx-auto my-0'>
						<img
							src='/40.svg'
							alt=''
							className='block m-auto h-[50px] lg:h-[110px]'
						/>
						<p className='text-white mt-[15px] tracking-widest text-[12px] md:text-[23px]'>
							Середній показник конверсії
						</p>
					</div>
					<div className='md:w-[330px] text-center normal-case mx-auto my-0 relative'>
						<img
							src='./ellipse-default.svg'
							alt=''
							className='absolute hidden md:block'
						/>
						<img
							src='/8.svg'
							alt=''
							className='block m-auto h-[50px] lg:h-[110px]'
						/>
						<p className='text-white mt-[15px] tracking-widest text-[12px] md:text-[23px]'>
							Адаптація під будь-яку вертикаль
						</p>
					</div>
				</div>
			</div>
			<AboutMedia
				h3={`Чат-боти воронки <br /> з
						<span class='text-[14px] lg:text-[40px]'>WebView</span>
						додатками`}
				p={`		Новаторське рішення для залучення трафіку – Telegram чат-боти з
						популярними демо-іграми (AVIATOR,  LUCKY JET, BURNING WINS, TRADING)
						<br />
						<br />
						Це чудова альтернатива традиційним ігровим додаткам, що працює прямо
						у вашому улюбленому месенджері. Ідеально підходить для тих, хто
						шукає свіжі та оригінальні методи привернення уваги аудиторії`}
			/>
			<Advantages
				h3='Переваги:'
				block_1_h4='Відсутність блокувань:'
				block_1_p='Демо-версії ігор працюють без використання клоак та при
									скіпливих модерацій'
				block_2_h4={'Швидкість:'}
				block_2_p={`Telegram немає нав'язливої реклами,тому гра відбувається
									динамічно,без відволікаючих факторів`}
				block_3_h4={'Універсальність:'}
				block_3_p={`Взаємодіяти з ботом можна з ПК, Mac, Android телефонів, iPhone
									та інших мобільних пристроїв`}
				svgClass='w-[35px] md:w-[60px] lg:w-[80px]'
				svgViewBox={'0 0 37 207'}
				svgD={
					'M36.5715 0.913654L36.5715 34.6885L18.8701 52.3899L18.8701 114.469L1.0001 131.912L1.0001 206.646'
				}
				svgStroke={'0.342033'}
				bgImage={'/bg-image-block-desc.png'}
				secondImage={'/combs.svg'}
				secondImageStyle={`absolute left-[-60px] top-[20px] lg:top-[100px] z-[1] w-[130px] md:w-[350px]`}
				emptySecondImage={'/combs-empty.svg'}
				emptySecondImageStyle={`absolute hidden md:block bottom-0 w-[200px] left-[230px] lg:left-[500px]`}
				bgImageStyle={
					'absolute left-[-80px] md:left-[40px] bottom-[0px] z-[2]  w-[200px] md:w-[450px] lg:w-[650px]'
				}
			/>
			<MediaServicesTwo />

			<AboutMedia
				h3={`PWA-додатки`}
				p={`Вже давно та широко використовуються на аффілейт ринку. Швидко завантажуються на будь-якому пристрої, підтримують постійний зв'язок з аудиторією через push-сповіщення і допомагають медіабаєрам аналізувати поведінку користувачів для кращої  взаємодії. А ще економлять ваші кошти, оскільки не потребують окремої розробки під різні платформи`}
			/>
			<Advantages
				h3='Переваги:'
				block_1_h4='Оптимізація рекламних кампаній:'
				block_1_p='Інтегровані аналітичні інструменти допоможуть медіабаєрам аналізувати поведінку користувачів,оптимізувати рекламний контент та підвищити ROI'
				block_2_h4={'Універсальний доступ:'}
				block_2_p={`PWA додатки легко використовувати на будь-якому пристрої, від мобільних телефонів до настільних комп'ютерів, дозволяючи аудиторії залишатися на зв'язку з улюбленим контентом де б вони не були`}
				block_3_h4={'Кост-ефективність:'}
				block_3_p={`Розробка PWA вигідна альтернатива створенню нативних додатків для різних платформ, знижуючи витрати на розробку та підтримку`}
				svgClass='w-[37px] md:w-[70px] lg:w-[80px]'
				svgViewBox={'0 0 36 262'}
				svgD={
					'M35 4.21703e-06L35 68.4613L18.0806 89.242L18.0806 176.474L1 196.952L1 262'
				}
				svgStroke={'0.329114'}
				bgImage={'/bg-image-block2.png'}
				bgImageStyle={
					'absolute left-[-80px] md:left-[0px] bottom-[0px] z-[2]  w-[200px] md:w-[450px] lg:w-[650px]'
				}
				secondImage={'/lines.svg'}
				secondImageStyle={`absolute left-[-20px] md:left-[-60px] top-[100px] md:top-[380px] z-[1] w-[60px] md:w-[170px]`}
				emptySecondImage={'/lines-empty.svg'}
				emptySecondImageStyle={`absolute bottom-0 w-[50px] md:w-[150px] top-[170px] left-[50px] md:left-[200px] rotate-45 lg:left-[400px]`}
			/>
			<MediaServices />

			<MediaAnswers />
			<Tracker />
			<MediaCases />
			<Blog title={'Ми в ЗМІ'} titleStyle={'text-center'} />

			<Contact />
		</div>
	)
}

export default Media
