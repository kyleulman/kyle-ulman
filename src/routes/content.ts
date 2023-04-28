import type { PageMetadata, SharedMetadata } from '@kyuisonline/workbench';

export const sharedMetadata: SharedMetadata = {
	title: 'Kyu is Online',
	type: 'website',
	robots: 'all',
	image: {
		src: 'https://kyu.is/images/card-1440x720.png',
		alt: 'Website banner.',
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
