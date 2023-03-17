<script lang="ts">
	import { manifest } from '../stores';
	import MenuIcon from 'carbon-icons-svelte/lib/Menu.svelte';
	import CloseIcon from 'carbon-icons-svelte/lib/Close.svelte';
	import ArrowUpRight from 'carbon-icons-svelte/lib/ArrowUpRight.svelte';

	import { slide } from 'svelte/transition';
	import { shroud } from '../stores';

	let showMenu = false;
</script>

<div class="flex gap-2">
	<button
		class="flex h-9 w-9 items-center justify-center rounded-full border-0"
		on:click={() => {
			showMenu = !showMenu;
			$shroud = !$shroud;
		}}
	>
		{#if showMenu}
			<CloseIcon size={20} />
		{:else}
			<MenuIcon size={20} />
		{/if}
	</button>
</div>
{#if showMenu}
	<nav
		transition:slide
		class="absolute top-full left-0 right-0 flex h-[90vh] flex-col overflow-y-auto bg-thunder-900 pb-32"
	>
		{#each manifest.pages as { title, slug, isNewTab }}
			{#if isNewTab}
				<a
					href={slug}
					class="flex items-center gap-1 border-t border-solid border-thunder-100/20 px-7 py-16 first-of-type:border-t-0 hover:bg-thunder-800"
					target="_blank"
				>
					{title}<ArrowUpRight />
				</a>
			{:else}
				<a
					href={slug}
					class="border-t border-solid border-thunder-100/20 px-7 py-16 first-of-type:border-t-0 hover:bg-thunder-800"
				>
					{title}
				</a>
			{/if}
		{/each}
		<slot />
	</nav>
{/if}
