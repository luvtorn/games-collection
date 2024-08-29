import { makeAutoObservable } from 'mobx'
import { IGallowsTypeGame } from '../types/types'
import { notificationStore } from './NotificationStore'
import { playerStore } from './PlayerStore'

class GallowsStore {
	gameType: IGallowsTypeGame = ''
	startWord: string = ''
	guessedLetters = new Array<string>(this.startWord.length)
	badLetters: string[] = []
	attempts = 0
	usedIndices: number[] = []

	constructor() {
		makeAutoObservable(this)
	}

	setGameType = (type: IGallowsTypeGame, words: string[]) => {
		this.gameType = type
		this.startWord =
			words[Math.floor(Math.random() * words.length)].toLowerCase()
		this.generateGuessedLetters()
	}

	getAnswer = () => {
		if (!playerStore.checkDiamonds()) {
			const usedIndices = this.usedIndices || []
			let randomIndex

			if (usedIndices.length >= this.startWord.length) {
				return
			}

			do {
				randomIndex = Math.floor(Math.random() * this.startWord.length)
			} while (usedIndices.includes(randomIndex))

			usedIndices.push(randomIndex)
			this.usedIndices = usedIndices

			this.checkLetter(this.startWord.split('')[randomIndex])
		}
	}

	generateGuessedLetters = () => {
		this.guessedLetters = new Array<string>(this.startWord.length).fill('')
		this.startWord.split('').forEach((char, index) => {
			if (char === ' ') {
				this.guessedLetters[index] = '-'
			} else {
				this.guessedLetters[index] = ''
			}
		})
	}

	resetGame = () => {
		this.gameType = ''
		this.startWord = ''
		this.guessedLetters = new Array<string>(this.startWord.length).fill('')
		this.badLetters = []
		this.attempts = 0
	}

	checkLetter = (letter: string) => {
		const indexOfLetter = this.startWord.indexOf(letter)

		console.log(indexOfLetter)

		if (this.badLetters.includes(letter)) return

		if (indexOfLetter === -1) {
			this.attempts += 1
			this.badLetters.push(letter)
		} else {
			this.startWord.split('').forEach((char, index) => {
				if (char === letter) {
					this.guessedLetters[index] = letter
				}
			})
		}
		if (this.attempts > 6 && this.guessedLetters.join('') !== this.startWord) {
			this.guessedLetters = this.startWord.split('')
			notificationStore.show('You lose', 'lose')
			setTimeout(() => {
				this.resetGame()
			}, 2000)
		} else if (this.guessedLetters.join('') === this.startWord) {
			notificationStore.show('You win', 'win')
			playerStore.updateWinsCount('gallows')
			setTimeout(() => {
				this.resetGame()
			}, 2000)
		}
	}
}

export const gallowsStore = new GallowsStore()
