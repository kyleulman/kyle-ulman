<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<title>Kyle Ulman</title>
	<meta name="description" content="My developer website and portfolio." />
</svelte:head>

<main class="flex-1">
	<slot />
</main>
<footer class="my-6 text-center">&copy; {new Date().getFullYear()} Ulman Digital</footer>
