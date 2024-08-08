import { gallowsStore } from '../../../stores/GallowsStore'
import './Letters.css'
import { observer } from 'mobx-react-lite'

const letters = [
	'а',
	'б',
	'в',
	'г',
	'д',
	'е',
	'ё',
	'ж',
	'з',
	'и',
	'й',
	'к',
	'л',
	'м',
	'н',
	'о',
	'п',
	'р',
	'с',
	'т',
	'у',
	'ф',
	'х',
	'ц',
	'ч',
	'ш',
	'щ',
	'ы',
	'ь',
	'э',
	'ю',
	'я',
]

const Letters = observer(() => {
	const { guessedLetters, badLetters } = gallowsStore
	return (
		<div className='flex flex-row flex-wrap w-[80vw] md:w-[60vw] lg:w-[40vw] mx-auto justify-center  bottom-1 mt-12'>
			{letters.map((letter, index) => (
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
