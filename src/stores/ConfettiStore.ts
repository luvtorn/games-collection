import { makeAutoObservable } from 'mobx'

class ConfettiStore {
	isConfetti = false
	constructor() {
		makeAutoObservable(this)
	}

	setIsConfetti() {
		this.isConfetti = true

		setTimeout(() => {
			this.isConfetti = false
		}, 3000)
	}
}

export const confettiStore = new ConfettiStore()
