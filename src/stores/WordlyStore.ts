import { makeAutoObservable, runInAction } from "mobx";
import { ILetter, IWordInDictionary } from "../types/types";
import { randomWords } from "./words";

const dictionaryUrl =
  "https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20240730T154543Z.4fff47eff1d3cfca.20fcf0e8405f86dfa878e04a702521164ed1210d&lang=ru-ru&text=";

class WordlyStore {
  letterObj: ILetter = {
    letterTitle: "",
    isGuessed: false,
    isGuessedWithCorrectPosition: false,
    firstRender: true,
  };

  badLetters = "";
  goodLetters = "";
  lettersWithGoodPos = "";

  lettersArr: ILetter[] = Array.from({ length: 25 }, () => ({
    ...this.letterObj,
  }));
  currentWordIndex: number = 0;

  startWord = randomWords[Math.floor(Math.random() * randomWords.length)];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setLetter(letter: string) {
    runInAction(() => {
      const startArr = this.currentWordIndex * 5;
      const endArr = startArr + 5;
      const currentWord = this.lettersArr.slice(startArr, endArr);

      const index = currentWord.findIndex((i) => i.letterTitle === "");
      if (index !== -1) {
        this.lettersArr[startArr + index].letterTitle = letter;
      }
    });
  }

  async submitWord() {
    const startArr = this.currentWordIndex * 5;
    const endArr = startArr + 5;
    const currentWord = this.lettersArr.slice(startArr, endArr);

    if (currentWord.filter((l) => l.letterTitle !== "").length === 5) {
      const word = currentWord.map((l) => l.letterTitle).join("");

      const res = await fetch(dictionaryUrl + word);
      const wordInDictionary: IWordInDictionary = await res.json();

      if (wordInDictionary.def.length !== 0) {
        runInAction(() => {
          currentWord.forEach((lett, index) => {
            if (this.startWord.includes(lett.letterTitle)) {
              lett.isGuessed = true;
              this.goodLetters += lett.letterTitle;
            }

            if (this.startWord[index] === lett.letterTitle) {
              lett.isGuessedWithCorrectPosition = true;
              this.lettersWithGoodPos += lett.letterTitle;
            }

            if (
              this.startWord[index] !== lett.letterTitle &&
              !this.startWord.includes(lett.letterTitle)
            ) {
              this.badLetters += lett.letterTitle;
            }
            lett.firstRender = false;
          });

          if (this.currentWordIndex === 4 && word !== this.startWord) {
            alert(`You lose, start word was: ${this.startWord}`);
            this.resetGame();
          }

          this.win(word);
          this.currentWordIndex += 1;
        });
      } else {
        alert("You need to write a correct word");
      }
    } else {
      alert("You must write 5 letters");
    }
  }

  resetGame() {
    runInAction(() => {
      this.lettersArr = Array.from({ length: 25 }, () => ({
        letterTitle: "",
        isGuessed: false,
        isGuessedWithCorrectPosition: false,
        firstRender: true,
      }));
      this.currentWordIndex = 0;
      this.badLetters = "";
      this.goodLetters = "";
      this.lettersWithGoodPos = "";
      this.startWord =
        randomWords[Math.floor(Math.random() * randomWords.length)];
    });
  }

  win(word: string) {
    if (word === this.startWord) {
      setTimeout(() => {
        alert("You win");
        this.resetGame();
      }, 1000);
    }
  }

  deleteLetter() {
    runInAction(() => {
      const startArr = this.currentWordIndex * 5;
      const endArr = startArr + 5;
      const currentWord = this.lettersArr.slice(startArr, endArr);

      const index = currentWord.findIndex((l) => l.letterTitle === "");

      if (index === -1) {
        this.lettersArr[endArr - 1].letterTitle = "";
      } else if (index > 0) {
        this.lettersArr[startArr + index - 1].letterTitle = "";
      }
    });
  }
}

export const wordlyStore = new WordlyStore();
