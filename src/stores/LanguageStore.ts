import { makeAutoObservable } from 'mobx'
import { languages } from '../types/types'

class LanguageStore {
	language: languages = 'ru'

	constructor() {
		makeAutoObservable(this)
	}

	setLanguage = (lang: languages) => {
		this.language = lang
	}
}

export const languageStore = new LanguageStore()
