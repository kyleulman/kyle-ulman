<script lang="ts">
	import LinkList from '$lib/LinkList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<header class="flex flex-col items-center justify-between gap-3 mobile-l:flex-row">
	<h1 class="text-4xl">{data.content.user?.name}</h1>
	<a
		href={data.content.user?.blog + '/on-upwork'}
		target="_blank"
		rel="noopener noreferrer nofollow"
		class="whitespace-nowrap bg-thunder-800 p-3 text-thunder-100 hover:bg-thunder-700"
	>
		Let's work together
	</a>
</header>
<section class="flex flex-col items-center gap-3 text-center mobile-l:flex-row mobile-l:text-left">
	<figure class="w-36 flex-shrink-0 overflow-hidden rounded-full p-0">
		<img
			src={data.content.user?.avatar_url}
			alt="Head shot."
			width={144}
			height={144}
			class="bg-thunder-800"
		/>
	</figure>
	<article>
		<p>
			{data.content.user?.bio}
		</p>
	</article>
</section>

{#if data.content.repos}
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
