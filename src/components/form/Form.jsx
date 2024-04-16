import { useState } from 'react'
import axios from 'axios'
import Button from '../UI/button/Button'
import Input from '../UI/Input/Input.jsx'

const Form = () => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [telegram, setTelegram] = useState('')
	const [comment, setComment] = useState('')
	const [popup, setPopup] = useState(false)
	const [queryType, setQueryType] = useState('')

	const toggleMenu = (value = null) => {
		setPopup(!popup)
		if (value) {
			setQueryType(value)
		}
	}

	const handleSubmit = e => {
		const formData = {
			name,
			phone,
			email,
			telegram,
			comment,
			queryType,
		}

		// Здесь отправляем данные на сервер
		axios
			.post('/path/to/your/api', formData)
			.then(response => {
				console.log(response.data)
			})
			.catch(error => {
				console.error('There was an error!', error)
			})
	}

	return (
		<form className='mt-[80px]' onSubmit={handleSubmit}>
			<div className='flex gap-[20px] relative'>
				<div className='relative w-[100%] md:flex md:flex-col md:items-center'>
					<h3 className='font-kleemax text-white font-16 text-[30px] text-center tracking-wide'>
						звʼяжіться з нами
					</h3>
					<div>
						<div className='relative'>
							<div className='overflow-hidden my-[20px]'>
								<div
									className={
										'flex items-center justify-between block-quest-wrapper gap-[15px] text-[13px] text-white font-druk py-[10px] px-[50px] cursor-pointer'
									}
									onClick={toggleMenu}
								>
									<span className='text-[10px] md:text-[15px] leading-4'>
										Оберіть ціль запиту
									</span>
									<img
										className='w-8'
										src={`${popup ? './pop-open-burger' : './pop-close'}.svg`}
										alt=''
									/>
								</div>
							</div>
							<div
								className={`absolute w-full bg-black min-h-[300px] rounded-[10px] ${
									popup ? 'block' : 'hidden'
								}`}
							>
								<div className='overflow-hidden  my-[20px]'>
									<input
										type='radio'
										className='hidden'
										name='queryType'
										value='order_chatbot'
										id='radio1'
										checked={queryType === 'order_chatbot'}
										onChange={e => setQueryType(e.target.value)}
									/>
									<label
										htmlFor='radio1'
										className={
											'flex items-center justify-between block-quest-wrapper transition-colors text-[10px] md:text-[15px] text-white font-druk py-[10px] px-[50px] cursor-pointer'
										}
										onClick={() => toggleMenu('order_chatbot')}
									>
										Замовити чат-бота
									</label>
								</div>
								<div className='overflow-hidden  my-[20px]'>
									<input
										type='radio'
										className='hidden'
										name='queryType'
										value='partnership'
										id='radio2'
										checked={queryType === 'partnership'}
										onChange={e => setQueryType(e.target.value)}
									/>
									<label
										htmlFor='radio2'
										className={
											'flex items-center justify-between block-quest-wrapper  transition-colors text-[10px] md:text-[15px] text-white font-druk py-[10px] px-[50px] cursor-pointer'
										}
										onClick={() => toggleMenu('partnership')}
									>
										Стати партнером
									</label>
								</div>
							</div>
						</div>
						<div className='my-[30px] flex flex-col items-end gap-3'>
							<Input
								name={name}
								value={name}
								placeholder={'Імʼя'}
								type={'text'}
								onChangeText={setName}
							/>
							<Input
								name={phone}
								value={phone}
								placeholder={'Телефон'}
								type={'tel'}
								onChangeText={setPhone}
							/>
							<Input
								name={email}
								value={email}
								placeholder={'Email'}
								type={'email'}
								onChangeText={setEmail}
							/>
							<Input
								name={telegram}
								value={telegram}
								placeholder={'Telegram'}
								type={'text'}
								onChangeText={setTelegram}
							/>
							<Input
								name={comment}
								value={comment}
								placeholder={'Коментар'}
								type={'text'}
								onChangeText={setComment}
							/>
						</div>
						<Button>Залишити заявку</Button>
					</div>
				</div>
				{/* <div className={'absolute right-[-20px] h-full md:hidden'}>
					<img src='/curves-line-2.svg' alt='' className='max-w-max h-full' />
				</div> */}
			</div>
		</form>
	)
}

export default Form
