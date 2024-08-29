import { observer } from 'mobx-react-lite'
import WordleGame from '../components/WordleComponents/WordleGame'
import { wordlyStore } from '../stores/WordlyStore'
import Rules from '../components/WordleComponents/Rules'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LANGUAGES_DICTIONARY } from '../constants/Languages'
import { languageStore } from '../stores/LanguageStore'
import Settings from '../components/WordleComponents/Settings'

const WordlePage = observer(() => {
	const { isGameStarted, setIsGameStarted } = wordlyStore
	const [isRulesOpen, setIsRulesOpen] = useState(false)
	const [isSettingsOpen, setIsSettingsOpen] = useState(false)
	const { language } = languageStore

	return (
		<>
			{isGameStarted ? (
				<WordleGame />
			) : (
				<>
					{isRulesOpen && <Rules setIsRulesOpen={setIsRulesOpen} />}
					{isSettingsOpen && <Settings setIsSettingsOpen={setIsSettingsOpen} />}
					<div className='flex flex-col items-center mx-auto justify-center w-11/12 md:w-2/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-lg shadow-lg p-8'>
						<button
							className='text-xl lg:text-2xl mb-5 border-2 border-indigo-500 rounded-lg px-6 mt-12 py-3 bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-transform duration-300 shadow-md w-[70%] lg:w-1/2'
							onClick={() => setIsGameStarted()}
						>
							{LANGUAGES_DICTIONARY[language][0].play}
						</button>

						<button
							onClick={() => setIsRulesOpen(true)}
							className='text-xl lg:text-2xl mb-5 border-2 border-indigo-500 rounded-lg px-6 py-3 bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-transform duration-300 shadow-md w-[70%] lg:w-1/2'
						>
							{LANGUAGES_DICTIONARY[language][0].rules}
						</button>

						<button
							onClick={() => setIsSettingsOpen(true)}
							className='text-xl lg:text-2xl mb-5 border-2 border-indigo-500 rounded-lg px-6 py-3 bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-transform duration-300 shadow-md w-[70%] lg:w-1/2'
						>
							{LANGUAGES_DICTIONARY[language][0].settings}
						</button>

						<Link
							to={'/'}
							className='text-xl lg:text-2xl mb-5 border-2 border-indigo-500 rounded-lg px-6 py-3 bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-transform duration-300 shadow-md w-[70%] lg:w-1/2 text-center'
						>
							{LANGUAGES_DICTIONARY[language][0].home}
						</Link>
					</div>
				</>
			)}
		</>
	)
})

export default WordlePage
