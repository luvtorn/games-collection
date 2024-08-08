import { observer } from 'mobx-react-lite'
import { GALLOWSTHEMES } from '../../constants/GallowsThemes'
import { gallowsStore } from '../../stores/GallowsStore'
import Notification from '../Notification/Notification'
import Gallows from './Gallows'
import GuessedLetters from './GuessedLetters'
import Letters from './Letters/Letters'

const GallowsGame = observer(() => {
	const { gameType, setGameType } = gallowsStore

	const currentTheme = GALLOWSTHEMES.find(theme => theme.type === gameType)

	return (
		<>
			<Notification />
			<button
				onClick={() => setGameType('', [])}
				className='absolute md:top-3 top-16 left-7 text-base font-sans bg-slate-100 cursor-pointer border-2 border-black rounded-md px-7 py-2 text-center transform hover:scale-110 transition-all duration-200'
			>
				Меню
			</button>
			<h1 className='text-center text-3xl md:text-4xl font-sans tracking-wider pt-4 text-blue-900'>
				Тема: {currentTheme?.value}
			</h1>

			<div className='h-72 w-full mt-6'>
				<Gallows />
			</div>

			<GuessedLetters />

			<Letters />
		</>
	)
})

export default GallowsGame
