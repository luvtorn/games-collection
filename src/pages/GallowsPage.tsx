import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import GallowsGame from '../components/GallowsGame/GallowsGame'
import LanguageSelector from '../components/LanguagesSelector/LanguagesSelector'
import { LANGUAGES_DICTIONARY } from '../constants/Languages'
import { gallowsStore } from '../stores/GallowsStore'
import { languageStore } from '../stores/LanguageStore'
import { playerStore } from '../stores/PlayerStore'

const GallowsPage = observer(() => {
	const { setGameType, gameType } = gallowsStore
	const { language } = languageStore

	return (
		<div className='w-screen h-screen bg-white bg-custom-pattern bg-custom-pattern-size bg-custom-pattern-pos'>
			{!gameType ? (
				<div className='w-[50vw] mx-auto flex flex-col items-center'>
					<div className='mt-5 flex gap-7 items-center'>
						<LanguageSelector />
						<Link
							to={'/'}
							className='font-sans text-3xl bg-slate-400 cursor-pointer border-2 border-black rounded-md px-9 py-2 text-center transform hover:scale-110 transition-all duration-200'
						>
							{LANGUAGES_DICTIONARY[language][0].home}
						</Link>
					</div>
					<h1 className='text-5xl font-sans mt-7 flex items-end'>
						{LANGUAGES_DICTIONARY[language][0].theme}
					</h1>
					<h3 className='text-3xl font-sans mt-2'>
						{LANGUAGES_DICTIONARY[language][0].answers}{' '}
						<span className='text-red-500 text-4xl'>
							{playerStore.player.gallowsWinsCount}
						</span>
					</h3>

					<div className='flex flex-col gap-2'>
						{LANGUAGES_DICTIONARY[language][0].themes.map(button => (
							<button
								key={button.type}
								className='mt-4 text-2xl font-sans bg-slate-100 cursor-pointer border-2 border-black rounded-md px-9 py-2 text-center transform hover:scale-110 transition-all duration-200'
								onClick={() => setGameType(button.type, button.words)}
							>
								{button.value}
							</button>
						))}
					</div>
				</div>
			) : (
				<GallowsGame />
			)}
		</div>
	)
})

export default GallowsPage
