import { Link } from 'react-router-dom'
import { FaPuzzlePiece, FaChessKnight } from 'react-icons/fa'
import { GiRattlesnake } from 'react-icons/gi'

const HomePage = () => {
	return (
		<div className='text-white w-[50vw] mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mt-32 rounded-xl p-10 shadow-2xl'>
			<h1 className='text-center text-4xl mb-8 font-extrabold tracking-wider'>
				Luvtorn's Games
			</h1>

			<div className='grid grid-cols-2 gap-8'>
				<Link
					className='py-4 text-center bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 transform hover:scale-105'
					to={'/wordle-game'}
				>
					<FaPuzzlePiece className='inline-block mr-2' /> Wordle
				</Link>
				<Link
					className='py-4 text-center bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 transform hover:scale-105'
					to={'/gallows-game'}
				>
					<FaChessKnight className='inline-block mr-2' /> The Gallows
				</Link>
				<Link
					className='py-4 text-center bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 transform hover:scale-105'
					to={'/snake-game'}
				>
					<GiRattlesnake className='inline-block mr-2' /> The Snake
				</Link>
			</div>
		</div>
	)
}

export default HomePage
