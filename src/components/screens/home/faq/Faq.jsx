import FaqItem from '../../../UI/faqItem/FaqItem.jsx'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Faq = () => {
	const [faqItems, setFaqItems] = useState([])

	useEffect(() => {
		axios.get('https://best-marketing.top/api/faqs').then(response => {
			setFaqItems(response.data)
		})
	}, [])
	return (
		<div className={'container'}>
			<h2 className={'text-white text-[33px] text-center mb-2'}>FAQ</h2>
			<div className={'flex flex-col '}>
				{faqItems.map((item, index) => (
					<FaqItem
						key={index}
						title={item.description.question}
						titleColor={'text-green'}
						styles1={'item-faq'}
						description={item.description.answer}
					>
						{/* {item.description.answer} */}
					</FaqItem>
					// <div key={index}>{item.description}</div>
				))}
				{/* <FaqItem
					title={
						'Чи можливо змінити відповіді чат-бота або додати нові питання?'
					}
					titleColor={'text-green'}
					styles1={'item-faq'}
				>
					Так, ви можете редагувати відповіді бота та додавати нові питання
					через адмін панель (якщо вона була передбачена при розробці), щоб бот
					відповідав на актуальні запитання вашого бізнесу.
				</FaqItem>
				<FaqItem
					titleColor={'text-green'}
					title={'Чи можна використовувати чат-бота для розсилок клієнтам?'}
					styles1={'item-faq'}
				>
					Так, чат-бот може автоматично відправляти вашим клієнтам інформацію,
					таку як акції та новини компанії
				</FaqItem>
				<FaqItem
					titleColor={'text-green'}
					title={'Чи треба часто оновлювати чат-бота?'}
					styles1={'item-faq'}
				>
					Ми робимо чат-ботів так, щоб вони не вимагали частих оновлень. Але ми
					радимо іноді перевіряти та оновлювати інформацію, щоб вона залишалась
					актуальною для вашого бізнесу
				</FaqItem>
				<FaqItem
					titleColor={'text-green'}
					title={'Чи можна отримати контакти клієнтів через чат-бота?'}
					styles1={'item-faq'}
				>
					Так, чат-бот може збирати контактну інформацію, якщо клієнти нададуть
					згоду на її збір та обробку, під час розмови з ботом
				</FaqItem>
				<FaqItem
					titleColor={'text-green'}
					title={'Чому компанія має назву "Айма"?'}
					styles1={'item-faq'}
				>
					Нашу компанію названо "Айма" на честь собачки нашого засновника, яку
					він врятував з прифронтової території. Для нас, Айма - це приклад
					мужності та відданості, і ми хочемо, щоб наша робота та продукти були
					такими ж надійними та сильними.
				</FaqItem> */}
			</div>
		</div>
	)
}

export default Faq
