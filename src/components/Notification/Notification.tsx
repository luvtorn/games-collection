import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { notificationStore } from '../../stores/NotificationStore'

const Notification = observer(() => {
	const { message, type } = notificationStore

	return (
		<AnimatePresence>
			{!!message && (
				<div className='w-full fixed left-1/2 top-2 -translate-x-1/2 z-50'>
					<motion.div
						className={classNames(
							'rounded-lg py-3 px-5 mx-auto font-semibold w-52 text-xl shadow-xl text-neutral-200 text-center',
							{
								'bg-gradient-to-b from-green-500 to-green-800': type === 'win',
								'bg-gradient-to-b from-red-500 to-red-800': type === 'lose',
								'bg-gradient-to-b from-orange-500 to-yellow-700':
									type === 'warning',
							}
						)}
						initial={{ y: -200, opacity: 0 }}
						animate={{ y: 5, opacity: 1 }}
						exit={{ y: -200, opacity: 0 }}
						transition={{
							type: 'spring',
							stiffness: 150,
							damping: 20,
							mass: 1,
						}}
					>
						{message}
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	)
})

export default Notification
