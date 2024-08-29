import { languageStore } from '../stores/LanguageStore'
import { IWordInDictionary } from '../types/types'

const { language } = languageStore

const languageForDictionary = {
	ru: 'ru-ru',
	en: 'en-en',
	pl: 'pl-ru',
	ua: 'uk-ru',
}

export const checkWord = async (word: string) => {
	const res = await fetch(
		`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20240730T154543Z.4fff47eff1d3cfca.20fcf0e8405f86dfa878e04a702521164ed1210d&lang=${languageForDictionary[language]}&text=${word}`
	)

	const data: IWordInDictionary = await res.json()

	if (data.def.length > 0) {
		return true
	}

	return false
}
