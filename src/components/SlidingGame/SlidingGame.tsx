import { observer } from 'mobx-react-lite'
import { slidingGameStore } from '../../stores/SlidingGameStore'
import classNames from 'classnames'
import Notification from '../Notification/Notification'
import { confettiStore } from '../../stores/ConfettiStore'
import ReactConfetti from 'react-confetti'
import SlidingStats from './SlidingStats'

const SlidingGame = observer(() => {
	const { board } = slidingGameStore
	const { isConfetti } = confettiStore

	return (
		<>
			<Notification />
			{isConfetti && <ReactConfetti />}
			<div className='text-white mx-auto mt-16 w-max grid grid-cols-4'>
				{board.map((item, index) => (
					<div
						className={classNames(
							'w-[85px] h-[85px] lg:w-[100px] lg:h-[100px] flex justify-center items-center text-xl border border-white',
							{
								'bg-green-500': item.value === index + 1,
							}
						)}
						key={index}
						onClick={() => slidingGameStore.moveTile(index)}
					>
						{item.value === 0 ? '' : item.value}
					</div>
				))}
			</div>
			<SlidingStats />
		</>
	)
})

export default SlidingGame
