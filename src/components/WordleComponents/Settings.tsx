import { IoCloseOutline } from 'react-icons/io5'
import { LANGUAGES_DICTIONARY } from '../../constants/Languages'
import { languageStore } from '../../stores/LanguageStore'
import LanguageSelector from '../LanguagesSelector/LanguagesSelector'
import { wordlyStore } from '../../stores/WordlyStore'
import { observer } from 'mobx-react-lite'

interface Props {
	setIsSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Settings: React.FC<Props> = observer(
	({ setIsSettingsOpen }): JSX.Element => {
		const { language } = languageStore
		const { setLettersCount } = wordlyStore

		return (
			<div
				className='w-screen h-screen bg-black bg-opacity-50 absolute z-50 overflow-x-hidden overflow-y-auto'
				onClick={() => setIsSettingsOpen(false)}
			>
				<div
					className='w-[80%] md:w-1/2 lg:w-1/3 bg-white rounded-xl mx-auto mt-7'
					onClick={e => e.stopPropagation()}
				>
					<div className='bg-blue-200 relative rounded-xl flex items-center justify-center py-1.5 w-full'>
						<h1 className='text-center text-2xl font-bold '>
							{LANGUAGES_DICTIONARY[language][0].settings}
						</h1>
						<IoCloseOutline
							size={30}
							className='absolute right-3 cursor-pointer'
							onClick={() => setIsSettingsOpen(false)}
						/>
					</div>

					<div className='flex items-center justify-between px-6 py-2 '>
						<label htmlFor='letters_count'>
							{LANGUAGES_DICTIONARY[language][0].letters_count}
						</label>
						<select
							name='letters_count'
							defaultValue={wordlyStore.lettersCount}
							id='letters_count'
							className='block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
							onChange={e => {
								setLettersCount(Number(e.target.value))
							}}
						>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
						</select>
					</div>
					<div className='flex items-center justify-between px-6 py-2'>
						<p>{LANGUAGES_DICTIONARY[language][0].language}</p>
						<LanguageSelector />
					</div>
				</div>
			</div>
		)
	}
)

export default Settings
