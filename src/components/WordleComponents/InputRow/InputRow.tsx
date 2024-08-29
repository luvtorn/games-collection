import { observer } from 'mobx-react-lite'
import { wordlyStore } from '../../../stores/WordlyStore'
import InputSquare from '../InputSquare/InputSquare'

const InputRow = observer(() => {
	const { lettersArr, lettersCount } = wordlyStore

	return (
		<div
			className='grid gap-2 border-2 p-1 rounded-lg'
			style={{ gridTemplateColumns: `repeat(${lettersCount}, 1fr)` }}
		>
			{lettersArr.map((letter, index) => (
				<InputSquare letter={letter} key={index} />
			))}
		</div>
	)
})

export default InputRow
