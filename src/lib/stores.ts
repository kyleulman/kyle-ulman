import { writable } from 'svelte/store';

export const shroud = writable(false);

export const manifest = {
	title: 'Kyle Ulman',
	pages: [
		{
			title: 'Portfolio',
			slug: '/portfolio'
		},
		{
			title: 'About',
			slug: '/about'
		},
		{
			title: 'Learn SvelteKit',
			slug: 'https://www.learnsveltekit.com',
			isNewTab: true
		}
	]
};
