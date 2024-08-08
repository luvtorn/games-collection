import { observer } from 'mobx-react-lite'
import { gallowsStore } from '../../stores/GallowsStore'
import classNames from 'classnames'

const GuessedLetters = observer(() => {
	const { guessedLetters } = gallowsStore

	return (
		<div className='relative flex flex-row justify-center mt-20 gap-4'>
			{guessedLetters.map((letter, index) => (
				<div
					key={index}
					className={classNames(
						'border-b-4 border-blue-900 text-4xl w-8 font-sans text-center',
						{
							invisible: letter === '-',
						}
					)}
				>
					{letter === '' ? (
						<span>&nbsp;</span> // Используйте обычный пробел
					) : (
						letter
					)}
				</div>
			))}
		</div>
	)
})

export default GuessedLetters
