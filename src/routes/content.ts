import type { PageMetadata, SharedMetadata } from '@kyuisonline/workbench';

export const sharedMetadata: SharedMetadata = {
	title: 'Kyu is Online',
	type: 'website',
	robots: 'all',
	image: {
		src: 'https://res.cloudinary.com/kyuisonline/image/upload/v1682725013/kyuisonline/card-720-png.png',
		alt: 'Kyu is Online logo.',
		width: '720',
		height: '720'
	},
	twitter: {
		card: 'summary',
		site: 'kyuisonline',
		creator: 'kyuisonline'
	}
};

export const home: { metadata: PageMetadata } = {
	metadata: {
		title: "Let's work together",
		description:
			'Heya! I utilize SvelteKit to help teams on Upwork bring their ideas to life.',
		url: ''
	}
};
