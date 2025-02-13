<script>
	import Embla from '$lib/components/Embla.svelte';

	export let src;
	export let alt = src;
	export let caption = '';
	let isCarouselOpen = false;

	function carousel() {
		isCarouselOpen = true;
	}
</script>

<button type="button" on:click={carousel} aria-label={alt}
	><figure>
		<img {src} {alt} />
		{#if caption}
			<figcaption class="caption">{caption}</figcaption>
		{/if}
	</figure>
</button>

{#if isCarouselOpen}
	<Embla {src} bind:isCarouselOpen />->
{/if}

<style lang="scss">
	.caption {
		max-inline-size: 100%;
		line-height: 1.25;
		margin-block-start: -0.25em;
		margin-block-end: 0;
	}
	button {
		// style=" padding: 0; "
		border: none;
		cursor: pointer;
		background: none;
		box-shadow: none;
		font-weight: normal;
		margin-block: 1rem;
		outline: 0;
		padding: 0;

		figure {
			margin: 0;
			margin-block: var(--size-fluid-0);

			img {
				padding: 0;
				margin: 0;
				&:hover {
					border: 2px solid black;
					box-shadow: var(--box-shadow-hover);
					border-radius: 5px;
				}
			}
		}
	}
</style>
