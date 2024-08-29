import { Link } from 'react-router-dom'
import { FaPuzzlePiece, FaChessKnight, FaFileWord } from 'react-icons/fa'
import { RiShip2Fill } from 'react-icons/ri'
import Profile from '../components/WordleComponents/Profile'
import LanguageSelector from '../components/LanguagesSelector/LanguagesSelector'

const HomePage = () => {
	return (
		<div className='w-screen h-screen overflow-x-hidden bg-gray-900'>
			<div className='w-[95vw] md:w-[55vw] lg:w-[40vw] mx-auto mt-1.5'>
				<Profile />

				<div className='text-white text-center'>
					<h1 className='text-3xl flex justify-center gap-16 mb-4 font-extrabold tracking-wider'>
						Luvtorn's Games
						<LanguageSelector isBlack />
					</h1>
				</div>

				<div className='grid grid-cols-2 gap-8'>
					<Link
						className='flex flex-col items-center justify-center py-6 px-4 text-center bg-gray-800 rounded-lg shadow-lg border-2 border-gray-700 transition duration-300 transform hover:scale-105 hover:bg-gray-700'
						to={'/wordle-game'}
					>
						<FaFileWord className='text-4xl text-white mb-2' />
						<span className='text-white font-semibold text-lg'>Wordle</span>
					</Link>
					<Link
						className='flex flex-col items-center justify-center py-6 px-4 text-center bg-gray-800 rounded-lg shadow-lg border-2 border-gray-700 transition duration-300 transform hover:scale-105 hover:bg-gray-700'
						to={'/gallows-game'}
					>
						<FaChessKnight className='text-4xl text-white mb-2' />
						<span className='text-white font-semibold text-lg'>
							The Gallows
						</span>
					</Link>
					<Link
						className='flex flex-col items-center justify-center py-6 px-4 text-center bg-gray-800 rounded-lg shadow-lg border-2 border-gray-700 transition duration-300 transform hover:scale-105 hover:bg-gray-700'
						to={'/seabattle-game'}
					>
						<RiShip2Fill className='text-4xl text-white mb-2' />
						<span className='text-white font-semibold text-lg'>Sea Battle</span>
					</Link>
					<Link
						className='flex flex-col items-center justify-center py-6 px-4 text-center bg-gray-800 rounded-lg shadow-lg border-2 border-gray-700 transition duration-300 transform hover:scale-105 hover:bg-gray-700'
						to={'/sliding-puzzle'}
					>
						<FaPuzzlePiece className='text-4xl text-white mb-2' />
						<span className='text-white font-semibold text-lg'>
							Sliding Puzzle
						</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default HomePage
