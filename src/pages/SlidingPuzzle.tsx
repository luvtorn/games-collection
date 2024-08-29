import { useState } from 'react'
import { Link } from 'react-router-dom'
import SlidingGame from '../components/SlidingGame/SlidingGame'

const SlidingPuzzle = () => {
	const [isGameStarted, setIsGameStarted] = useState(false)

	return (
		<>
			{isGameStarted ? (
				<SlidingGame />
			) : (
				<div className='flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-600'>
					<div className='flex flex-col items-center justify-center bg-gray-900 border-4 border-gray-300 w-11/12 md:w-2/4 p-8 rounded-lg shadow-lg'>
						<h1 className='text-4xl font-bold text-center mb-8 text-white'>
							15 Puzzle Game
						</h1>
						<p className='text-lg text-center mb-8 text-gray-300'>
							Arrange the tiles in order by sliding them around the grid.
						</p>
						<div className='flex justify-center flex-col items-center w-full'>
							<button
								onClick={() => setIsGameStarted(true)}
								className='text-white text-center text-xl lg:text-2xl mb-5 border-2 border-black rounded-lg px-6 py-3 bg-purple-700 hover:bg-purple-800 hover:scale-105 transition-transform duration-300 shadow-md w-[70%] lg:w-1/2'
							>
								Start Game
							</button>
							<Link
								to={'/'}
								className='text-white text-xl text-center lg:text-2xl mb-5 border-2 border-black rounded-lg px-6 py-3 bg-purple-700 hover:bg-purple-800 hover:scale-105 transition-transform duration-300 shadow-md w-[70%] lg:w-1/2'
							>
								Home
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default SlidingPuzzle
