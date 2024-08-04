import { observer } from 'mobx-react-lite'
import { gallowsStore } from '../stores/GallowsStore'
import GallowsGame from '../components/GallowsGame/GallowsGame'
import { GALLOWSTHEMES } from '../constants/GallowsThemes'

const GallowsPage = observer(() => {
	const { setGameType, gameType } = gallowsStore

	return (
		<div className='w-screen h-screen bg-white bg-custom-pattern bg-custom-pattern-size bg-custom-pattern-pos'>
			{!gameType ? (
				<div className='w-[50vw] mx-auto flex flex-col items-center'>
					<h1 className='text-5xl font-sans mt-7'>Темы</h1>
					<h3 className='text-3xl font-sans mt-2'>
						Угадано слов: <span className='text-red-500 text-4xl'>0</span>
					</h3>

					<div className='flex flex-col gap-2'>
						{GALLOWSTHEMES.map(button => (
							<button
								key={button.type}
								className='mt-4 text-2xl font-sans bg-slate-100 cursor-pointer border-2 border-black rounded-md px-9 py-2 text-center transform hover:scale-110 transition-all duration-200'
								onClick={() => setGameType(button.type)}
							>
								{button.value}
							</button>
						))}
					</div>
				</div>
			) : (
				<GallowsGame />
			)}
		</div>
	)
})

export default GallowsPage
