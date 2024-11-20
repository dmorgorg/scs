<script>
	import * as config from '$lib/config'
	export let data

	import { afterNavigate } from '$app/navigation'
	import Banner from '$lib/components/Banner.svelte'
	import PostsList from '$lib/components/PostsList.svelte'

	function scrollIntoView() {
		const el = document.getElementById('main')
		if (!el) return
		el.scrollIntoView({
			behavior: 'smooth'
		})
	}

	afterNavigate(() => {
		scrollTo(0)
	})
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
		/* display: flex;
		justify-content: center; */
		font-family: Alkes;
		font-style: italic;
		/* text-align: center; */

		width: 100%;
	}
	h5 {
		color: var(--brand-7);
		font-size: 125%;
		margin-inline: auto;
		padding-block-start: 2rem;

		a:link,
		a:visited {
			color: inherit;
			text-decoration: underline;
		}
	}
</style>
