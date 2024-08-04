import { makeAutoObservable, runInAction } from 'mobx'

type NotificationType = 'lose' | 'win' | 'warning'

class NotificationStore {
	message = ''
	type: NotificationType = 'warning'

	constructor() {
		makeAutoObservable(this)
	}

	show = (message: string, type: NotificationType) => {
		runInAction(() => {
			this.message = message
			this.type = type

			setTimeout(() => {
				this.message = ''
			}, 2000)
		})
	}
}

export const notificationStore = new NotificationStore()
