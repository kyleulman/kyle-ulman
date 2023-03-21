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
			},
			screens: {
				'mobile-s': '320px',
				'mobile-m': '375px',
				'mobile-l': '425px',
				tablet: '768px',
				laptop: '1024px',
				'laptop-l': '1440px',
				'4k': '2560px'
			}
		}
	},
	plugins: []
};
