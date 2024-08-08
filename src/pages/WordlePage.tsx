import 'react-simple-keyboard/build/css/index.css'
import Notification from '../components/Notification/Notification'
import InputRow from '../components/WordleComponents/InputRow/InputRow'
import Keyboard from '../components/WordleComponents/Keyboard/Keyboard'
import { Link } from 'react-router-dom'

function WordlePage() {
	return (
		<>
			<Notification />
			<div className='flex flex-col items-center justify-center'>
				<div className='flex items-center justify-center gap-10'>
					<h2 className='text-white text-3xl mb-5 font-bold mt-5'>Wordle Game</h2>
					<Link
						to={'/games-collection'}
						className='text-white text-3xl mb-5 mt-5 border-2 rounded-lg px-5 py-2 bg-purple-900 hover:scale-105 transition-all duration-300'
					>
						Home
					</Link>
				</div>
				<InputRow />
			</div>
			<Keyboard />
		</>
	)
}

export default WordlePage
