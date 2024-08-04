import { makeAutoObservable } from 'mobx'
import { IGallowsTypeGame } from '../types/types'

class GallowsStore {
	gameType: IGallowsTypeGame = ''
	startWord: string = 'волна'
	guessedLetters = new Array<string>(this.startWord.length)

	constructor() {
		makeAutoObservable(this)
	}

	setGameType = (type: IGallowsTypeGame) => {
		this.gameType = type
	}
}

export const gallowsStore = new GallowsStore()
