import { makeAutoObservable, runInAction, toJS } from 'mobx'
import { ILetter } from '../types/types'
import { checkWord } from '../utils/check-word'
import { confettiStore } from './ConfettiStore'
import { languageStore } from './LanguageStore'
import { notificationStore } from './NotificationStore'
import { playerStore } from './PlayerStore'
import { randomWords } from './words'

class WordlyStore {
	letterObj: ILetter = {
		letterTitle: '',
		isGuessed: false,
		isGuessedWithCorrectPosition: false,
		firstRender: true,
	}

	lettersCount: number = 5

	badLetters = ''
	goodLetters = ''
	lettersWithGoodPos = ''

	usedIndices: number[] = []

	lettersArr: ILetter[] = Array.from(
		{ length: Math.pow(this.lettersCount, 2) },
		() => ({
			...this.letterObj,
		})
	)
	currentWordIndex: number = 0

	startWord =
		randomWords[languageStore.language][this.lettersCount as 4 | 5 | 6][
			Math.floor(
				Math.random() *
					randomWords[languageStore.language][this.lettersCount as 4 | 5 | 6]
						.length
			)
		]

	isGameStarted: boolean = false

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

	setIsGameStarted() {
		runInAction(() => {
			this.isGameStarted = true
			this.lettersArr = Array.from(
				{ length: Math.pow(this.lettersCount, 2) },
				() => ({
					letterTitle: '',
					isGuessed: false,
					isGuessedWithCorrectPosition: false,
					firstRender: true,
				})
			)
			this.currentWordIndex = 0
			this.badLetters = ''
			this.goodLetters = ''
			this.lettersWithGoodPos = ''
			this.startWord =
				randomWords[languageStore.language][this.lettersCount as 4 | 5 | 6][
					Math.floor(
						Math.random() *
							randomWords[languageStore.language][
								this.lettersCount as 4 | 5 | 6
							].length
					)
				]
		})
	}

	setLettersCount = (count: number) => {
		this.lettersCount = count
	}

	getCurrentWord = () => {
		const startArr = this.currentWordIndex * this.lettersCount
		const endArr = startArr + this.lettersCount
		const currentWord = this.lettersArr.slice(startArr, endArr)

		return { startArr, endArr, currentWord }
	}

	setLetter(letter: string) {
		runInAction(() => {
			const { currentWord, startArr } = this.getCurrentWord()
			const index = currentWord.findIndex(i => i.letterTitle === '')
			if (index !== -1) {
				this.lettersArr[startArr + index].letterTitle = letter
			}
		})
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

			const randomLetter = this.startWord[randomIndex]
			this.lettersWithGoodPos += randomLetter

			const { currentWord } = this.getCurrentWord()
			currentWord[randomIndex].letterTitle = randomLetter

			// playerStore.getAnswer()
		}
	}

	async submitWord() {
		console.log(toJS(this.startWord))

		const { currentWord } = this.getCurrentWord()

		if (
			currentWord.filter(l => l.letterTitle !== '').length === this.lettersCount
		) {
			const word = currentWord.map(l => l.letterTitle).join('')

			if (await checkWord(word)) {
				runInAction(() => {
					currentWord.forEach((lett, index) => {
						if (this.startWord[index] === lett.letterTitle) {
							lett.isGuessedWithCorrectPosition = true
							lett.isGuessed = true
							this.lettersWithGoodPos += lett.letterTitle
						}
					})

					currentWord.forEach(lett => {
						if (
							!lett.isGuessedWithCorrectPosition &&
							this.startWord.includes(lett.letterTitle)
						) {
							lett.isGuessed = true
							this.goodLetters += lett.letterTitle
						}
					})

					currentWord.forEach(lett => {
						if (!lett.isGuessed && !this.startWord.includes(lett.letterTitle)) {
							this.badLetters += lett.letterTitle
						}
						lett.firstRender = false
					})

					this.currentWordIndex += 1
					this.win(word)

					this.lose(word)
				})
			} else {
				notificationStore.show('You need to write a correct word', 'warning')
			}
		} else {
			notificationStore.show(
				`You must write ${this.lettersCount} letters`,
				'warning'
			)
		}
	}

	resetGame() {
		runInAction(() => {
			this.lettersArr = Array.from(
				{ length: Math.pow(this.lettersCount, 2) },
				() => ({
					letterTitle: '',
					isGuessed: false,
					isGuessedWithCorrectPosition: false,
					firstRender: true,
				})
			)
			this.currentWordIndex = 0
			this.badLetters = ''
			this.goodLetters = ''
			this.lettersWithGoodPos = ''
			this.startWord =
				randomWords[languageStore.language][this.lettersCount as 4 | 5 | 6][
					Math.floor(
						Math.random() *
							randomWords[languageStore.language][
								this.lettersCount as 4 | 5 | 6
							].length
					)
				]
		})
		this.isGameStarted = false
	}

	win(word: string) {
		if (word === this.startWord) {
			notificationStore.show('You win', 'win')
			confettiStore.setIsConfetti()
			setTimeout(() => {
				playerStore.addXp()
				playerStore.updateWinsCount('wordle')
				this.resetGame()
			}, 3000)
		}
	}

	lose(word: string) {
		if (
			this.currentWordIndex === this.lettersCount &&
			word !== this.startWord
		) {
			notificationStore.show(
				`You lose, start word was: ${this.startWord}`,
				'lose'
			)
			setTimeout(() => {
				this.resetGame()
			}, 2000)
		}
	}

	deleteLetter() {
		runInAction(() => {
			const { currentWord, startArr, endArr } = this.getCurrentWord()

			const index = currentWord.findIndex(l => l.letterTitle === '')

			if (index === -1) {
				this.lettersArr[endArr - 1].letterTitle = ''
			} else if (index > 0) {
				this.lettersArr[startArr + index - 1].letterTitle = ''
			}
		})
	}
}

export const wordlyStore = new WordlyStore()
