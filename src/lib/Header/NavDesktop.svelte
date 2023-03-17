<script lang="ts">
	import { page } from '$app/stores';
	import { manifest } from '../stores';
	import ArrowUpRight from 'carbon-icons-svelte/lib/ArrowUpRight.svelte';
</script>

<nav class="flex gap-4 text-lg font-light">
	{#each manifest.pages as { title, slug, isNewTab }}
		{#if isNewTab}
			<a href={slug} target="_blank" class="group relative">
				<span class="flex items-center gap-1">{title}<ArrowUpRight /></span>
				<div class="passive absolute group-hover:w-full" />
			</a>
		{:else}
			<a href={slug} class="group relative">
				{title}
				<div
					class="passive absolute group-hover:w-full"
					class:active={slug === $page.url.pathname}
				/>
			</a>
		{/if}
	{/each}
</nav>

<style lang="postcss">
	.passive {
		@apply h-1 w-0 border-b-2 border-b-thunder-600 transition-all;
	}

	.active {
		@apply w-full border-b-thunder-600;
	}
</style>
