import { observer } from 'mobx-react-lite'
import { gallowsStore } from '../../stores/GallowsStore'
import Notification from '../Notification/Notification'
import Gallows from './Gallows'
import GuessedLetters from './GuessedLetters'
import Letters from './Letters/Letters'
import { LANGUAGES_DICTIONARY } from '../../constants/Languages'
import { languageStore } from '../../stores/LanguageStore'
import { FaLightbulb } from 'react-icons/fa'
import { IoDiamondSharp } from 'react-icons/io5'

const GallowsGame = observer(() => {
	const { gameType, setGameType, getAnswer } = gallowsStore
	const { language } = languageStore

	const currentTheme = LANGUAGES_DICTIONARY[language][0].themes.find(
		theme => theme.type === gameType
	)

	return (
		<>
			<Notification />
			<button
				onClick={() => setGameType('', [])}
				className='absolute md:top-3 top-16 left-7 text-3xl font-sans bg-slate-100 cursor-pointer border-2 border-black rounded-md px-7 py-2 text-center transform hover:scale-110 transition-all duration-200'
			>
				{LANGUAGES_DICTIONARY[language][0].menu}
			</button>

			<div className='flex items-center justify-center gap-5 pt-4'>
				<button
					className='relative text-lg font-sans bg-black cursor-pointer border-2 rounded-lg px-7 py-2 text-center transform hover:scale-110 transition-transform duration-200 shadow-md hover:shadow-lg'
					onClick={() => getAnswer()}
				>
					<div className='flex items-center justify-center gap-2'>
						<FaLightbulb className='text-white text-2xl' />
						<p className='flex items-center gap-1 justify-center text-white font-bold'>
							20 <IoDiamondSharp className='text-cyan-300 text-2xl' />
						</p>
					</div>
				</button>

				<h1 className='text-3xl md:text-4xl font-sans tracking-wider text-blue-900'>
					{LANGUAGES_DICTIONARY[language][0].theme}:{' '}
					<span className='text-red-500'>{currentTheme?.value}</span>
				</h1>
			</div>

			<div className='h-72 w-full mt-6'>
				<Gallows />
			</div>

			<GuessedLetters />

			<Letters />
		</>
	)
})

export default GallowsGame
