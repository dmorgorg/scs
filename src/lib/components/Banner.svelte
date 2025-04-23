<script>
	import { siteDescription, siteTitle } from '$lib/config';
</script>

<section>
	<h3>{@html siteTitle}</h3>
	<div>{@html siteDescription}</div>
</section>

<style lang="scss">
	section {
		align-items: center;
		background-color: var(--bg-card);
		border: 1px solid var(--border-light);
		border-radius: var(--border-radius);
		box-shadow: var(--box-shadow-hover);
		display: flex;
		flex-direction: column;
		font-family: 'Alkes', serif;
		font-style: italic;
		justify-content: space-between;
		margin-block-end: var(--margin-card);
		padding: 0.5rem 1.5rem;

		h3 {
			color: var(--header-text-dark);
			font-family: 'SCSHeaders', serif;
			font-size: 400%;
			letter-spacing: var(--font-letterspacing-3);
			margin: -1.5rem auto 0 auto;
			padding: 0;
		}

		div {
			text-align: center;
			font-family: 'italicText', serif;
			font-size: 1.125rem;
		}

		// @media (max-width: 480px) {
		// 	section {
		// 		width: 90%;
		// 	}
		// }
	}
</style>
