/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				thunder: {
					50: '#f9f6f8',
					100: '#f2ecf0',
					200: '#e3d4df',
					300: '#caafc2',
					400: '#ac84a1',
					500: '#926586',
					600: '#79506c',
					700: '#634158',
					800: '#53394b',
					900: '#34252f'
				}
			}
		}
	},
	plugins: []
};
