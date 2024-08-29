import { useState, useEffect } from 'react'

const useOrientationWarning = () => {
	const [isPortrait, setIsPortrait] = useState(
		window.innerHeight > window.innerWidth
	)

	const handleResize = () => {
		setIsPortrait(window.innerHeight > window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return isPortrait
}

export default useOrientationWarning
