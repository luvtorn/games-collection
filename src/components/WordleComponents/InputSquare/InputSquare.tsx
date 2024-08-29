import { observer } from 'mobx-react-lite'
import { ILetter } from '../../../types/types'
import classNames from 'classnames'
import '../../../animation.css'

interface Props {
	letter: ILetter
}

const InputSquare = observer(({ letter }: Props) => {
	return (
		<div
			className={classNames(
				'w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center text-xl justify-center text-black font-bold rounded-md bg-gray-300 border-[1px] border-black',
				{
					'bg-color-change-to-gray': !letter.firstRender,
					'bg-color-change-to-yellow':
						letter.isGuessed && !letter.isGuessedWithCorrectPosition,
					'bg-color-change-to-green': letter.isGuessedWithCorrectPosition,
				}
			)}
		>
			{letter.letterTitle.toUpperCase()}
		</div>
	)
})

export default InputSquare
