import { observer } from 'mobx-react-lite'
import { wordlyStore } from '../../../stores/WordlyStore'
import InputSquare from '../InputSquare/InputSquare'

const InputRow = observer(() => {
	const { lettersArr } = wordlyStore

	return (
		<div className='grid grid-cols-5 gap-2 border-2 p-1 rounded-lg'>
			{lettersArr.map((letter, index) => (
				<InputSquare letter={letter} key={index} />
			))}
		</div>
	)
})

export default InputRow
