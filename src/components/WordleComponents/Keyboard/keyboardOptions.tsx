import 'react-simple-keyboard/build/css/index.css'

export const keyboardLetters = {
	en: {
		a: 'a',
		b: 'b',
		c: 'c',
		d: 'd',
		e: 'e',
		f: 'f',
		g: 'g',
		h: 'h',
		i: 'i',
		j: 'j',
		k: 'k',
		l: 'l',
		m: 'm',
		n: 'n',
		o: 'o',
		p: 'p',
		q: 'q',
		r: 'r',
		s: 's',
		t: 't',
		u: 'u',
		v: 'v',
		w: 'w',
		x: 'x',
		y: 'y',
		z: 'z',
	},

	ru: {
		ц: 'ц',
		у: 'у',
		к: 'к',
		е: 'е',
		н: 'н',
		г: 'г',
		ш: 'ш',
		щ: 'щ',
		з: 'з',
		х: 'х',
		ъ: 'ъ',
		ф: 'ф',
		ы: 'ы',
		в: 'в',
		а: 'а',
		п: 'п',
		р: 'р',
		о: 'о',
		л: 'л',
		д: 'д',
		ж: 'ж',
		э: 'э',
		я: 'я',
		ч: 'ч',
		с: 'с',
		м: 'м',
		и: 'и',
		т: 'т',
		ь: 'ь',
		б: 'б',
		ю: 'ю',
	},

	pl: {
		a: 'a',
		ą: 'ą',
		b: 'b',
		c: 'c',
		ć: 'ć',
		d: 'd',
		e: 'e',
		ę: 'ę',
		f: 'f',
		g: 'g',
		h: 'h',
		i: 'i',
		j: 'j',
		k: 'k',
		l: 'l',
		ł: 'ł',
		m: 'm',
		n: 'n',
		ń: 'ń',
		o: 'o',
		ó: 'ó',
		p: 'p',
		q: 'q',
		r: 'r',
		s: 's',
		ś: 'ś',
		t: 't',
		u: 'u',
		v: 'v',
		w: 'w',
		x: 'x',
		y: 'y',
		z: 'z',
		ź: 'ź',
		ż: 'ż',
	},
	ua: {
		а: 'а',
		б: 'б',
		в: 'в',
		г: 'г',
		ґ: 'ґ',
		д: 'д',
		е: 'е',
		є: 'є',
		ж: 'ж',
		з: 'з',
		и: 'и',
		і: 'і',
		ї: 'ї',
		й: 'й',
		к: 'к',
		л: 'л',
		м: 'м',
		н: 'н',
		о: 'о',
		п: 'п',
		р: 'р',
		с: 'с',
		т: 'т',
		у: 'у',
		ф: 'ф',
		х: 'х',
		ц: 'ц',
		ч: 'ч',
		ш: 'ш',
		щ: 'щ',
		ь: 'ь',
		ю: 'ю',
		я: 'я',
	},
}

export const keyboardLayouts = {
	en: [
		'q w e r t y u i o p',
		'a s d f g h j k l {enter}',
		'z x c v b n m {backspace}',
	],
	ru: [
		'й ц у к е н г ш щ з х ъ {backspace}',
		'ф ы в а п р о л д ж э {enter}',
		'я ч с м и т ь б ю',
	],
	pl: [
		'q w e r t y u i o p {backspace}',
		'a s d f g h j k l {enter}',
		'z x c v b n m ą',
		'ć ę ł ń ó ś ź ż',
	],
	ua: [
		'й ц у к е н г ш щ з х ї {backspace}',
		'ф і в а п р о л д ж є {enter}',
		'я ч с м и т ь б ю ґ',
	],
}
