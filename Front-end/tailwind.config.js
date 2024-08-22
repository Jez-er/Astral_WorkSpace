/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			Mont: ['Montserrat', 'sans-serif'],
		},
		fontSize: {
			mini: '0.6rem',
			xs: '0.75rem',
			sm: '0.8rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
		},
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: '#252525',
				main: '#093A3B',
				bg: '#DAEDEA',
			},
			spacing: {
				45: '45%',
				'53%': '53%',
				'57%': '57%',
			},
			keyframes: {
				'modal-in': {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				'modal-out': {
					from: { opacity: 1 },
					to: { opacity: 0 },
				},
				'notification-in': {
					from: { marginBottom: '-50px' },
					to: { marginBottom: '40px' },
				},
				'notification-out': {
					from: { marginBottom: '40px' },
					to: { marginBottom: '-50px' },
				},
				moveRight: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(75%)' },
				},
				moveLeft: {
					'0%': { transform: 'translateX(75%)' },
					'100%': { transform: 'translateX(0)' },
				},
			},
			animation: {
				'modal-in': 'modal-in 0.2s ease-out forwards',
				'modal-out': 'modal-out 0.2s ease-out forwards',
				'notification-in': 'notification-in 0.8s ease-out forwards',
				'notification-out': 'notification-out 0.8s ease-out forwards',
				moveRight: 'moveRight 0.5s ease-in-out forwards',
				moveLeft: 'moveLeft 0.5s ease-in-out forwards',
			},
		},
	},
	plugins: [],
}
