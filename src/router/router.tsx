import { createHashRouter } from 'react-router-dom'
import SlidingLevels from '../components/SlidingGame/SlidingGame'
import GallowsPage from '../pages/GallowsPage'
import HomePage from '../pages/HomePage'
import SeaBattlePage from '../pages/SeaBattlePage'
import SlidingPuzzle from '../pages/SlidingPuzzle'
import WordlePage from '../pages/WordlePage'

export const router = createHashRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/wordle-game',
		element: <WordlePage />,
	},
	{
		path: '/gallows-game',
		element: <GallowsPage />,
	},
	{
		path: '/seabattle-game',
		element: <SeaBattlePage />,
	},
	{
		path: '/sliding-puzzle',
		element: <SlidingPuzzle />,
	},
	{
		path: '/sliding-puzzle/levels',
		element: <SlidingLevels />,
	},
])
