import KeyboardReact from "react-simple-keyboard";
import { keyboardOptions } from "./keyboardOptions";
import "./Keyboard.css";
import "../../animation.css";
import { wordlyStore } from "../../stores/WordlyStore";
import { observer } from "mobx-react-lite";

const Keyboard = observer(() => {
  const {
    setLetter,
    deleteLetter,
    submitWord,
    lettersWithGoodPos,
    badLetters,
    goodLetters,
  } = wordlyStore;

  const onKeyPress = (btn: string) => {
    if (btn !== "{backspace}" && btn !== "{enter}") {
      setLetter(btn);
    } else if (btn === "{backspace}") {
      deleteLetter();
    } else if (btn === "{enter}") {
      submitWord();
    }
  };

  return (
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
      <KeyboardReact
        {...keyboardOptions}
        physicalKeyboardHighlight
        physicalKeyboardHighlightPress
        onKeyPress={onKeyPress}
        buttonTheme={[
          {
            class: "bg-color-change-to-green",
            buttons: lettersWithGoodPos.split("").join(" "),
          },
          {
            class: "bg-color-change-to-yellow",
            buttons: goodLetters.split("").join(" "),
          },
          {
            class: "bg-color-change-to-gray",
            buttons: badLetters.split("").join(" "),
          },
        ]}
      />
    </div>
  );
});

export default Keyboard;
