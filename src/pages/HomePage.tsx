import { Link } from 'react-router-dom'
import { FaPuzzlePiece, FaChessKnight } from 'react-icons/fa'
import { GiRattlesnake } from 'react-icons/gi'
import { RiShip2Fill } from 'react-icons/ri'

const HomePage = () => {
	return (
		<div className='text-white w-[95vw] md:w-[55vw] lg:w-[30vw] mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mt-32 rounded-xl p-10 shadow-2xl '>
			<h1 className='text-center text-4xl mb-8 font-extrabold tracking-wider'>
				Luvtorn's Games
			</h1>

			<div className='grid grid-cols-2 gap-8'>
				<Link
					className='flex items-center justify-center py-4 text-center bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 transform hover:scale-105'
					to={'/games-collection/wordle-game'}
				>
					<FaPuzzlePiece className='inline-block mr-2' /> Wordle
				</Link>
				<Link
					className='flex items-center justify-center py-4 gap-1 text-center bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 transform hover:scale-105'
					to={'/games-collection/gallows-game'}
				>
					<FaChessKnight className='inline-block mr-2' /> The Gallows
				</Link>
				<Link
					className='py-4 text-center bg-gray-800 rounded-lg shadow-lg line-through hover:bg-gray-700 transition duration-300 transform hover:scale-105'
					to={'/games-collection'}
				>
					<GiRattlesnake className='inline-block mr-2' /> The Snake
				</Link>
				<Link
					className='py-4 text-center bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 line-through transform hover:scale-105'
					to={'/games-collection/seabattle-game'}
				>
					<RiShip2Fill className='inline-block mr-2' /> Sea battle
				</Link>
			</div>
		</div>
	)
}

export default HomePage
