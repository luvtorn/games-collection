import { IoIosRefresh, IoMdCheckmark } from 'react-icons/io'
import Board from '../components/SeaBattleComponents/Board'
import { seaBattleStore } from '../stores/SeaBattleStore'
import { observer } from 'mobx-react-lite'
import Notification from '../components/Notification/Notification'
import useOrientationWarning from '../hooks/useOrientation'
import { notificationStore } from '../stores/NotificationStore'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const SeaBattlePage = observer(() => {
	const {
		generateNewBoard,
		myBoard,
		enemyBoard,
		isGameStarted,
		startGame,
		isEnemyTurn,
	} = seaBattleStore

	const isPortrait = useOrientationWarning()

	if (isPortrait) {
		notificationStore.show(
			'Портретная версия приложения не поддерживается, переключите ориентацию',
			'warning'
		)
	}

	return (
		<>
			<Notification />
			<div className='w-screen h-screen bg-custom-pattern bg-white bg-custom-pattern-size bg-custom-pattern-pos overflow-'>
				{isGameStarted && (
					<h2 className='font-sans text-4xl text-center'>
						{!isEnemyTurn ? 'Ваш ход' : 'Ход противника'}
					</h2>
				)}

				<Link to={'/'} className='absolute top-10 left-5'>
					<FaHome size={40} />
				</Link>
				<div className='flex justify-center items-center gap-20'>
					<Board arr={myBoard} />

					{!isGameStarted ? (
						<div className='flex flex-col gap-2 items-center justify-center'>
							<button onClick={() => generateNewBoard()}>
								<IoIosRefresh size={40} />
							</button>
							<button onClick={() => startGame()}>
								<IoMdCheckmark size={40} />
							</button>
						</div>
					) : null}

					<Board arr={enemyBoard} isEnemy />
				</div>
			</div>
		</>
	)
})

export default SeaBattlePage
