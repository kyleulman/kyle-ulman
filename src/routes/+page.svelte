<script lang="ts">
	import ContactList from '$lib/ContactList.svelte';
	import LinkList from '$lib/LinkList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<header class="flex flex-col items-center justify-between gap-3 mobile-l:flex-row">
	<h1 class="text-4xl">Kyle Ulman</h1>
	<a
		href="https://www.upwork.com/freelancers/~0112b43845ad4099da"
		target="_blank"
		rel="noopener noreferrer nofollow"
		class="whitespace-nowrap bg-thunder-800 p-3 text-thunder-100 hover:bg-thunder-700"
	>
		Let's work together
	</a>
</header>
<section class="flex flex-col items-center gap-3 text-center mobile-l:flex-row mobile-l:text-left">
	<figure class="w-36 flex-shrink-0 overflow-hidden rounded-full p-0">
		<img
			src="https://res.cloudinary.com/ulman-digital/image/upload/v1659685767/ulman-digital/kyle-448.jpg"
			alt="Headshot"
			width={144}
			height={144}
			class="bg-thunder-800"
		/>
	</figure>
	<article>
		<p>
			Hiya! I'm a web developer from Wilmington, NC. I've built custom websites for small businesses
			and worked with <a
				href="https://www.upwork.com/freelancers/~0112b43845ad4099da"
				target="_blank"
				rel="noopener noreferrer nofollow"
				class="underline">teams on Upwork</a
			> to bring their ideas to life.
		</p>
	</article>
</section>
<LinkList heading="Client Work" items={data.content.clients} />
<section class="bg-thunder-800 p-6 text-thunder-100 shadow-md">
	<!-- TODO: Add notify me CTA? -->
	<p>
		I also enjoy building tools and apps that solve problems. I'm currently building a complete
		SvelteKit starter template and CLI that adds Tailwind, PWA support, and metadata scaffolding to
		the <code
			><a
				href="https://github.com/sveltejs/kit/tree/master/packages/create-svelte"
				rel="noopener noreferrer nofollow"
				class="underline">create-svelte</a
			></code
		>
		script.
	</p>
</section>
<LinkList heading="Projects" items={data.content.projects} />
<ContactList heading="I'm online!" items={data.content.contacts} />
