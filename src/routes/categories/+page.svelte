<script>
	import Banner from '$lib/components/Banner.svelte';
	import CategoryCloud from '$lib/components/CategoryCloud.svelte';
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.siteTitle}</title>
</svelte:head>

<main id="main">
	<!-- <Banner /> -->
	<h3>Blog Categories/Tags:</h3>
	<CategoryCloud {data} />
</main>

<style>
	h3 {
		color: var(--text);
		font-family: SCSHeaders, serif;
		font-size: 300%;
		letter-spacing: 0.25rem;
		margin-inline: auto;
	}
</style>
