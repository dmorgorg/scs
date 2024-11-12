<script>
	import * as config from '$lib/config';
	export let data;

	import { afterNavigate } from '$app/navigation';
	import Banner from '$lib/components/Banner.svelte';
	import PostsList from '$lib/components/PostsList.svelte';

	function scrollIntoView() {
		const el = document.getElementById('main');
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}

	afterNavigate(() => {
		scrollTo(0);
	});
</script>

<svelte:head>
	<title>{config.siteTitle}</title>
	<meta data-key="description" name="description" content={config.siteDescription} />
</svelte:head>

<main>
	<Banner />

	<h3>Recent Posts:</h3>

	<PostsList {data} />
</main>

<style>
	h3 {
		color: var(--brand-7);
		display: inline-block;
		font-family: Alkes;
		font-style: italic;
		/* margin-block-end: 1.5rem; */
	}
</style>
