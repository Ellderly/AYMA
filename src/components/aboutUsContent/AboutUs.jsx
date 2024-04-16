import React from 'react'
import styles from './style.module.css'

const AboutUs = () => {
	return (
		<div className='my-[50px] text-white font-ptMono text-[13px] bg-green-elipse bg-left bg-no-repeat bg-contain'>
			<div className='container'>
				<div className='flex flex-col gap-[50px] normal-case md:flex-row md:items-center'>
					<div className='flex flex-col gap-[50px] basis-1/3'>
						<div>
							<h2
								className={`font-druk ${
									document.documentElement.classList.contains('ios')
										? 'text-[38px]'
										: 'text-[12px]'
								} text-green lg:text-5xl`}
							>
								50+
							</h2>
							<p className={'lg:text-xl lg:mt-2'}>Реалізованих проєктів</p>
						</div>
						<div>
							<h2 className='font-druk text-[32px] text-green lg:text-5xl'>
								&lt;1 тижня
							</h2>
							<p className={'lg:text-xl lg:mt-2'}>
								Середній час на розробку бота
							</p>
						</div>
						<div>
							<h2 className='font-druk text-[32px] text-green lg:text-5xl'>
								100%
							</h2>
							<p className={'lg:text-xl lg:mt-2'}>Задоволених користувачів</p>
						</div>
					</div>
					<div
						className={`${styles.frame} md:basis-1/2 lg:text-xl xl:text-2xl`}
					>
						<p className='bg-no-repeat px-[12px] py-[20px]'>
							В AYMA TECH ми створюємо чат-ботів, вебсайти, веб-додатки та
							додатки PWA, щоб допомогти вашому бізнесу краще залучати клієнтів.
							А також пропонуємо послуги інтеграції CRM та інших технологій
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
