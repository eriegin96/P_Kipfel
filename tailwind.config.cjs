/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				dark: '#202e3a',
				light: '#f0e0ca',
				main: '#faa61a',
				DEFAULT: '#202e3a',
			},
		},
	},
	plugins: [],
};
