export interface ILetter {
	letterTitle: string
	isGuessed: boolean
	isGuessedWithCorrectPosition: boolean
	firstRender: boolean
}

export interface IWordInDictionary {
	def: []
}

export interface IGallowsType {
	type: IGallowsTypeGame
	value: string
}

export type IGallowsTypeGame =
	| 'random'
	| 'animals'
	| 'landscapes'
	| 'food'
	| 'cities'
	| 'countries'
	| ''
