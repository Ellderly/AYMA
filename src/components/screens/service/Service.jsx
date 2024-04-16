import Contact from '../../contact/Contact'
import Header from '../../header/Header.jsx'
import Answers from './answers/Answers.jsx'
import LineCarusel from './lineCarusel/LineCarusel.jsx'

const Services = () => {
	return (
		<div>
			<Header
				title={'рішення для вашого бізнесу'}
				image1={'bg-double-bg-service'}
				bg={'double-bg-service'}
				tIdent={'tIdent'}
			/>
			<Answers />
			<Contact />
			<LineCarusel />
		</div>
	)
}

export default Services
