import { makeAutoObservable } from 'mobx'
import { IShips } from '../types/types'
import { notificationStore } from './NotificationStore'
import { playerStore } from './PlayerStore'

class SeaBattleStore {
	myBoard = new Array(100).fill(null)
	enemyBoard = new Array(100).fill(null)
	myShips: IShips[] = [
		{ id: 1, size: 4, isHorizontal: false, isUnavailable: false, lives: 4 },
		{ id: 2, size: 3, isHorizontal: false, isUnavailable: false, lives: 3 },
		{ id: 3, size: 3, isHorizontal: false, isUnavailable: false, lives: 3 },
		{ id: 4, size: 2, isHorizontal: false, isUnavailable: false, lives: 2 },
		{ id: 5, size: 2, isHorizontal: false, isUnavailable: false, lives: 2 },
		{ id: 6, size: 2, isHorizontal: false, isUnavailable: false, lives: 2 },
		{ id: 7, size: 1, isHorizontal: false, isUnavailable: false, lives: 1 },
		{ id: 8, size: 1, isHorizontal: false, isUnavailable: false, lives: 1 },
		{ id: 9, size: 1, isHorizontal: false, isUnavailable: false, lives: 1 },
		{ id: 10, size: 1, isHorizontal: false, isUnavailable: false, lives: 1 },
	]

	enemyShips: IShips[] = [
		{ id: 11, size: 4, isHorizontal: false, isUnavailable: false, lives: 4 },
		{ id: 12, size: 3, isHorizontal: false, isUnavailable: false, lives: 3 },
		{ id: 13, size: 3, isHorizontal: false, isUnavailable: false, lives: 3 },
		{ id: 14, size: 2, isHorizontal: false, isUnavailable: false, lives: 2 },
		{ id: 15, size: 2, isHorizontal: false, isUnavailable: false, lives: 2 },
		{ id: 16, size: 2, isHorizontal: false, isUnavailable: false, lives: 2 },
		{ id: 17, size: 1, isHorizontal: false, isUnavailable: false, lives: 1 },
		{ id: 18, size: 1, isHorizontal: false, isUnavailable: false, lives: 1 },
		{ id: 19, size: 1, isHorizontal: false, isUnavailable: false, lives: 1 },
		{ id: 20, size: 1, isHorizontal: false, isUnavailable: false, lives: 1 },
	]

	isEnemyTurn = false

	isGameStarted: boolean = false

	constructor() {
		makeAutoObservable(this)
		this.generateNewBoard()
	}

	startGame = () => {
		this.isGameStarted = true
	}

	setIsEnemyTurn = (isEnemyTurn: boolean) => {
		this.isEnemyTurn = isEnemyTurn
	}

	generateNewBoard = () => {
		this.myBoard = new Array(100).fill(null)
		this.enemyBoard = new Array(100).fill(null)
		this.placeShips(this.myBoard, this.myShips)
		this.placeShips(this.enemyBoard, this.enemyShips)
	}

	gameOver = (board: (IShips | null)[], isEnemy?: boolean) => {
		const isAllShipDead = board
			.filter(item => item !== null && item.size)
			.every(item => item && (item.lives === 0 || item.isUnavailable))

		if (isAllShipDead) {
			if (isEnemy) {
				notificationStore.show('You win', 'win')
				playerStore.updateWinsCount('seaBattle')
			} else {
				notificationStore.show('You lose', 'lose')
			}
			setTimeout(() => {
				window.location.reload()
			}, 2000)
		}
	}

	markDeadShip = (
		board: (IShips | null)[],
		ship: IShips,
		isEnemy?: boolean
	) => {
		const shipIndexes = board.reduce((acc: number[], item, index) => {
			if (item?.id === ship.id) {
				acc.push(index)
			}
			return acc
		}, [])

		shipIndexes.forEach(index => {
			const row = Math.floor(index / 10)
			const col = index % 10

			const neighbors = [
				index - 1,
				index + 1,
				index - 10,
				index + 10,
				index - 11,
				index + 9,
				index + 11,
				index - 9,
			]

			neighbors.forEach(item => {
				const nRow = Math.floor(item / 10)
				const nCol = item % 10

				if (
					item >= 0 &&
					item < board.length &&
					Math.abs(nRow - row) <= 1 &&
					Math.abs(nCol - col) <= 1
				) {
					if (board[item] === null && board[item] !== ship) {
						board[item] = { isUnavailable: true } as IShips
					}
				}
			})
		})

		shipIndexes.forEach(index => {
			board[index] = { ...ship, isUnavailable: true } as IShips
		})

		this.gameOver(board, isEnemy)
	}

	placeShip = (
		board: (IShips | null)[],
		ship: IShips,
		isHorizontal: boolean,
		startSquare: number
	) => {
		for (let i = 0; i < ship.size; i++) {
			const index = isHorizontal ? startSquare + i : startSquare + i * 10
			board[index] = ship
		}
	}

	placeShips = (board: (IShips | null)[], ships: IShips[]) => {
		for (const ship of ships) {
			let placed = false
			while (!placed) {
				const isHorizontal = Math.random() < 0.5
				const start = Math.floor(Math.random() * 100)
				if (this.canPlaceShip(board, ship.size, start, isHorizontal)) {
					ship.isHorizontal = isHorizontal
					this.placeShip(board, ship, isHorizontal, start)
					placed = true
				}
			}
		}
	}

	canPlaceShip = (
		board: (IShips | null)[],
		size: number,
		startSquare: number,
		isHorizontal: boolean
	) => {
		const row = Math.floor(startSquare / 10)
		const col = startSquare % 10

		for (let i = 0; i < size; i++) {
			const index = isHorizontal ? startSquare + i : startSquare + i * 10

			if (board[index] !== null || index >= 100) {
				return false
			}

			const currentRow = Math.floor(index / 10)
			const currentCol = index % 10

			if (isHorizontal && currentRow !== row) {
				return false
			}

			if (!isHorizontal && currentCol !== col) {
				return false
			}

			const neighbors = [
				index - 10,
				index + 10,
				index - 1,
				index + 1,
				index - 11,
				index - 9,
				index + 9,
				index + 11,
			]

			for (const neighbor of neighbors) {
				if (neighbor >= 0 && neighbor < 100 && board[neighbor] !== null) {
					return false
				}
			}
		}

		return true
	}
}

export const seaBattleStore = new SeaBattleStore()
