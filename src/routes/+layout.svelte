<script lang="ts">
	import { page } from '$app/stores';
	import { Head } from '@kyleulman/lib';
	import '../app.css';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Head page={$page.data.page} site={data.site} />

<main class="my-12 flex-1 space-y-12">
	<slot />
</main>
<footer class="my-6 text-center">&copy; {new Date().getFullYear()} Ulman Digital</footer>
