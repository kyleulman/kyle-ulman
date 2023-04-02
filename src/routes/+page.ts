import type { PageMetadata } from '@kyleulman/lib';
import { content } from '../content';
import type { PageLoad } from './$types';

export const prerender = true;

export const load = (({ url }) => {
	const page: PageMetadata = {
		title: "Let's work together",
		description: 'Learn more about tools to grow your business.',
		url: url.href
	};

	return {
		page: page,
		content: content.home
	};
}) satisfies PageLoad;
