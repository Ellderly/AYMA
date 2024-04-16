import { useState, useEffect, useContext, useCallback } from 'react'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
import { MenuPopUp } from '../../App.jsx'

const NavBar = () => {
	const [menuItems, setMenuItems] = useState([])
	const [activeSubmenus, setActiveSubmenus] = useState({})
	const { isMenuOpen, setIsMenuOpen } = useContext(MenuPopUp)
	const { modal, setModal } = useContext(MenuPopUp)

	const fetchMenuItems = useCallback(async () => {
		try {
			const response = await axios.get('https://best-marketing.top/api/menus')
			setMenuItems(response.data)
		} catch (error) {
			console.error('Ошибка при получении данных:', error)
		}
	}, [])

	useEffect(() => {
		fetchMenuItems()
	}, [fetchMenuItems])

	const toggleSubmenu = index => {
		setActiveSubmenus(prevState => ({
			...prevState,
			[index]: !prevState[index],
		}))
	}
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}
	const activeLinkStyle = {
		color: '#95FFD9', // Пример стиля для активной ссылки
		// Можете добавить дополнительные стили, если нужно
	}

	return (
		<>
			<nav className='flex  w-full justify-end pt-5 py-9 px-[20px] z-10'>
				<NavLink to='/' className='mr-auto z-[99]'>
					<img src='./logo-header.svg' alt='' />
				</NavLink>
				<button onClick={toggleMenu} className='lg:hidden text-white z-50'>
					<img
						src={`${isMenuOpen ? 'pop-open-burger' : 'pop-close'}.svg`}
						alt=''
					/>
				</button>
				<ul
					className={`lg:flex pt-[100px] lg:pt-0 gap-10 md:gap-4 text-white items-center ${
						isMenuOpen
							? 'fixed flex flex-col items-baseline inset-0 bg-black/80 z-30 p-5'
							: 'hidden'
					}`}
				>
					{menuItems.map((item, index) => (
						<li key={index} className={'relative'}>
							{item.children ? (
								// Если у элемента меню есть дочерние элементы, рендерим кнопку вместо ссылки
								<button
									onClick={() => toggleSubmenu(index)}
									className={
										activeSubmenus[index] ? 'text-orange' : 'text-white'
									}
								>
									{item.name} {activeSubmenus[index] ? '-' : '+'}
								</button>
							) : (
								// Если дочерних элементов нет, рендерим обычную ссылку
								<NavLink
									className={
										'text-white hover:text-green transition-colors text-[13px]'
									}
									to={item.link}
									onClick={() => setIsMenuOpen(false)}
									// Добавляем проверку, чтобы активной становилась ссылка
									// только при совпадении полного пути
									style={({ isActive }) =>
										isActive && window.location.pathname === item.link
											? activeLinkStyle
											: undefined
									}
								>
									{item.name}
								</NavLink>
							)}
							{item.children && activeSubmenus[index] && (
								<ul>
									{item.children.map((child, childIndex) => (
										<li key={childIndex}>
											<NavLink
												className={'text-white'}
												onClick={() => setIsMenuOpen(false)}
												to={child.link}
											>
												{child.name}
											</NavLink>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
					<div className='overflow-hidden'>
						<button
							onClick={() => setModal(!modal)}
							className='block button m-auto bg-bg-btn-image hover:bg-bg-btn-active bg-contain bg-center bg-no-repeat text-white py-[15px] px-[30px] tracking-widest w-full'
						>
							Звʼязатися
						</button>
					</div>
				</ul>
			</nav>
		</>
	)
}

export default NavBar
