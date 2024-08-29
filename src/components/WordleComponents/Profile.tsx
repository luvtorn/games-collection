import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { ChangeEvent, useState } from 'react'
import { FaPuzzlePiece, FaChessKnight, FaFileWord, FaGem } from 'react-icons/fa'
import { RiShip2Fill } from 'react-icons/ri'
import { LANGUAGES_DICTIONARY } from '../../constants/Languages'
import { languageStore } from '../../stores/LanguageStore'
import { playerStore } from '../../stores/PlayerStore'

const Profile = observer(() => {
	const { player } = playerStore
	const [isChange, setIsChange] = useState(false)
	const [playerName, setPlayerName] = useState(player.name)

	const handleChangePlayerName = (e: ChangeEvent<HTMLInputElement>) => {
		setPlayerName(e.target.value)
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			savePlayerName()
			setIsChange(false)
		}
	}

	const savePlayerName = () => {
		playerStore.updatePlayerName(playerName)
		localStorage.setItem('playerName', playerName)
	}

	const handleBlur = () => {
		savePlayerName()
		setIsChange(false)
	}

	return (
		<div className='flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-2xl text-white border-2 border-gray-700 mb-2'>
			<div
				className='text-xl font-semibold cursor-pointer mb-2'
				onClick={() => setIsChange(true)}
			>
				{!isChange ? (
					player.name
				) : (
					<motion.input
						type='text'
						className='bg-gray-700 text-white p-2 rounded-lg focus:outline-none'
						onChange={handleChangePlayerName}
						value={playerName}
						onKeyDown={handleKeyDown}
						onBlur={handleBlur}
						autoFocus
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.2 }}
					/>
				)}
				<div className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold rounded-full px-2 py-1 text-center mt-2'>
					Level {player.currentLevel}
				</div>
			</div>

			<div className='w-full mt-4'>
				<div className='relative h-4 bg-gray-700 rounded-full overflow-hidden'>
					<motion.div
						className='h-full bg-gradient-to-r from-indigo-500 to-purple-500'
						initial={{ width: 0 }}
						animate={{
							width: `${
								(Number(player.currentXp) / Number(player.xpToNextLevel)) * 100
							}%`,
						}}
						transition={{ duration: 0.5 }}
					/>
					<div className='absolute inset-0 flex justify-center items-center text-xs text-white font-bold'>
						{player.currentXp}/{player.xpToNextLevel} XP
					</div>
				</div>
			</div>

			<div className='text-sm font-medium text-gray-300 mt-4 w-full'>
				<p className='text-white text-xl mb-4'>
					{LANGUAGES_DICTIONARY[languageStore.language][0].winsIn}
				</p>
				<div className='grid grid-cols-2 gap-4 bg-gray-700 p-4 rounded-lg shadow-inner'>
					<div className='flex items-center text-white'>
						<FaFileWord className='mr-2 text-blue-400' />
						Wordle:{' '}
						<span className='ml-2 font-semibold'>{player.wordleWinsCount}</span>
					</div>
					<div className='flex items-center text-white'>
						<FaChessKnight className='mr-2 text-yellow-400' />
						Gallows:{' '}
						<span className='ml-2 font-semibold'>
							{player.gallowsWinsCount}
						</span>
					</div>
					<div className='flex items-center text-white'>
						<RiShip2Fill className='mr-2 text-teal-400' />
						Sea Battle:{' '}
						<span className='ml-2 font-semibold'>
							{player.seaBattleWinsCount}
						</span>
					</div>
					<div className='flex items-center text-white'>
						<FaPuzzlePiece className='mr-2 text-red-400' />
						Sliding Puzzle:{' '}
						<span className='ml-2 font-semibold'>
							{player.slidingWinsCount}
						</span>
					</div>
				</div>
			</div>

			{/* Добавляем отображение количества алмазов */}
			<div className='flex items-center justify-center bg-gray-700 p-2 mt-4 rounded-lg shadow-inner'>
				<FaGem className='mr-2 text-cyan-300 text-xl' />
				<p className='text-white text-lg font-semibold'>
					Diamonds: {player.diamondCount}
				</p>
			</div>
		</div>
	)
})

export default Profile
