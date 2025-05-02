<script>
	import * as config from '$lib/config';
	export let data;

	// import { afterNavigate } from '$app/navigation';
	import Banner from '$lib/components/Banner.svelte';
	import PostsList from '$lib/components/PostsList.svelte';
</script>

<svelte:head>
	<title>{config.siteTitle}</title>
	<meta data-key="description" name="description" content={config.siteDescription} />
</svelte:head>

<main>
	<Banner />
	<h3>All Posts:</h3>
	<PostsList {data} />
</main>

<style>
	h3 {
		/* color: var(--brand-7); */
		font-family: SCSHeaders, serif;
		font-size: 300%;
		letter-spacing: 0.25rem;
		/* border: 1px solid var(--border-light); */
		margin-inline: auto;
		text-shadow: 0.05rem 0.05rem 0.05rem black;
	}
</style>
