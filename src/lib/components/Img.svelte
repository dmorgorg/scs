<script>
	export let src
	export let alt = ''
	export let caption = ''
</script>

{#if alt && caption}
	<figure>
		<img {src} {alt} />
		<figcaption class="caption">{caption}</figcaption>
	</figure>
{:else if alt}
	<figure>
		<img {src} {alt} />
	</figure>
{/if}

<style>
	.caption {
		max-inline-size: 100%;
		line-height: 1.25;
		margin-block-start: -0.75em;
		margin-block-end: 1em;
	}
</style>
