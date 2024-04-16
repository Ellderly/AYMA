import React from 'react'
import Button from '../../../UI/button/Button'
import { useContext } from 'react'
import { MenuPopUp } from '../../../../App'

const MediaServices = () => {
	const { modal, setModal } = useContext(MenuPopUp)

	return (
		<div className='relative my-[50px]'>
			<img
				src='./mediaServicesImgMobTwo.png'
				alt=''
				className='absolute right-0 md:hidden pointer-events-none'
			/>
			<img
				src='./mediaServicesImgDescTwo.png'
				alt=''
				className='absolute right-0 hidden h-full md:block pointer-events-none'
			/>
			<img
				src='./mediaServicesTopTwo.svg'
				alt=''
				className='absolute right-[50px] hidden lg:block w-[500px] pointer-events-none'
			/>
			<div className='container'>
				<img
					src='./ellipse-default.svg'
					alt=''
					className='absolute right-0 md:right-auto md:left-0 pointer-events-none'
				/>
				<h3 className='text-[27px] md:text-[45px] lg:text-[70px] leading-none md:ml-auto text-white  font-kleemax tracking-widest'>
					Наші послуги <br /> включають:
				</h3>
				<div className='relative my-12 flex gap-[18px]  '>
					<div className='w-[60px] md:hidden'>
						<svg
							width='60px'
							height='350px'
							viewBox='0 0 53 319'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 7.51019e-06L1 54.5462L18.0837 75.3862L18.0837 124.067L35.3301 143L35.3301 188.5L52 208.5L52 319'
								stroke='white'
								strokeWidth='0.332014'
							/>
						</svg>
					</div>

					<div className='hidden md:block w-[150]'>
						<svg
							width='150'
							height='450'
							viewBox='0 0 156 578'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 0L1 98.7474L52.7535 150.501L52.7535 272L105 323L105 424.5L155.5 468.5L155.5 577.5'
								stroke='white'
							/>
						</svg>
					</div>
					<div className='text-green uppercase flex flex-col justify-around md:justify-between mt-[-10px] md:mt-0'>
						<p className='font-druk text-[10px] md:text-[18px] lg:text-[20px] tracking-widest md:w-[90%] lg:w-[70%]	translate-x-[-50px] md:md:translate-x-[-100px]'>
							Розробку від А до Я:
							<span className='font-ptMono tracking-widest text-white normal-case block mt-[10px]'>
								Ми робимо все – від ідеї до запуску{' '}
							</span>
						</p>
						<p className='font-druk text-[10px] md:text-[18px] lg:text-[20px] tracking-widest md:w-[90%] lg:w-[70%]	translate-x-[-30px] md:translate-x-[-60px]'>
							Інтеграцію з вашими системами:
							<span className='font-ptMono tracking-widest text-white normal-case block mt-[10px]'>
								CRM-системи, трекери, платіжки та будь-які інші необхідні
								системи
							</span>
						</p>
						<p className='font-druk text-[10px] md:text-[18px] lg:text-[20px] tracking-widest md:w-[90%] lg:w-[70%]	translate-x-[-10px] md:translate-x-[-30px]'>
							Персоналізацію:
							<span className='font-ptMono tracking-widest text-white normal-case block mt-[10px]'>
								Чат-бот буде створено під ваш бренд і специфічні потреби
							</span>
						</p>
						<p className='font-druk text-[10px] md:text-[18px] lg:text-[20px] tracking-widest md:w-[80%] lg:w-[70%]'>
							Підтримку та оновлення:
							<span className='font-ptMono tracking-widest text-white normal-case block mt-[10px]'>
								Безперебійна робота чат-ботів, завдяки технічній підтримці та
								регулярним оновленням
							</span>
						</p>
					</div>
				</div>
				<div
					className='hidden md:block w-max ml-[130px] text-[10px]'
					onClick={() => setModal(!modal)}
				>
					<Button className='button m-auto bg-bg-btn-image bg-contain bg-center bg-no-repeat text-white text-[24px] py-[24px] px-[50px] w-max'>
						Звʼязатися
					</Button>
				</div>
			</div>
		</div>
	)
}

export default MediaServices
