import { SEALETTERS } from '../../constants/SeaLetters'
import useIsLargeScreen from '../../hooks/useIsLargeScreen'

const SeaLetters = () => {
	const isLargeScreen = useIsLargeScreen()

	return (
		<>
			{SEALETTERS.map((letter, index) => (
				<span
					key={index}
					className={'-top-7 absolute'}
					style={{
						left: `${index * (isLargeScreen ? 30 : 20)}px`,
						margin: `0 ${isLargeScreen ? '0.5rem' : '0.25rem'}`,
					}}
				>
					{letter}
				</span>
			))}
		</>
	)
}

export default SeaLetters
