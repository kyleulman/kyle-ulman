<script lang="ts">
	import { Header } from '$lib/Header';
	import Shroud from '$lib/Shroud.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Kyle Ulman</title>
	<meta name="description" content="My developer website and portfolio." />
</svelte:head>

<Header />
<main class="relative m-auto flex max-w-[1440px] flex-1 flex-col">
	<slot />
</main>
<footer class="my-6 text-center">&copy; {new Date().getFullYear()} Ulman Digital</footer>

<Shroud />
