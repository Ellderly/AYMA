import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Carusel from '../../../carusel/Carusel'

const Partnets = () => {
	const [parnterItemsTop, setParnterItemsTop] = useState([])

	let sliderRef = useRef(null)
	const play = () => {
		sliderRef.slickPlay()
	}
	const pause = () => {
		sliderRef.slickPause()
	}

	useEffect(() => {
		axios.get('https://best-marketing.top/api/partners').then(response => {
			const filteredItems = response.data.filter(
				item => item.location === 'top'
			)
			setParnterItemsTop(filteredItems)
		})
	}, [])

	return (
		<div className='container'>
			<h2 className='text-white text-[33px] md:text-[50px] mb-5 '>Партнери</h2>

			<Carusel
				dotsDefault={false}
				slidesDefault={5}
				slidesTablet={2}
				slidesMobile={2}
				autoPlay={false}
				infinite={true}
				rtl={true}
				speed={1000}
				sliderRef={slider => (sliderRef = slider)}
			>
				{parnterItemsTop.map(item => (
					<div
						key={item.file_path}
						className='h-[30px] md:h-[auto]'
						onMouseEnter={play}
						onMouseLeave={pause}
					>
						<img
							className='m-auto max-w-[230px] mx-5 h-full md:h-auto'
							src={item.file_path}
							alt=''
						/>
					</div>
				))}
			</Carusel>
		</div>
	)
}

export default Partnets
