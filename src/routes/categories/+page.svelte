<script>
	import Banner from '$lib/components/Banner.svelte';
	import * as config from '$lib/config';
	import PostsList from '../../lib/components/PostsList.svelte';
	export let data;
</script>

<svelte:head>
	<title>{config.siteTitle}</title>
</svelte:head>

<main id="main">
	<Banner />
	<h3>Blog Categories:</h3>

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
