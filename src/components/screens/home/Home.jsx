import Header from '../../header/Header.jsx'
import AboutUs from '../../aboutUsContent/AboutUs'
import Contact from '../../contact/Contact'
import Services from './services/Services.jsx'
import Faq from './faq/Faq.jsx'
import Blog from './blog/Blog.jsx'
import Cases from './cases/Cases.jsx'
import Partnets from './partners/Partnets.jsx'
import Clients from './clients/Clients.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
	const [homeItems, setHomeItems] = useState([])

	// useEffect(() => {
	// 	axios
	// 		.get('https://best-marketing.top/api/content-pages/title-home-page')
	// 		.then(response => {
	// 			setHomeItems(response.data.description.title)
	// 			console.log(response.data.description)
	// 		})
	// 		.catch(error => console.error('Ошибка при получении данных:', error))
	// }, [])

	return (
		<div className=''>
			<Header
				// title={homeItems}
				title={'Рішення для вашого бізнесу'}
				image1={'bg-double-bg-main'}
				bg={'double-bg-main'}
			/>
			<AboutUs />
			<Partnets />
			<Clients />
			<Services />
			<Cases />
			<Blog title='Блог' />
			<Contact />
			<Faq />
		</div>
	)
}

export default Home
