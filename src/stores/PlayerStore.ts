import { makeAutoObservable } from 'mobx'

class PlayerStore {
	player = {
		name: localStorage.getItem('playerName') || 'Player',
		currentLevel: localStorage.getItem('currentLevel') || '1',
		currentXp: localStorage.getItem('currentXp') || '0',
		xpToNextLevel: localStorage.getItem('xpToNextLevel') || '100',
		wordleWinsCount: localStorage.getItem('wordleWinsCount') || '0',
		seaBattleWinsCount: localStorage.getItem('seaBattleWinsCount') || '0',
		gallowsWinsCount: localStorage.getItem('gallowsWinsCount') || '0',
		slidingWinsCount: localStorage.getItem('slidingWinsCount') || '0',
		diamondCount: localStorage.getItem('diamondCount') || '100',
	}

	constructor() {
		makeAutoObservable(this)
	}

	updatePlayerName = (name: string) => {
		this.player.name = name
		localStorage.setItem('playerName', name)
	}

	checkDiamonds = () => {
		if (Number(this.player.diamondCount) <= 20) return false
	}

	getAnswer = () => {
		this.player.diamondCount = String(Number(this.player.diamondCount) - 20)
		localStorage.setItem('diamondCount', this.player.diamondCount)
	}

	checkLevel = () => {
		if (Number(this.player.currentXp) >= Number(this.player.xpToNextLevel)) {
			this.player.currentLevel = String(Number(this.player.currentLevel) + 1)
			this.player.xpToNextLevel = String(
				Number(this.player.xpToNextLevel) + 100
			)

			localStorage.setItem('currentLevel', this.player.currentLevel)
			localStorage.setItem('xpToNextLevel', String(this.player.xpToNextLevel))
		}
	}

	updateWinsCount = (game: 'wordle' | 'seaBattle' | 'gallows' | 'sliding') => {
		switch (game) {
			case 'wordle':
				this.player.wordleWinsCount = String(
					Number(this.player.wordleWinsCount) + 1
				)
				localStorage.setItem('wordleWinsCount', this.player.wordleWinsCount)
				break
			case 'seaBattle':
				this.player.seaBattleWinsCount = String(
					Number(this.player.seaBattleWinsCount) + 1
				)
				localStorage.setItem(
					'seaBattleWinsCount',
					this.player.seaBattleWinsCount
				)
				break
			case 'gallows':
				this.player.gallowsWinsCount = String(
					Number(this.player.gallowsWinsCount) + 1
				)

				localStorage.setItem('gallowsWinsCount', this.player.gallowsWinsCount)
				break
			case 'sliding':
				this.player.slidingWinsCount = String(
					Number(this.player.slidingWinsCount) + 1
				)
				localStorage.setItem('slidingWinsCount', this.player.slidingWinsCount)
				break

			default:
				this.player.diamondCount = String(Number(this.player.diamondCount) + 10)
				localStorage.setItem('diamondCount', this.player.diamondCount)
				break
		}
	}

	addXp = () => {
		this.player.currentXp = String(Number(this.player.currentXp) + 20)
		localStorage.setItem('currentXp', this.player.currentXp)

		if (Number(this.player.currentXp) >= Number(this.player.xpToNextLevel)) {
			this.player.currentLevel = String(Number(this.player.currentLevel) + 1)
			this.player.xpToNextLevel = String(
				Number(this.player.xpToNextLevel) + 100
			)

			localStorage.setItem('currentLevel', this.player.currentLevel)
			localStorage.setItem('xpToNextLevel', String(this.player.xpToNextLevel))
		}
	}
}

export const playerStore = new PlayerStore()
