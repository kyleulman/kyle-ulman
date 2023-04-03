<script lang="ts">
	export let content: { [index: string]: any }[];
</script>

<section>
	<h2 class="mb-3 text-3xl">Projects</h2>
	<ul class="space-y-3">
		{#each content as r}
			<li>
				<a
					href={r.homepage || r.html_url}
					class="flex justify-between gap-2 border border-thunder-200 p-3 hover:bg-thunder-200 dark:border-thunder-800 dark:hover:bg-thunder-800"
				>
					<div>
						<h3 class="text-2xl">{r.name}</h3>
						<p class:opacity-60={r.name}>{r.description}</p>
					</div>
					<figure class="self-start rounded-full bg-thunder-800 p-1 dark:bg-transparent">
						{#if r.homepage}
							<img src="/website.svg" alt="To website." width="20" height="20" class="h-5 w-5" />
						{:else}
							<img
								src="/github-mark-white.svg"
								alt="GitHub logo."
								width="20"
								height="20"
								class="h-5 w-5"
							/>
						{/if}
					</figure>
				</a>
			</li>
		{/each}
	</ul>
</section>
