import { Route, Routes } from 'react-router-dom'

import Home from './components/screens/home/Home'
import Services from './components/screens/service/Service'

import Router from './components/UI/Router/Router'
import { createContext, useState, useRef, useEffect } from 'react'
import Modal from './components/modal/Modal'
import Privacy from './components/screens/privacy/Privacy'
import Terms from './components/screens/terms/Terms'
import Media from './components/screens/media/Media'

export const MenuPopUp = createContext()

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [modal, setModal] = useState(false)

	useEffect(() => {
		const userAgent = navigator.userAgent || navigator.vendor || window.opera
		const root = document.documentElement

		if (/android/i.test(userAgent)) {
			root.classList.add('android')
		} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
			root.classList.add('ios')
		}
	}, [])

	return (
		<div
			className={`${
				isMenuOpen || modal ? 'overflow-hidden h-dvh' : ''
			} overflow-hidden`}
		>
			<Modal modal={modal} setModal={setModal} />
			<MenuPopUp.Provider
				value={{
					isMenuOpen,
					setIsMenuOpen,
					modal,
					setModal,
				}}
			>
				<Routes>
					<Route path='/' element={<Router />}>
						<Route index element={<Home />} />
						<Route path='services' element={<Services />} />
						<Route path='duma-tech' element={<Services />} />
						<Route path='duma-media' element={<Media />} />
						<Route path='privacy' element={<Privacy />} />
						<Route path='terms' element={<Terms />} />
						<Route
							path='*'
							element={<div className={'text-white'}>error</div>}
						/>
					</Route>
				</Routes>
			</MenuPopUp.Provider>
		</div>
	)
}

export default App
