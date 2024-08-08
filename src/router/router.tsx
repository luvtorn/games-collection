import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import WordlePage from '../pages/WordlePage'
import GallowsPage from '../pages/GallowsPage'
import SeaBattlePage from '../pages/SeaBattlePage'

export const router = createBrowserRouter([
	{
		path: '/games-collection',
		element: <HomePage />,
	},
	{
		path: '/games-collection/wordle-game',
		element: <WordlePage />,
	},
	{
		path: '/games-collection/gallows-game',
		element: <GallowsPage />,
	},
	{
		path: '/games-collection/seabattle-game',
		element: <SeaBattlePage />,
	},
])
