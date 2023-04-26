<script lang="ts">
	import type { PageData } from './$types';
	import { Header, Card, InfoList } from '@kyleulman/workbench';

	export let data: PageData;

	const reposList = data.content.repos?.map((prop) => {
		return {
			image: {
				src: prop.homepage ? "/website.svg" : "/github-mark-white.svg"
			},
			heading: prop.name,
			detail: `<a href=${prop.homepage || prop.html_url}>${prop.description}</a>`
		}
	})
</script>

<Header
	content={{
		title: {
			href: '/',
			logo: { src: data.content.user?.avatar_url || '', alt: '' },
			label: data.content.user?.name || ''
		},
		contact: [
			{
				icon: 'work',
				href: `${data.content.user?.blog}/on-upwork` || '',
				label: "Let's work together"
			}
		]
	}}
/>

<Card content={{ detail: data.content.user?.bio || '' }} />

<!-- <InfoList content={{list: reposList}} /> -->

<!--
	if data.content.repos}
	<LinkList content={data.content.repos} />
{/if}

<section>
	<h2 class="mb-3 flex items-center gap-2 text-3xl">
		<div class="h-3 w-3 rounded-full bg-green-500" />
		I'm Online
	</h2>
	<article class="bg-thunder-800 p-6 text-thunder-100 shadow-md">
		<ul class="space-y-3">
			{#if data.content.user?.blog}
				<li class="flex flex-col justify-between mobile-l:flex-row">
					<span class="opacity-60">Upwork</span>
					<a href={data.content.user?.blog + '/on-upwork'} class="font-medium underline">
						/on-upwork
					</a>
				</li>
			{/if}
			{#if data.content.user?.html_url}
				{@const url = data.content.user?.html_url}
				<li class="flex flex-col justify-between mobile-l:flex-row">
					<span class="opacity-60">GitHub</span>
					<a href={url} class="font-medium underline">
						{url.slice(url.indexOf('k') - 1)}
					</a>
				</li>
			{/if}
			{#if data.content.user?.twitter_username}
				<li class="flex flex-col justify-between mobile-l:flex-row">
					<span class="opacity-60">Twitter</span>
					<a
						href={'https://www.twitter.com/' + data.content.user?.twitter_username}
						class="font-medium underline"
					>
						/{data.content.user?.twitter_username}
					</a>
				</li>
			{/if}
			{#if data.content.user?.email}
				<li class="flex flex-col justify-between mobile-l:flex-row">
					<span class="opacity-60">Email</span>
					<a href={'mailto:' + data.content.user?.email} class="font-medium underline">
						{data.content.user?.email}
					</a>
				</li>
			{/if}
		</ul>
	</article>
</section>
-->
