import { Outlet } from 'react-router-dom'
import Footer from '../../footer/Footer'
import NavBar from '../../navbar/NavBar'
import ScrollToAnchor from './ScrollToAnchor'

const Router = () => {
	return (
		<div>
			<NavBar />
			<ScrollToAnchor />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Router
