<script>
	import * as config from '$lib/config';
	export let data;

	import { afterNavigate } from '$app/navigation';
	import Banner from '$lib/components/Banner.svelte';
	import PostsList from '$lib/components/PostsList.svelte';
</script>

<svelte:head>
	<title>{config.siteTitle}</title>
	<meta data-key="description" name="description" content={config.siteDescription} />
</svelte:head>

<main class="latest">
	<Banner />
	<h3>Latest Posts:</h3>
	<PostsList {data} limit="6" />
	<h5><a href="/blog">All posts...</a></h5>
</main>

<style>
	h3 {
		/* color: var(--brand-7); */
		font-family: SCSHeaders, serif;
		font-family: PostCardTitle, serif;
		font-size: 250%;
		font-style: italic;
		font-weight: bold;
		letter-spacing: 0.25rem;
		margin-inline: auto;
		text-shadow: 0.05rem 0.05rem 0.05rem black;
	}
	h5 {
		/* color: var(--brand-7); */
		color: black;
		font-family: 'italicText', serif;
		/* font-size: 125%; */
		font-size: 90%;
		font-weight: normal;
		letter-spacing: 0.05rem;
		margin-inline: auto;
		padding-block-start: 2rem;

		a:link,
		a:visited {
			color: inherit;
			color: var(--brand-7);
			text-decoration: underline;
		}
	}
</style>
