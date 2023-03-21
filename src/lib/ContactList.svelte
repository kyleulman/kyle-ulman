<script lang="ts">
	export let heading: string;
	export let items: Item[];
</script>

<section>
	<h2 class="mb-3 flex items-center gap-2 text-3xl">
		<div class="h-3 w-3 rounded-full bg-green-500" />
		{heading}
	</h2>
	<article class="bg-thunder-800 p-6 text-thunder-100 shadow-md">
		<ul class="space-y-3">
			{#each items as item}
				<li class="flex flex-col justify-between mobile-l:flex-row">
					<span class="opacity-60">{item.description}</span>
					<a
						href={item.href}
						rel={item.isExternal === true ? 'external noopener noreferrer nofollow' : ''}
						target={item.isTab === true ? '_blank' : ''}
						class="font-medium underline">{item.label}</a
					>
				</li>
			{/each}
		</ul>
	</article>
</section>
