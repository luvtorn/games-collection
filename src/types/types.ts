export interface ILetter {
	letterTitle: string
	isGuessed?: boolean
	isGuessedWithCorrectPosition?: boolean
	firstRender?: boolean
}

export interface IWordInDictionary {
	def: []
}

export interface IGallowsType {
	type: IGallowsTypeGame
	value: string
	words: string[]
}

export type IGallowsTypeGame =
	| 'random'
	| 'animals'
	| 'landscapes'
	| 'food'
	| 'cities'
	| 'countries'
	| ''

export interface IShips {
	id: number
	size: number
	isHorizontal: boolean
	isUnavailable: boolean
	lives: number
	wasAttacked?: boolean
	isShip?: boolean
}

export interface ICell extends IShips {
	wasAttacked: boolean
	isUnavailable: boolean
}

export type languages = 'ru' | 'en' | 'pl' | 'ua'
