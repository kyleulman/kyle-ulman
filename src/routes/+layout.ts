import type { SiteMetadata } from '@kyleulman/lib';
import type { LayoutLoad } from './$types';

export const load = (({ url }) => {
	const site: SiteMetadata = {
		title: 'Kyle Ulman',
		type: 'website',
		robots: 'all',
		imageSrc: url.origin + '/icon.png',
		imageAlt: 'Website image.',
		twitterCard: 'summary',
		twitterSite: 'kyleulman',
		twitterCreator: 'kyleulman'
	};

	return {
		site: site
	};
}) satisfies LayoutLoad;
