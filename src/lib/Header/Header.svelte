<script lang="ts">
	import CallToAction from '$lib/CallToAction.svelte';
	import { onMount } from 'svelte';
	import { manifest } from '../stores';
	import NavDesktop from './NavDesktop.svelte';
	import NavMobile from './NavMobile.svelte';

	let isMounted = false;
	let w: number;
	const breakpoint = 1024;

	onMount(() => {
		isMounted = true;
	});
</script>

<svelte:window bind:innerWidth={w} />

<header
	class="relative z-40 m-auto flex w-full max-w-[1440px] items-center justify-between gap-4 bg-thunder-100 py-9 dark:bg-thunder-900"
>
	<h1 class="text-lg">
		<a href="/">{manifest.title}</a>
	</h1>
	{#if isMounted}
		{#if w > breakpoint}
			<NavDesktop />
			<CallToAction />
		{:else}
			<NavMobile>
				<CallToAction isFlavor={true} />
			</NavMobile>
		{/if}
	{/if}
</header>
