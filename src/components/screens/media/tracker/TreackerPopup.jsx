import React from 'react'
import { useContext } from 'react'
import { MenuPopUp } from '../../../../App'
const TreackerPopup = ({ isOpen, data, onClose }) => {
	if (!isOpen || !data) return null
	const { modal, setModal } = useContext(MenuPopUp)
	return (
		<div className=' bg-black z-30 left-0 z-50 fixed top-0 bottom-0 overflow-scroll'>
			<img
				src='/green-allipse.svg'
				alt=''
				className='absolute left-0 pointer-events-none h-[300px]'
			/>
			<button
				onClick={onClose}
				o
				className='text-white absolute right-[7px] md:right-[15px] top-[7px] md:top-[15px]  z-50 md:w-[22px]'
			>
				<img src='./close.svg' alt='' className='md:w-[22px]' />
			</button>
			<div className='text-white py-[20px] px-[40px] lg:px-[80px] relative'>
				<div className='flex gap-[13px] md:gap-[20px] items-center lg:mb-[50px]'>
					<img src={data.img} alt='' className='w-[30px] md:w-[80px]' />
					<h3 className='text-[11px] md:text-[25px] ld:text-[35px] font-druk md:w-[30%]'>
						{data.title}
					</h3>
				</div>
				<div className='mt-[16px] lg:mt-[20px] text-[9px] md:text-[15px] lg:text-[18px] normal-case'>
					<h5 className='font-druk text-green inline mr-[3px] lg:mr-[6px]'>
						{data.header1}
					</h5>
					<span className='normal-case font-ptMono tracking-widest	'>
						{data.content1}
					</span>
				</div>
				<div className='mt-[16px] lg:mt-[20px] text-[9px] md:text-[15px] lg:text-[18px] normal-case'>
					<h5 className='font-druk text-green inline mr-[3px] lg:mr-[6px]'>
						{data.header2}
					</h5>
					<span className='normal-case font-ptMono tracking-widest	'>
						{data.content2}
					</span>
				</div>

				<div className='mt-[16px] lg:mt-[20px] text-[9px] md:text-[15px] lg:text-[18px] normal-case'>
					<h5 className='font-druk text-green inline mr-[3px] lg:mr-[6px]'>
						{data.header3}
					</h5>
					<span className='normal-case font-ptMono tracking-widest	'>
						{data.content3}
					</span>
				</div>
				<div className='mt-[16px] lg:mt-[20px] text-[9px] md:text-[15px] lg:text-[18px] normal-case'>
					<h5 className='font-druk text-green inline mr-[3px] lg:mr-[6px] font-ptMono'>
						{data.header4}
					</h5>
					<span className='normal-case font-ptMono tracking-widest	'>
						{data.content4}
					</span>
				</div>

				<div className={`overflow-hidden w-max  mx-0 mt-[22px]`}>
					<div className='w-max m-auto' onClick={() => setModal(!modal)}>
						<button
							onClick={onClose}
							className={`block m-auto buttonT bg-contain bg-center bg-no-repeat text-white text-[10px] md:text-[24px] py-[9px] px-[40px] tracking-widest`}
						>
							Звʼязатися
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TreackerPopup
