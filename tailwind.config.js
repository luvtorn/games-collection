/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'custom-pattern':
					'linear-gradient(#bbb, transparent 1px), linear-gradient(90deg, #bbb, transparent 1px)',
			},
			backgroundSize: {
				'custom-pattern-size': '20px 20px',
			},
			backgroundPosition: {
				'custom-pattern-pos': 'center center',
				myCenter: 'center center',
			},
			fontFamily: {
				sans: ['Caveat Brush', 'cursive'],
			},
		},
	},
	plugins: [],
}
