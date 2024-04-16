import React from 'react'

const Advantages = ({
	h3,
	block_1_h4,
	block_1_p,
	block_2_h4,
	block_2_p,
	block_3_h4,
	block_3_p,
	svgClass,
	svgViewBox,
	svgD,
	svgStroke,
	bgImage,
	bgImageStyle,
	secondImage,
	secondImageStyle,
	emptySecondImage,
	emptySecondImageStyle,
}) => {
	return (
		<div className='relative text-white text-right my-[50px] overflow-hidden'>
			<div className='container relative z-10'>
				<div>
					<h3 className='font-kleemax text-[27px] md:text-[50px] lg:text-[70px] tracking-widest mb-[13px]'>
						{h3}
					</h3>
					<div className='flex gap-[15px] md:gap-[40px] justify-end '>
						<div className='flex flex-col gap-[23px] justify-around'>
							<div className='translate-x-[30px] md:translate-x-[60px] lg:translate-x-[60px]'>
								<h4 className='font-druk text-green text-[11px] md:text-[18px] lg:text-[24px]'>
									{block_1_h4}
								</h4>
								<p className='text-[6.8px] normal-case ml-auto w-[180px] tracking-widest md:text-[13px] lg:text-[16px] md:w-[50%]  lg:pt-[15px]'>
									{block_1_p}
								</p>
							</div>
							<div className='translate-x-[15px] md:translate-x-[40px] lg:translate-x-[30px]'>
								<h4 className='font-druk text-green text-[11px] md:text-[18px] lg:text-[24px]'>
									{block_2_h4}
								</h4>
								<p className='text-[6.8px] normal-case ml-auto w-[180px] tracking-widest md:text-[13px] lg:text-[16px] md:w-[50%]  lg:pt-[15px]'>
									{block_2_p}
								</p>
							</div>
							<div>
								<h4 className='font-druk text-green text-[11px] md:text-[18px] lg:text-[24px]'>
									{block_3_h4}
								</h4>
								<p className='text-[6.8px] normal-case ml-auto w-[180px] tracking-widest md:text-[13px] lg:text-[16px] md:w-[50%]  lg:pt-[15px]'>
									{block_3_p}
								</p>
							</div>
						</div>
						<div>
							<svg
								className={svgClass}
								// width='37'
								height='105%'
								viewBox={svgViewBox}
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d={svgD} stroke='white' strokeWidth={svgStroke} />
							</svg>
						</div>
					</div>
				</div>
			</div>

			<img src={bgImage} alt='' className={bgImageStyle} />
			<img src={secondImage} alt='' className={secondImageStyle} />
			<img src={emptySecondImage} alt='' className={emptySecondImageStyle} />
		</div>
	)
}

export default Advantages
