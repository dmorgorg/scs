<script>
	import InterPostNav from '$lib/components/InterPostNav.svelte';
	import { formattedDate } from '$lib/utils.js';
	export let data;
	let thisSlug = data.slug;
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
		<p class="published">Published on and on {formattedDate(data.meta.date)}</p>
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

<style lang="scss">
	main {
		// border: 1px solid black;
		margin-top: -2rem;
		padding-top: 0;
	}
	.titleDate {
		align-items: center;
		background-color: var(--bg-card);
		border: 1px solid var(--border-light);
		box-shadow: var(--box-shadow-hover);
		display: flex;
		flex-direction: column;

		margin-block-start: 0;
		margin-block-end: 1rem;
		padding-bottom: var(--size-2);
	}
	.title {
		color: var(--header-text);
		font-family: var(--font-humanist);
		font-family: 'PostCardTitle', serif;
		font-size: var(--font-size-fluid-3);
		font-weight: bold;
		letter-spacing: var(--font-letterspacing-3);
		/* line-height: normal; */
		text-align: center;
		text-shadow: 0.05rem 0.05rem 0.05rem black;
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
		background-color: var(--bg-card);
		border-radius: var(--border-radius);
		box-shadow: var(--box-shadow);
		color: var(--text);
		font-size: 90%;
		padding-inline: 0.5rem;
		margin-inline: 0.5rem;
		margin-block: 0.25rem;

		&:hover {
			box-shadow: var(--box-shadow-hover);
		}
	}
</style>
