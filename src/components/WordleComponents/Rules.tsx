import React from 'react'
import InputSquare from './InputSquare/InputSquare'
import RulesLetter from './RulesLetter'
import ReactConfetti from 'react-confetti'
import { IoCloseOutline } from 'react-icons/io5'
import { confettiStore } from '../../stores/ConfettiStore'
import { languageStore } from '../../stores/LanguageStore'
import { LANGUAGES_DICTIONARY } from '../../constants/Languages'
import { observer } from 'mobx-react-lite'

interface Props {
	setIsRulesOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Rules: React.FC<Props> = observer(({ setIsRulesOpen }): JSX.Element => {
	const { isConfetti, setIsConfetti } = confettiStore
	const { language } = languageStore

	return (
		<div
			className='w-screen h-screen bg-black bg-opacity-50 absolute z-50 overflow-x-hidden overflow-y-auto'
			onClick={() => setIsRulesOpen(false)}
		>
			<div
				className='w-[80vw] lg:w-1/2 bg-white rounded-xl mx-auto mt-7'
				onClick={e => e.stopPropagation()}
			>
				{isConfetti && <ReactConfetti />}
				<div className='bg-blue-200 relative rounded-xl flex items-center justify-center py-1.5 w-full'>
					<h1 className='text-center text-2xl font-bold '>
						{LANGUAGES_DICTIONARY[language][0].rules}
					</h1>
					<IoCloseOutline
						size={30}
						className='absolute right-3 cursor-pointer'
						onClick={() => setIsRulesOpen(false)}
					/>
				</div>

				<div className='p-2'>
					<p className='text-center'>
						{LANGUAGES_DICTIONARY[language][0].wordleRules[0]}
					</p>

					<p className='text-center mt-2'>
						{LANGUAGES_DICTIONARY[language][0].wordleRules[1]}
					</p>

					<div className='flex gap-1 items-center justify-center mt-4'>
						<InputSquare
							letter={{ letterTitle: 't', isGuessedWithCorrectPosition: true }}
						/>
						<InputSquare letter={{ letterTitle: 'a', isGuessed: true }} />
						<InputSquare letter={{ letterTitle: 'm', isGuessed: true }} />
						<InputSquare letter={{ letterTitle: 'p', isGuessed: true }} />
						<InputSquare letter={{ letterTitle: 's' }} />
					</div>

					<div className='bg-gray-300 w-3/4 mt-3 mx-auto text-start rounded-2xl p-3'>
						<p className='flex items-center gap-2'>
							<RulesLetter letter={'s'} color='grey' />{' '}
							{LANGUAGES_DICTIONARY[language][0].wordleRules[2]}
						</p>
						<p className='flex items-center gap-1 mt-1.5'>
							<RulesLetter letter={'a'} color='yellow' />
							<RulesLetter letter={'m'} color='yellow' />
							<RulesLetter letter={'p'} color='yellow' />
							{LANGUAGES_DICTIONARY[language][0].wordleRules[3]}
						</p>
						<p className='flex items-center gap-2 mt-1.5'>
							<RulesLetter letter='t' color='green' />
							{LANGUAGES_DICTIONARY[language][0].wordleRules[4]}
						</p>
					</div>

					<p className='text-center mt-3'>
						{LANGUAGES_DICTIONARY[language][0].wordleRules[5]}
					</p>

					<div className='flex gap-1 items-center justify-center mt-4'>
						<InputSquare
							letter={{ letterTitle: 't', isGuessedWithCorrectPosition: true }}
						/>
						<InputSquare
							letter={{ letterTitle: 'r', isGuessedWithCorrectPosition: true }}
						/>
						<InputSquare
							letter={{ letterTitle: 'a', isGuessedWithCorrectPosition: true }}
						/>
						<InputSquare letter={{ letterTitle: 'i' }} />
						<InputSquare letter={{ letterTitle: 'n' }} />
					</div>

					<p className='text-center mt-3'>
						{' '}
						{LANGUAGES_DICTIONARY[language][0].wordleRules[6]}
					</p>

					<div className='flex gap-1 items-center justify-center mt-4'>
						<InputSquare
							letter={{ letterTitle: 't', isGuessedWithCorrectPosition: true }}
						/>
						<InputSquare
							letter={{ letterTitle: 'r', isGuessedWithCorrectPosition: true }}
						/>
						<InputSquare
							letter={{ letterTitle: 'a', isGuessedWithCorrectPosition: true }}
						/>
						<InputSquare
							letter={{ letterTitle: 'm', isGuessedWithCorrectPosition: true }}
						/>
						<InputSquare
							letter={{ letterTitle: 'p', isGuessedWithCorrectPosition: true }}
						/>
					</div>

					<p
						className='text-center mt-5 mb-2 font-bold text-xl'
						onClick={() => setIsConfetti()}
					>
						{LANGUAGES_DICTIONARY[language][0].wordleRules[7]}
						<span className='italic'>
							{' '}
							{LANGUAGES_DICTIONARY[language][0].wordleRules[8]}
						</span>
					</p>
				</div>
			</div>
		</div>
	)
})

export default Rules
