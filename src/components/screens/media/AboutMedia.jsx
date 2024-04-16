import React from 'react'
import styles from './aboutMedia.module.css'

const AboutMedia = ({ h3, p }) => {
	return (
		<div className={` my-[40px] text-white `}>
			<div className='container'>
				<div className={`px-[33px] py-[12px] ${styles.frame}`}>
					<h3
						className='font-kleemax text-[22px] lg:text-7xl w-[85%] mb-[15px] tracking-widest'
						dangerouslySetInnerHTML={{ __html: h3 }}
					></h3>
					<p
						className='text-[10px] lg:text-[20px]'
						dangerouslySetInnerHTML={{ __html: p }}
					></p>
				</div>
			</div>
		</div>
	)
}

export default AboutMedia
