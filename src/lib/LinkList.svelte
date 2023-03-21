<script lang="ts">
	interface Item {
		href: string;
		label?: string;
		description?: string;
		isExternal?: boolean;
		isTab?: boolean;
	}

	export let heading: string;
	export let items: Item[];
</script>

<section>
	<h2 class="mb-3 text-3xl">{heading}</h2>
	<ul class="space-y-3">
		{#each items as item}
			<li>
				<a
					href={item.href}
					rel={item.isExternal === true ? 'external noopener noreferrer nofollow' : ''}
					target={item.isTab === true ? '_blank' : ''}
					class="block border border-thunder-200 p-3 hover:bg-thunder-200 dark:border-thunder-800 dark:hover:bg-thunder-800"
				>
					{#if item.label}
						<h3 class="text-2xl">{item.label}</h3>
					{/if}
					{#if item.description}
						<p class:opacity-60={item.label}>{item.description}</p>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</section>
