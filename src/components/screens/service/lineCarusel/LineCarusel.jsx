import Carusel from '../../../carusel/Carusel.jsx'
const LineCarusel = () => {
	return (
		<div className='my-5 lg:my-12'>
			<Carusel
				dotsDefault={false}
				slidesDefault={2}
				slidesTablet={2}
				slidesMobile={1}
				autoPlay={true}
				infinite={true}
				speed={2000}
				autoplaySpeed={0}
			>
				<div className={'font-kleemax text-center text-[30px] lg:text-[60px]'}>
					зв’яжіться з нами
				</div>
				<div className={'font-kleemax text-center text-[30px] lg:text-[60px]'}>
					зв’яжіться з нами
				</div>
				<div className={'font-kleemax text-center text-[30px] lg:text-[60px]'}>
					зв’яжіться з нами
				</div>
			</Carusel>
		</div>
	)
}

export default LineCarusel
