export interface ILetter {
  letterTitle: string;
  isGuessed: boolean;
  isGuessedWithCorrectPosition: boolean;
  firstRender: boolean;
}

export interface IWordInDictionary {
  def: [];
}
