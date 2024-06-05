/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,jsx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		screens: {
			md: '768px',

			lg: '1280px',

			xl: '1440px',

			'2xl': '1920px',
		},
		extend: {
			colors: {
				cBlue: '#219BE7',
				cRedLight: '#fe3200',
				cBlack: '#010101',
				cBg: '#fff4e6',
				cWhite: '#fffcf8',
				cWheal: '#fdd9ab',
			},
		},
	},
	plugins: [],
};
