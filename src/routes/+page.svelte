<script>
	import * as config from '$lib/config';
	export let data;

	import { afterNavigate } from '$app/navigation';
	import Banner from '$lib/components/Banner.svelte';
	import PostsList from '$lib/components/PostsList.svelte';

	// function scrollUp() {
	// 	const el = document.getElementById('main')
	// 	if (!el) return
	// 	el.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	// }

	// afterNavigate(() => {
	// 	console.log('afterNavigate, /')
	// 	scrollUp()
	// })

	afterNavigate(() => {
		document.getElementsByTagName('main').scrollTop = 0;
	});
</script>

<svelte:head>
	<title>{config.siteTitle}</title>
	<meta data-key="description" name="description" content={config.siteDescription} />
</svelte:head>

<main>
	<Banner />

	<h3>Latest Posts:</h3>

	<PostsList {data} limit="5" />

	<h5><a href="/blog">Here are the remaining posts</a></h5>
</main>

<style>
	h3 {
		color: var(--brand-7);
		font-style: normal;
	}
	h5 {
		color: var(--brand-7);
		font-family: 'italicText', serif;
		font-size: 125%;
		letter-spacing: 0.05rem;
		margin-inline: auto;
		padding-block-start: 2rem;

		a:link,
		a:visited {
			color: inherit;
			text-decoration: underline;
		}
	}
</style>
