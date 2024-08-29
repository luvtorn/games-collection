import classNames from 'classnames'

interface Props {
	letter: string
	color: 'yellow' | 'green' | 'grey'
}

const RulesLetter: React.FC<Props> = ({ letter, color }) => {
	return (
		<div
			className={classNames(
				'w-7 h-7 flex items-center justify-center text-black font-bold rounded-md border-[3px] border-black',
				{ 'bg-gray-500': color === 'grey' },
				{ 'bg-[#f59e0b]': color === 'yellow' },
				{ 'bg-[#10b981]': color === 'green' }
			)}
		>
			{letter.toUpperCase()}
		</div>
	)
}

export default RulesLetter
