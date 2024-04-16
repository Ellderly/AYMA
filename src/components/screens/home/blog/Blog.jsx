import Carusel from '../../../carusel/Carusel.jsx'
import BlogItem from './BlogItem.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { format, parseISO } from 'date-fns'
// import { format, parseISO } from 'date-fns';

const Blog = ({ title, titleStyle }) => {
	const [blogItems, setBlogItems] = useState([
		{
			title:
				'Ditching the grind: how AYMA TECH’s Telegram bots are leveling up your tech game.',
			pubDate: { date: '2023-04-12T14:00:00Z' },
			link: 'https://medium.com/@aymatech/ditching-the-grind-how-ayma-techs-telegram-bots-are-leveling-up-your-tech-game-d62fded360ba',
			description:
				'Hey there, tech enthusiasts and curious minds! Ready to dive into the lowdown on how AYMA TECH is shaking things up with its Telegram automation? Let’s break it down in simple terms, sprinkle in some IT slang, and chat about why this tech is more than just a buzz.',
		},
		{
			title: 'AYMA TECH Bots for Customer Support: Why They’re Awesome',
			pubDate: { date: '2023-04-13T14:00:00Z' },
			link: 'https://medium.com/@aymatech/ayma-tech-bots-for-customer-support-why-theyre-awesome-eb1d709cb008',
			description:
				'Imagine being able to reach out for support anytime, even at 3 AM, and getting an immediate response. This isn’t a pipe dream; it’s reality thanks to AYMA TECH’s bots. Let’s dive into why these are game-changers and how they can revolutionize your business.',
		},
		{
			title: 'AYMA TECH Bots for Customer Support: Why They’re Awesome',
			pubDate: { date: '2023-04-13T14:00:00Z' },
			link: 'https://medium.com/@aymatech/ayma-tech-bots-for-customer-support-why-theyre-awesome-eb1d709cb008',
			description:
				'Imagine being able to reach out for support anytime, even at 3 AM, and getting an immediate response. This isn’t a pipe dream; it’s reality thanks to AYMA TECH’s bots. Let’s dive into why these are game-changers and how they can revolutionize your business.',
		},
	])

	// useEffect(() => {
	// 	axios
	// 		.get('https://best-marketing.top/api/blog')
	// 		.then(response => setBlogItems(response.data))
	// 		.catch(error => console.error('Ошибка при получении данных:', error))
	// }, [])

	return (
		<div className='mt-[150px] mb-[50px] blog'>
			<div className='container'>
				<h2
					className={`text-white text-[33px] md:text-[50px] mb-5 ${titleStyle}`}
				>
					{title}
				</h2>
				<Carusel
					dotsDefault={false}
					infinite={true}
					slidesDefault={3}
					slidesTablet={2}
					slidesMobile={1}
					autoPlay={false}
					speed={1000}
				>
					{blogItems.map((item, index) => (
						<BlogItem
							key={index}
							title={item.title}
							time='2 min read'
							date={format(parseISO(item.pubDate.date), "'on' MMMM dd, yyyy")}
							name='AYMA TECH'
							link={item.link}
							description={item.description}
						/>
					))}
				</Carusel>
			</div>
		</div>
	)
}

export default Blog
