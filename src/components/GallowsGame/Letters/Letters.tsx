import { LETTERS } from '../../../constants/Languages'
import { gallowsStore } from '../../../stores/GallowsStore'
import { languageStore } from '../../../stores/LanguageStore'
import './Letters.css'
import { observer } from 'mobx-react-lite'

const Letters = observer(() => {
	const { guessedLetters, badLetters } = gallowsStore
	const { language } = languageStore
	return (
		<div className='flex flex-row flex-wrap w-[80vw] md:w-[60vw] lg:w-[40vw] mx-auto justify-center bottom-1 mt-12'>
			{LETTERS[language].map((letter, index) => (
				<button
					key={index}
					className={
						'relative flex items-center justify-center text-[2rem] w-[50px] h-[50px] font-sans hover:scale-90 letter'
					}
					onClick={() => gallowsStore.checkLetter(letter)}
				>
					{letter.toUpperCase()}
					{guessedLetters.includes(letter) && (
						<div className='absolute text-green-500'>✔</div>
					)}
					{badLetters.includes(letter) && (
						<div className='absolute text-red-500'>✘</div>
					)}
				</button>
			))}
		</div>
	)
})

export default Letters
