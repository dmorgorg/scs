<script>
	import { formattedDate } from '$lib/utils.js';
	export let img;
	export let title;
	export let date;
	export let description = '';
</script>

<div class="card">
	<img src={img} alt={img} />
	<div class="pad">
		<div>
			<div class="title">{@html title}</div>
			<div class="date">{formattedDate(date)}</div>
		</div>
		<div class="description">{@html description}</div>
	</div>
</div>

<style>
	.card {
		background-color: var(--bg-card);
		box-shadow: var(--box-shadow);
		display: flex;
		flex-direction: column;
		height: 100%;

		&:hover {
			box-shadow: var(--box-shadow-hover);
		}
	}

	.pad {
		display: flex;
		flex-direction: column;

		height: 100%;
		justify-content: space-between;
		line-height: normal;
		padding-block-end: 0.75rem;
		padding-inline: 1rem;
	}
	.title {
		color: var(--header-text-dark);
		font-family: 'PostCardTitle', sans-serif;
		font-size: var(--font-size-fluid-1);
		font-size: 200%;
		font-style: italic;
		font-weight: bold;
		letter-spacing: 0.125rem;
		line-height: 1;
		margin-block-start: 0.5rem;
		margin-block-end: 0.5rem;
		text-decoration: none;
	}
	.date {
		font-size: var(--font-size-fluid-0);
		padding-block: 0;
		margin-block-end: 1rem;
		/* line-height: normal; */
	}
	.description {
		color: var(--text-light);
		font-family: 'italicText', italic;
	}
	.card:hover {
		/* border: none; */
		.title {
			text-shadow: 0.5px 0.5px 0.25px black;
			/* color: var(--header-text-light); */
		}
	}
</style>
