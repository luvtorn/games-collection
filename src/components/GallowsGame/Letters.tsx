const letters = [
	'а',
	'б',
	'в',
	'г',
	'д',
	'е',
	'ж',
	'з',
	'и',
	'й',
	'к',
	'л',
	'м',
	'н',
	'о',
	'п',
	'р',
	'с',
	'т',
	'у',
	'ф',
	'х',
	'ц',
	'ч',
	'ш',
	'щ',
	'ы',
	'ь',
	'э',
	'ю',
	'я',
]

const Letters = () => {
	return (
		<div className='flex flex-row flex-wrap w-[30vw] justify-center absolute bottom-1 left-1/2 -translate-x-1/2'>
			{letters.map(letter => (
				<button
					key={letter}
					className='text-3xl font-sans px-3 py-2 hover:scale-90'
				>
					{letter.toUpperCase()}
				</button>
			))}
		</div>
	)
}

export default Letters
