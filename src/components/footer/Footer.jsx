import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Footer = () => {
	const [footerItems, setFooterItems] = useState([])

	useEffect(() => {
		axios.get('https://best-marketing.top/api/settings').then(response => {
			setFooterItems(response.data)
		})
	}, [])
	return (
		<div className=' py-[30px] bg-footer-mob-bg lg:bg-double-bg-footer bouble-bg-footer bg-contain bg-no-repeat bg-right'>
			<div className='container text-white font-ptMono text-[14px] normal-case flex flex-col lg:flex-row gap-[30px] items-center lg:justify-around'>
				<div className='flex gap-[100px] lg:flex-col lg:gap-[30px]'>
					<ul>
						<li>
							<a href=''>Компанія</a>
						</li>
						<li>
							<a href=''>Кейси</a>
						</li>
						<li>
							<a href=''>Послуги</a>
						</li>
						<li>
							<a href=''>
								Ayma Tech для <br /> Медіабаїнгу
							</a>
						</li>
					</ul>

					<ul>
						{footerItems
							.filter(item => item.value.includes('http'))
							.map((item, index) => (
								<li key={index}>
									<a href={item.value}>{item.key}</a>
								</li>
							))}
					</ul>
				</div>
				<div className={'flex gap-[30px] items-center flex-col lg:gap-[100px]'}>
					<div className='text-green lg:text-white leading-8 lg:leading-normal font-druk lg:font-ptMono text-[13px]'>
						{footerItems
							.filter(
								item =>
									item.value.includes('contact@ayma.tech') ||
									item.value.includes('+380') ||
									item.value.includes('@aymatech_contact')
							)
							.map((item, index) => (
								<div
									key={index}
									className={`${
										document.documentElement.classList.contains('ios')
											? 'text-[18px]'
											: 'text-[11px]'
									}`}
								>
									{item.key} {item.value}
								</div>
							))}
					</div>
					<div>
						<Link to='/privacy'>Політика конфіденційності</Link> <br />
						<Link to='/terms'>Політика cookies </Link> <br />
						<a href=''>Політика користування</a>
					</div>
				</div>
				<Link
					to='/'
					className='mt-[20px] mx-auto bg-logo-image  lg:bg-logo-image-lg bg-no-repeat bg-center bg-contain w-full lg:max-w-[310px] lg:m-0 w-max-[310px] h-[30px] lg:h-[150px] lg:-order-1'
				></Link>
			</div>
		</div>
	)
}

export default Footer
