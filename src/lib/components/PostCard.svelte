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
		background-color: white;
		border: 1px solid var(--border-light);
		border-radius: var(--border-radius);
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	img {
		/* background-color: black; */
		padding: 0;
		border-radius: 0;
		border-top-left-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
	}
	.pad {
		display: flex;
		flex-direction: column;

		height: 100%;
		justify-content: space-between;
		line-height: normal;
		padding-block: 0.75rem;
		padding-inline: 1rem;
	}
	.title {
		color: var(--header-text-dark);
		font-size: var(--font-size-fluid-1);
		font-weight: bold;
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
	.card:hover .title {
		text-shadow: 0.5px 0.5px 0.5px black;
		color: var(--header-text-light);
	}
</style>
