import React, { useEffect, useState } from 'react'
import { slidingGameStore } from '../../stores/SlidingGameStore'
import { observer } from 'mobx-react-lite'

const SlidingStats: React.FC = observer(() => {
	const { currentTurn, shuffle, wins, isWin, board } = slidingGameStore

	const [seconds, setSeconds] = useState<number>(0)
	const [isActive, setIsActive] = useState<boolean>(true)

	useEffect(() => {
		let interval: number | undefined
		if (isActive) {
			interval = window.setInterval(() => {
				setSeconds(seconds => seconds + 1)
			}, 1000)
		} else if (!isActive && seconds !== 0 && interval) {
			window.clearInterval(interval)
		}
		return () => {
			if (interval) window.clearInterval(interval)
		}
	}, [isActive, seconds])

	useEffect(() => {
		if (isWin()) {
			setIsActive(false)
		}
	}, [board, isWin])

	return (
		<div className='p-4 bg-gray-800 rounded-lg mt-5 shadow-lg text-center text-white w-max mx-auto'>
			<h2 className='text-2xl font-bold mb-4'>Game Stats</h2>
			<div className='space-y-2'>
				<p className='text-lg'>
					Current Turn: <span className='font-semibold'>{currentTurn}</span>
				</p>
				<p className='text-lg'>
					Wins: <span className='font-semibold'>{wins}</span>
				</p>
				<p className='text-lg'>
					Time Elapsed:{' '}
					<span className='font-semibold'>
						{Math.floor(seconds / 60)}:
						{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
					</span>
				</p>
			</div>
			<button
				onClick={() => {
					shuffle()
					setSeconds(0)
					setIsActive(true)
				}}
				className='mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition duration-300 ease-in-out'
			>
				Reshuffle
			</button>
		</div>
	)
})

export default SlidingStats
