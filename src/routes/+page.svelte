<script lang="ts">
	import { Bio, IconList } from '@kyuisonline/workbench';
	import type {
		IconList as IconListType,
		Bio as BioType
	} from '@kyuisonline/workbench/dist/types';
	import type { PageData } from './$types';

	export let data: PageData;

	const name = data.content.user?.name;

	const bio: BioType = {
		image: {
			src: data.content.user?.avatar_url || '',
			alt: 'Avatar',
			width: 144,
			height: 144
		},
		detail: data.content.user?.bio || '',
		actions: [
			{
				href: '/on-upwork',
				label: "Let's work together",
				as: 'button'
			}
		]
	};

	const projectsList =
		data.content.repos?.map((prop) => {
			return {
				href: prop.html_url,
				heading: prop.name,
				detail: prop.description || '',
				image: {
					src: '/images/github.svg',
					alt: 'GitHub logo',
					width: 24,
					height: 24
				},
				isReversed: true,
				isItemsCenter: false
			};
		}) || [];

	const projects: IconListType = {
		heading: 'Projects',
		list: projectsList
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
				href: 'https://github.com/kyuisonline?tab=repositories&q=&type=public',
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
				href: 'https://www.twitter.com/kyuisonline',
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
				href: 'mailto:hello@kyu.is',
				heading: `Send a message`,
				detail: `hello@kyu.is`,
				icon: {
					name: 'mail',
					size: '36px'
				},
				isReversed: false,
				isItemsCenter: true
			}
		]
	};
</script>

<h1 class="text-center sm:text-left">{name}</h1>
<Bio content={bio} />
<IconList content={projects} />
<IconList content={externals} />
