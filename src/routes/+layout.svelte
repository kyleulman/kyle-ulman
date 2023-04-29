<script lang="ts">
	import { page } from '$app/stores';
	import { Head, Footer } from '@kyuisonline/workbench';
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

{#key $page}
	<Head page={$page.data.content.metadata} shared={data.shared} />
{/key}

<main class="my-8 flex flex-1 flex-col gap-8 px-4">
	<slot />
</main>
<Footer content={{ copyright: $page.data.content.user.name || '' }} />
