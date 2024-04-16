const Input = ({ name, type, onChangeText, value, placeholder }) => {
	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			onChange={e => onChangeText(e.target.value)}
			value={value}
			className={
				'w-full py-2 px-[6px] text-[12px]  bg-form-bg bg-no-repeat bg-center bg-contain text-gray tracking-widest font-ptMono'
			}
		/>
	)
}

export default Input
