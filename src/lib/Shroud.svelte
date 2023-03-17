<script lang="ts">
	import { fade } from 'svelte/transition';
	import { shroud } from '$lib/stores';
	import { browser } from '$app/environment';

	$: {
		if (browser) {
			if ($shroud) {
				document.documentElement.classList.add('scroll-disabled');
			} else {
				document.documentElement.classList.remove('scroll-disabled');
			}
		}
	}
</script>

{#if $shroud}
	<div transition:fade={{ duration: 150 }} class="absolute inset-0 z-30 bg-thunder-900" />
{/if}
