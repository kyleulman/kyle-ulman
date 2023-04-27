<script lang="ts">
	import type { PageData } from './$types';
	import { Bio, IconList, Footer } from '@kyleulman/workbench';
	import type { IconList as IconListType } from '@kyleulman/workbench/dist/types';

	export let data: PageData;

	const name = data.content.user?.name;

	const bio = {
		image: {
			src: data.content.user?.avatar_url || '',
			alt: 'Avatar',
			width: 144,
			height: 144
		},
		detail: data.content.user?.bio || ''
	};

	// TODO: Fix this type
	const projects: any = {
		heading: 'Projects',
		list: data.content.repos?.map((prop) => {
			return {
				href: prop.homepage || prop.html_url,
				heading: prop.name,
				detail: prop.description,
				icon: prop.homepage
					? {
							name: 'language',
							size: '24px'
					  }
					: undefined,
				image: prop.homepage
					? undefined
					: {
							src: '/images/github.svg',
							alt: 'GitHub logo',
							width: 24,
							height: 24
					  },
				isReversed: true,
				isItemsCenter: false
			};
		})
	};

	const externals: IconListType = {
		heading: `<div class="flex items-center gap-2"><div class="w-2 h-2 bg-green-500 rounded-full"></div>I'm online</div>`,
		list: [
			{
				href: 'https://www.learnsveltekit.com',
				heading: `Learn SvelteKit`,
				detail: `I write about what's possible with SvelteKit`,
				image: {
					src: '/images/learn-sveltekit.svg',
					alt: 'Learn SvelteKit icon',
					width: 36,
					height: 36
				},
				isReversed: false,
				isItemsCenter: true
			},
			{
				href: '/on-upwork',
				heading: `Let's work together`,
				detail: 'Web development services on Upwork',
				image: {
					src: '/images/upwork.svg',
					alt: 'UpWork icon',
					width: 36,
					height: 36
				},
				isReversed: false,
				isItemsCenter: true
			},
			{
				href: 'https://github.com/kyleulman?tab=repositories',
				heading: `GitHub`,
				image: {
					src: '/images/github.svg',
					alt: 'UpWork icon',
					width: 36,
					height: 36
				},
				isReversed: false,
				isItemsCenter: true
			},
			{
				href: 'https://www.twitter.com/kyleulman',
				heading: `Twitter`,
				image: {
					src: '/images/twitter.svg',
					alt: 'Twitter icon',
					width: 36,
					height: 36
				},
				isReversed: false,
				isItemsCenter: true
			},
			{
				href: 'mailto:hello@kyleulman.com',
				heading: `Send a message`,
				detail: `hello@kyleulman.com`,
				icon: {
					name: 'mail',
					size: '36px'
				},
				isReversed: false,
				isItemsCenter: true
			}
		]
	};

	const footer = {
		copyright: data.content.user?.name || ''
	};
</script>

<h1 class="text-center sm:text-left">{name}</h1>
<Bio content={bio} />
<IconList content={projects} />
<IconList content={externals} />
<Footer content={footer} />
