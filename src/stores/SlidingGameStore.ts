import { makeAutoObservable } from 'mobx'
import { notificationStore } from './NotificationStore'
import { confettiStore } from './ConfettiStore'
import { playerStore } from './PlayerStore'

class SlidingGameStore {
	currentTurn = 0
	wins = Number(localStorage.getItem('slidingWins')) || 0
	board = [
		{
			value: 1,
		},
		{
			value: 2,
		},
		{
			value: 3,
		},
		{
			value: 4,
		},
		{
			value: 5,
		},
		{
			value: 6,
		},
		{
			value: 7,
		},
		{
			value: 8,
		},
		{
			value: 9,
		},
		{
			value: 10,
		},
		{
			value: 11,
		},
		{
			value: 12,
		},
		{
			value: 13,
		},
		{
			value: 14,
		},
		{
			value: 15,
		},
		{
			value: 0,
		},
	]

	constructor() {
		makeAutoObservable(this)

		this.shuffle()
	}

	shuffle = () => {
		for (let i = this.board.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[this.board[i], this.board[j]] = [this.board[j], this.board[i]]
		}

		this.currentTurn = 0
	}

	findEmptyTile() {
		return this.board.findIndex(item => item.value === 0)
	}

	canMove = (index: number) => {
		const emptyIndex = this.findEmptyTile()
		const tileRow = Math.floor(index / 4)
		const tileCol = index % 4

		const emptyRow = Math.floor(emptyIndex / 4)
		const emptyCol = emptyIndex % 4

		return (
			(tileRow === emptyRow && Math.abs(tileCol - emptyCol) === 1) ||
			(tileCol === emptyCol && Math.abs(tileRow - emptyRow) === 1)
		)
	}

	isWin = () => {
		if (this.board[15].value !== 0) return false

		for (let i = 0; i < 15; i++) {
			if (this.board[i].value !== i + 1) return false
		}

		return true
	}

	moveTile = (index: number) => {
		if (this.canMove(index)) {
			const emptyIndex = this.findEmptyTile()
			;[this.board[index], this.board[emptyIndex]] = [
				this.board[emptyIndex],
				this.board[index],
			]

			this.currentTurn++
		}

		if (this.isWin()) {
			notificationStore.show("You've won!", 'win')
			confettiStore.setIsConfetti()
			playerStore.updateWinsCount('sliding')
		}
	}
}

export const slidingGameStore = new SlidingGameStore()
