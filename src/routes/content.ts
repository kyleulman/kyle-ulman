import type { PageMetadata, SharedMetadata } from '@kyleulman/workbench';

export const sharedMetadata: SharedMetadata = {
	title: 'Kyle Ulman',
	type: 'website',
	robots: 'all',
	image: {
		src: 'https://kyleulman.com/images/icon.png',
		alt: 'Website banner.',
		width: '720',
		height: '720'
	},
	twitter: {
		card: 'summary',
		site: 'kyleulman',
		creator: 'kyleulman'
	}
};

export const home: { metadata: PageMetadata } = {
  metadata: {
    title: "Let's work together",
		description: 'Learn more about tools to grow your business.',
		url: ""
  }
}