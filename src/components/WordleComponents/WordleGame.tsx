import Notification from '../Notification/Notification'
import InputRow from './InputRow/InputRow'
import Keyboard from './Keyboard/Keyboard'
import 'react-simple-keyboard/build/css/index.css'
import { wordlyStore } from '../../stores/WordlyStore'
import { LANGUAGES_DICTIONARY } from '../../constants/Languages'
import { languageStore } from '../../stores/LanguageStore'
import ReactConfetti from 'react-confetti'
import { confettiStore } from '../../stores/ConfettiStore'
import { observer } from 'mobx-react-lite'
import { FaLightbulb } from 'react-icons/fa'

const WordleGame = observer(() => {
	const { resetGame, getAnswer } = wordlyStore

	return (
		<>
			<Notification />
			{confettiStore.isConfetti && <ReactConfetti gravity={0.7} />}
			<div className='flex flex-col items-center justify-center'>
				<div className='flex items-center justify-center gap-5'>
					<button
						className='text-white text-xl mb-5 mt-5 border-2 border-black rounded-lg px-5 py-2 bg-purple-300 hover:scale-105 transition-all duration-300'
						onClick={() => getAnswer()}
					>
						<FaLightbulb />
					</button>
					<h2 className='text-white text-3xl mb-5 font-bold mt-5'>
						Wordle Game
					</h2>
					<button
						onClick={() => resetGame()}
						className='text-white text-2xl mb-5 mt-5 border-2 border-black rounded-lg px-5 py-2 bg-purple-300 hover:scale-105 transition-all duration-300'
					>
						{LANGUAGES_DICTIONARY[languageStore.language][0].home}
					</button>
				</div>
				<InputRow />
			</div>

			<Keyboard />
		</>
	)
})

export default WordleGame
