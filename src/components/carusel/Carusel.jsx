import { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'

const Carusel = ({
	children,
	dotsDefault,
	slidesDefault,
	slidesMobile,
	slidesTablet,
	autoPlay,
	infinite,
	sliderRef,
	autoplaySpeed,
	speed,
	rtl,
	...props
}) => {
	const [settings, setSettings] = useState({
		dots: dotsDefault,
		infinite: infinite,
		speed: speed,
		rtl: rtl,
		slidesToShow: slidesDefault,
		slidesToScroll: 1,
		arrows: false,
		autoplay: autoPlay,
		autoplaySpeed: autoplaySpeed,
		cssEase: 'linear',
		customPaging: () => <div className='w-[10px] h-[6px] bg-white '></div>,
		appendDots: dots => (
			<div
				style={{
					transform: 'translateY(20px)',
				}}
			>
				<ul> {dots} </ul>
			</div>
		),
		responsive: [
			{
				breakpoint: 968,
				settings: {
					slidesToShow: slidesTablet,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: slidesMobile,
					dots: dotsDefault,
				},
			},
		],
	})

	return (
		<div className={'slider-container text-white'}>
			<Slider ref={sliderRef} {...settings}>
				{children}
			</Slider>
		</div>
	)
}

export default Carusel
