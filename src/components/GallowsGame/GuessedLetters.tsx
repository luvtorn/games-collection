import { gallowsStore } from '../../stores/GallowsStore'

const GuessedLetters = () => {
	const { guessedLetters } = gallowsStore

	return (
		<div className='flex flex-row justify-center mt-80 gap-4'>
			{guessedLetters.map(letter => (
				<div
					key={letter}
					className='border-b-4 border-blue-900 text-4xl w-8 font-sans text-center'
				>
					&nbsp;
				</div>
			))}
		</div>
	)
}

export default GuessedLetters
