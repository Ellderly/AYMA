import React from 'react'

const AboutUsText = () => {
	return (
		<div className='flex gap-[17px] ml-[100px]'>
			{/* <img src='/curves-line-1.svg' alt='Описание' /> */}
			<div className='text-white normal-case font-ptMono text-[13px] lg:text-[20px] gap-[30px] flex flex-col justify-between'>
				<div className='-ml-[32px] tick'>
					Відповідати сотням клієнтів одночасно
				</div>
				<div className='tick'>
					Автоматизувати повсякденні та рутинні процеси
				</div>
				<div className='-ml-[32px] tick'>
					Вивести бізнес на новий сучасний рівень
				</div>
			</div>
		</div>
	)
}

export default AboutUsText
