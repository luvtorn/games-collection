import { useState } from 'react'
import { LANGUAGES } from '../../constants/Languages'
import { AnimatePresence, motion } from 'framer-motion'
import { languages } from '../../types/types'
import { languageStore } from '../../stores/LanguageStore'
import classNames from 'classnames'

const LanguageSelector = ({ isBlack }: { isBlack?: boolean }) => {
	const [isOpen, setIsOpen] = useState(false)
	const { language, setLanguage } = languageStore

	const handleLanguageChange = (langValue: languages) => {
		setLanguage(langValue)
		setIsOpen(false)
	}

	return (
		<div className='relative inline-block'>
			<div
				onClick={() => setIsOpen(!isOpen)}
				className={classNames('flex items-center p-2  rounded cursor-pointer', {
					'bg-white border border-gray-300': !isBlack,
					'bg-gray-700 border border-gray-900': isBlack,
				})}
			>
				<img
					src={LANGUAGES.find(lang => lang.value === language)?.label}
					alt='Flag'
					className='h-5 mr-2'
				/>
				<span
					className={classNames('ml-auto mr-2 text-sm', {
						'text-white': isBlack,
						'text-black': !isBlack,
					})}
				>
					▼
				</span>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						className={classNames(
							'absolute left-0 z-10 w-full mt-1 bg-slate-400 border  rounded-lg',
							{
								'border-gray-300': !isBlack,
								'border-gray-700': isBlack,
							}
						)}
					>
						{LANGUAGES.map((lang, i) => (
							<div
								key={i}
								onClick={() => handleLanguageChange(lang.value)}
								className={`flex items-center p-2 cursor-pointer ${
									language === lang.value
										? isBlack
											? 'bg-gray-700'
											: 'bg-gray-400'
										: 'bg-gray-600'
								}`}
							>
								<img src={lang.label} alt={lang.value} className='h-5 mr-2' />
							</div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default LanguageSelector
