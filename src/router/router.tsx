import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import WordlePage from '../pages/WordlePage'
import GallowsPage from '../pages/GallowsPage'

export const router = createBrowserRouter([
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
])
