<script lang="ts">
	export let isFlavor = false;
</script>

<div class="my-8 flex max-w-xs flex-col items-center self-center">
	<a
		href="/contact"
		class="inline-block whitespace-nowrap bg-thunder-200 py-6 px-5 text-lg font-medium leading-4 hover:bg-thunder-300 dark:bg-thunder-800 dark:hover:bg-thunder-700"
	>
		Tools for Creatives
	</a>
	{#if isFlavor}
		<p class="p-1 text-center text-sm leading-normal">
			Eliminate the grind and get back to doing what you do best.
		</p>
		<!-- <span> Grow your audience with tools that drive engagement </span> -->
	{/if}
</div>
