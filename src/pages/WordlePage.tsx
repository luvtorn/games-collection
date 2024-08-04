import 'react-simple-keyboard/build/css/index.css'
import Notification from '../components/Notification/Notification'
import InputRow from '../components/WordleComponents/InputRow/InputRow'
import Keyboard from '../components/WordleComponents/Keyboard/Keyboard'

function WordlePage() {
	return (
		<>
			<Notification />
			<div className='flex flex-col items-center justify-center gap-2'>
				<h2 className='text-white text-3xl mb-5 mt-5 font-bold'>Wordle Game</h2>
				<InputRow />
			</div>
			<Keyboard />
		</>
	)
}

export default WordlePage
