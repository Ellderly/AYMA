import Button from '../UI/button/Button.jsx'
import { useContext } from 'react'
import { MenuPopUp } from '../../App.jsx'
const Header = ({ title, bg, image1, tIdent, text }) => {
	const { modal, setModal } = useContext(MenuPopUp)
	return (
		<div
			className={`relative ${image1} ${bg} md:min-h-dvh py-[10px] md:py-[80px] flex flex-col justify-center `}
		>
			<div className='flex flex-col justify-between items-center gap-[250px] md:gap-[100px]'>
				<div>
					<h1
						className={`text-white leading-none text-[35px] md:text-[45px] lg:text-[80px] lg:translate-x-[-100px] px-[30px] my-[40px] max-w-[600px] ${tIdent}`}
					>
						{title}
					</h1>
					<p className='text-white lg:translate-x-[-100px] px-[30px]'>{text}</p>
				</div>
				<div className='w-max m-auto' onClick={() => setModal(!modal)}>
					<Button className='button m-auto bg-bg-btn-image bg-contain bg-center bg-no-repeat text-white text-[24px] py-[24px] px-[50px] w-max'>
						Звʼязатися
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Header
