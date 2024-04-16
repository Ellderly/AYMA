import React from 'react'
import { useState } from 'react'
import Button from '../UI/button/Button'
import Input from '../UI/Input/Input.jsx'

const Modal = ({ modal, setModal }) => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [telegram, setTelegram] = useState('')
	const [comment, setComment] = useState('')
	const [popup, setPopup] = useState(false)

	const toggleMenu = () => {
		setPopup(!popup)
	}

	return (
		<div
			className={`bg-black text-5xl w-dvw fixed z-[100] overflow-scroll h-dvh ${
				modal ? 'block' : 'hidden'
			}`}
		>
			<div className='container'>
				<div
					onClick={() => setModal(!modal)}
					className='cursor-pointer flex justify-end mt-5'
				>
					<img src='./x.svg' className='w-[20px]' alt='' />
				</div>
				<form>
					<div className='flex gap-[20px] relative'>
						<div className='relative w-[100%] md:flex md:flex-col md:items-center flex flex-col items-center'>
							<h3 className='font-kleemax text-white text-[20px] md:text-[30px] text-center tracking-wide'>
								звʼяжіться з нами
							</h3>
							<div className={'w-[100%] max-w-[600px]'}>
								<div className='relative my-[20px] '>
									<div className='overflow-hidden'>
										<div
											className={
												'flex items-center justify-between block-quest-wrapper gap-[15px] text-[13px] text-white font-druk py-[10px] px-[15px] cursor-pointer'
											}
											onClick={toggleMenu}
										>
											<span className='text-[10px] md:text-[15px] leading-4'>
												Оберіть ціль запиту
											</span>
											<img
												className='w-8'
												src={`${
													popup ? './pop-open-burger' : './pop-close'
												}.svg`}
												alt=''
											/>
										</div>
									</div>
									<div
										className={`absolute w-full bg-black rounded-[10px] ${
											popup ? 'block' : 'hidden'
										}`}
									>
										<div className='overflow-hidden my-[20px]'>
											<div
												className={
													' flex items-center justify-between block-quest-wrapper  transition-colors text-[10px] md:text-[15px] text-white font-druk py-[10px] px-[15px] cursor-pointer'
												}
												onClick={toggleMenu}
											>
												Замовити чат-бота
											</div>
										</div>
										<div className='overflow-hidden my-[20px]'>
											<div
												className={
													'flex items-center justify-between block-quest-wrapper  transition-colors  text-[10px] md:text-[15px] text-white font-druk py-[10px] px-[15px] cursor-pointer'
												}
												onClick={toggleMenu}
											>
												Стати партнером
											</div>
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
					</div>
				</form>
			</div>
		</div>
	)
}

export default Modal
