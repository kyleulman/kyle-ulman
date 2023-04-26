<script lang="ts">
	import { page } from '$app/stores';
	import { Head } from '@kyleulman/workbench';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

{#key $page}
	<Head page={$page.data.content.metadata} shared={data.shared} />
{/key}

<main class="my-8 flex flex-col gap-8 px-4">
	<slot />
</main>
