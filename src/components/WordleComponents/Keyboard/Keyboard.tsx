import { observer } from 'mobx-react-lite'
import KeyboardReact from 'react-simple-keyboard'
import { wordlyStore } from '../../../stores/WordlyStore'
import '../../../animation.css'
import './Keyboard.css'
import { keyboardLayouts, keyboardLetters } from './keyboardOptions'
import { languageStore } from '../../../stores/LanguageStore'

const Keyboard = observer(() => {
	const {
		setLetter,
		deleteLetter,
		submitWord,
		lettersWithGoodPos,
		badLetters,
		goodLetters,
	} = wordlyStore

	const { language } = languageStore

	const onKeyPress = (btn: string) => {
		if (btn !== '{backspace}' && btn !== '{enter}') {
			setLetter(btn)
		} else if (btn === '{backspace}') {
			deleteLetter()
		} else if (btn === '{enter}') {
			submitWord()
		}
	}

	const keyboardOptions = {
		layout: {
			default: keyboardLayouts[language] || keyboardLayouts.en,
		},
		display: {
			'{enter}': '⏎',
			'{backspace}': '⌫',
			...keyboardLetters[language],
		},
		theme: 'hg-theme-default',
	}

	return (
		<div className='absolute bottom-5 w-2/4 left-1/2 -translate-x-1/2 min-w-min'>
			<KeyboardReact
				{...keyboardOptions}
				physicalKeyboardHighlight
				physicalKeyboardHighlightPress
				onKeyPress={onKeyPress}
				buttonTheme={[
					{
						class: 'bg-color-change-to-green',
						buttons: lettersWithGoodPos.split('').join(' '),
					},
					{
						class: 'bg-color-change-to-yellow',
						buttons: goodLetters.split('').join(' '),
					},
					{
						class: 'bg-color-change-to-gray',
						buttons: badLetters.split('').join(' '),
					},
				]}
			/>
		</div>
	)
})

export default Keyboard
