import Form from '../form/Form.jsx'
import AboutUsText from '../aboutUsText/AboutUsText.jsx'

const Contact = () => {
	return (
		<div className='my-[50px]  md:bg-contain md:bg-no-repeat md:bg-left bg-center relative'>
			<div className='container sm:bg-none bg-no-repeat bg-cover bg-max-left-bottom bg-80% md:flex items-center justify-between gap-[20px]'>
				<img
					src='./mega-green-ellipse.svg'
					className={`absolute hidden md:block w-max-[350px] w-[300px] left-[0px] top-[0px] pointer-events-none`}
					alt=''
				/>
				<div className='flex flex-col gap-10 basis-[50%]'>
					<h2 className='text-white font-kleemax text-[16px] lg:text-[24px] uppercase'>
						Разом з Ayma Tech ви можете:
					</h2>
					<AboutUsText />
				</div>
				<div className='basis-[600px]'>
					<Form />
				</div>
			</div>
		</div>
	)
}

export default Contact
