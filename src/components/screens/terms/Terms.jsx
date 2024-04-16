import { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
const terms = () => {
	const [privacyItem, setPrivacyItem] = useState([])

	useEffect(() => {
		axios
			.get('https://best-marketing.top/api/content-pages/terms')
			.then(response => {
				const { title, content } = response.data.description
				// Декодирование HTML-сущностей, удаление тегов <pre> и <em>, и замена className на class
				const decodedContent = decodeHtmlEntities(content)
					.replace(/<\/?pre>/g, '')
					.replace(/<\/?em>/g, '') // Удаление тегов <em>
					.replace(/className=/g, 'class=')
				setPrivacyItem({ title, content: decodedContent })
			})
			.catch(error => console.log(error))
	}, [])

	// Функция для декодирования HTML-сущностей в строке и замены className на class
	function decodeHtmlEntities(text) {
		return text
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/className=/g, 'class=')
			.replace(/<\/?em>/g, '') // Удаление тегов <em> прямо здесь
	}

	return (
		<div>
			<div className='container '>
				<h1 className='h2'>{privacyItem.title}</h1>
				<div
					dangerouslySetInnerHTML={{ __html: privacyItem.content }}
					className='text-white'
				></div>
			</div>
		</div>
	)
}

export default terms
