<script>
	import InterPostNav from '$lib/components/InterPostNav.svelte';
	import { formattedDate } from '$lib/utils.js';
	export let data;
	let thisSlug = data.slug;

	import { afterNavigate } from '$app/navigation';

	// function scrollUp() {
	// 	const el = document.getElementById('main')
	// 	if (!el) return
	// 	el.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	// }

	// afterNavigate(() => {
	// 	console.log('afterNavigate, /blog')
	// 	scrollUp()
	// })

	// afterNavigate(() => {
	// 	document.getElementsByTagName('main').scrollTop = 0
	// })

	afterNavigate((event) => {
		if (event.type === 'navigation') {
			console.log('afterNavigate, in slug');
		}
	});
</script>

<svelte:head>
	<!-- entities not allowed in title so for those titles with accents, add a headTitle property to the meta object -->
	<title>{data.meta.headTitle ? data.meta.headTitle : data.meta.title}</title>
	<meta data-key="description" name="description" content={data.meta.description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="twitter:title" content={data.meta.title} />
	<meta property="twitter:description" content={data.meta.description} />
	<!-- investigate and add more tags - open graph, ... -->
</svelte:head>

<main id="main">
	<a id="#top" aria-label="to the top">&nbsp;</a>
	<hgroup class="titleDate">
		<div class="title">{@html data.meta.title}</div>
		<p class="published">Published on {formattedDate(data.meta.date)}</p>
	</hgroup>

	<InterPostNav thisSlug={data.slug} />

	<div class="content">
		<svelte:component this={data.content} />
	</div>

	<InterPostNav thisSlug={data.slug} />

	<div class="tags">
		{#each data.meta.categories as category}
			<span class="tag">{@html category}</span>
		{/each}
	</div>
</main>

<style>
	/* main {
		padding-block-start: var(--size-fluid-3);  
	} */
	.titleDate {
		align-items: center;
		background-color: white;
		background-color: var(--brand-2);
		border: 1px solid var(--border-light);
		box-shadow: var(--box-shadow);
		display: flex;
		flex-direction: column;

		margin-block-start: var(--size-fluid-1);
		margin-block-end: var(--size-fluid-2);
		padding-bottom: var(--size-2);
	}
	.title {
		color: var(--header-text-dark);
		font-family: var(--font-humanist);
		font-family: 'PostCardTitle', serif;
		font-size: var(--font-size-fluid-3);
		font-weight: bold;
		letter-spacing: var(--font-letterspacing-3);
		/* line-height: normal; */
		text-align: center;
	}
	.published {
		/* border: 1px solid var(--border-light); */
		font-family: Alkes;
		font-size: 120%;
		font-style: italic;
		font-weight: var(--font-weight-4);
		margin-top: 0;
		padding-block: 0;
		padding-inline: 0;
		text-align: center;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin-block-start: 3rem;
		margin-block-end: 1rem;
	}
	.tag {
		background-color: var(--bg-color);
		border: 1px solid var(--border-light);
		border-radius: var(--border-radius);
		font-size: 90%;
		padding-inline: 0.5rem;
		margin-inline: 0.5rem;
		margin-block: 0.25rem;
	}
</style>
