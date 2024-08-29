import classNames from 'classnames'
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IShips } from '../../types/types'
import { observer } from 'mobx-react-lite'
import { seaBattleStore } from '../../stores/SeaBattleStore'
import { toJS } from 'mobx'
import { motion } from 'framer-motion'

const Cell: React.FC<{ item: IShips | null; isEnemy?: boolean }> = observer(
	({ item, isEnemy }) => {
		const { isGameStarted, setIsEnemyTurn } = seaBattleStore
		const [wasAttacked, setWasAttacked] = useState(item?.isUnavailable || false)
		const [canAttack, setCanAttack] = useState(true)

		let hitIndex: number | null = null

		const handleEnemyAttack = () => {
			if (
				isGameStarted &&
				seaBattleStore.isEnemyTurn &&
				seaBattleStore.myBoard
			) {
				let randomIndex = Math.floor(Math.random() * 100)
				let cell = seaBattleStore.myBoard[randomIndex]

				if (hitIndex !== null) {
					const row = Math.floor(hitIndex / 10)
					const neighbors = [
						hitIndex - 10, // Above
						hitIndex + 10, // Below
						hitIndex - 1, // Left
						hitIndex + 1, // Right
					].filter(index => {
						const neighborRow = Math.floor(index / 10)
						return (
							index >= 0 &&
							index < 100 &&
							(neighborRow === row || Math.abs(neighborRow - row) === 1) &&
							hitIndex &&
							!(index === hitIndex - 1 && neighborRow !== row) &&
							!(index === hitIndex + 1 && neighborRow !== row)
						)
					})

					const availableNeighbors = neighbors.filter(index => {
						const neighborsCell: IShips | null = seaBattleStore.myBoard[index]

						return neighborsCell?.isUnavailable !== true
					})

					if (availableNeighbors.length > 0) {
						console.log('availableNeighbors', availableNeighbors)

						randomIndex =
							availableNeighbors[
								Math.floor(Math.random() * availableNeighbors.length)
							]
						cell = seaBattleStore.myBoard[randomIndex]
					} else {
						hitIndex = null
					}
				}

				while (
					cell &&
					(cell.wasAttacked || cell.isUnavailable || cell.lives <= 0)
				) {
					randomIndex = Math.floor(Math.random() * 100)
					cell = seaBattleStore.myBoard[randomIndex]
				}

				console.log('hitIndex', hitIndex)

				let item = cell

				console.log(toJS(cell), randomIndex)

				if (item === null) {
					item = {
						...cell,
						isUnavailable: true,
						isShip: false,
						wasAttacked: true,
					}
				}

				if (item !== null && !item.isUnavailable && item.size) {
					item.lives -= 1
					item = { ...item, wasAttacked: true }

					if (item.lives <= 0) {
						seaBattleStore.markDeadShip(seaBattleStore.myBoard, item)
						hitIndex = null
					} else {
						hitIndex = randomIndex
					}

					setTimeout(() => {
						handleEnemyAttack()
					}, 1500)
				} else {
					setIsEnemyTurn(false)
				}

				seaBattleStore.myBoard[randomIndex] = { ...item }
			}
		}

		const handlePlayerAttack = () => {
			if (item && isGameStarted && canAttack) {
				setWasAttacked(true)

				item.lives -= 1

				if (item.lives <= 0) {
					seaBattleStore.markDeadShip(seaBattleStore.enemyBoard, item, true)
				}
			} else if (isGameStarted && canAttack && item === null) {
				setWasAttacked(true)
				setIsEnemyTurn(true)
			}

			setCanAttack(false)

			setTimeout(() => {
				handleEnemyAttack()
			}, 1000)
		}

		return (
			<motion.div
				className={classNames(
					'flex items-center justify-center w-[19px] h-[19px] lg:w-[29px] lg:h-[29px] text-center outline outline-2',
					isEnemy ? 'outline-slate-500' : 'outline-slate-700',
					{
						'!bg-red-600':
							(wasAttacked && item && item.lives > 0) ||
							(item && item.lives > 0 && item.wasAttacked),
						'bg-slate-700': item && !item.isUnavailable && !isEnemy,
						'hover:bg-slate-400 cursor-crosshair':
							isEnemy && canAttack && isGameStarted && !item?.isUnavailable,
						'!bg-black': item && item.lives !== undefined && item.lives <= 0,
					}
				)}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					type: 'keyframes',
					stiffness: 150,
					damping: 20,
					mass: 1,
				}}
				onClick={
					isGameStarted && !seaBattleStore.isEnemyTurn && canAttack && isEnemy
						? handlePlayerAttack
						: undefined
				}
			>
				{(wasAttacked && !item?.size) ||
				(item && item.isUnavailable && !item.isShip) ? (
					<IoMdClose size={30} />
				) : (
					''
				)}
			</motion.div>
		)
	}
)

export default Cell
