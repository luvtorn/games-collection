import classNames from 'classnames'
import useIsLargeScreen from '../../hooks/useIsLargeScreen'

const SeaNumbers = () => {
	const isLargeScreen = useIsLargeScreen()

	return (
		<>
			{[...Array(10)].map((_, index) => (
				<span
					key={index}
					className={classNames('absolute -left-5', {
						'-left-6': index === 9,
					})}
					style={{ top: `${index * (isLargeScreen ? 30 : 20)}px` }}
				>
					{index + 1}
				</span>
			))}
		</>
	)
}

export default SeaNumbers
