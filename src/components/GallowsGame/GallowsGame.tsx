import { observer } from 'mobx-react-lite'
import { GALLOWSTHEMES } from '../../constants/GallowsThemes'
import { gallowsStore } from '../../stores/GallowsStore'
import Letters from './Letters'
import GuessedLetters from './GuessedLetters'

const GallowsGame = observer(() => {
	const { gameType, setGameType } = gallowsStore

	const currentTheme = GALLOWSTHEMES.find(theme => theme.type === gameType)

	return (
		<div className=''>
			<button
				onClick={() => setGameType('')}
				className='absolute top-3 left-10 text-2xl font-sans bg-slate-100 cursor-pointer border-2 border-black rounded-md px-9 py-2 text-center transform hover:scale-110 transition-all duration-200'
			>
				Меню
			</button>
			<h1 className='text-center text-4xl font-sans tracking-wider pt-4 text-blue-900'>
				Тема: {currentTheme?.value}
			</h1>

			<GuessedLetters />

			<Letters />
		</div>
	)
})

export default GallowsGame
