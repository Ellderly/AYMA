const Button = ({ children, casesStyle, casesStyleButton, ...props }) => {
	return (
		<div className={`overflow-hidden w-full mx-auto ${casesStyle}`}>
			<button
				className={`block w-full button m-auto button bg-contain bg-center bg-no-repeat text-white text-[14px] md:text-[24px] py-[24px] px-[50px] tracking-widest ${casesStyleButton}`}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
