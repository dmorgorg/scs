<script>
	import { siteDescription, siteTitle } from '$lib/config'
</script>

<section>
	<h3>{@html siteTitle}</h3>
	<div>{@html siteDescription}</div>
</section>

<style lang="scss">
	section {
		align-items: center;
		background-color: var(--bg-color);
		border: 1px solid var(--border-light);
		border-radius: var(--border-radius);
		box-shadow: var(--box-shadow);
		display: flex;
		flex-direction: column;
		font-family: 'Alkes', serif;
		font-style: italic;
		justify-content: space-between;
		margin-block-end: var(--margin-card);
		padding: 0.5rem 1.5rem;

		h3 {
			color: var(--header-text-dark);
			font-size: var(--font-size-fluid-1);
			font-weight: bold;
			letter-spacing: var(--font-letterspacing-1);
			margin: 0 auto 0.5em auto;
			padding: 0;
		}

		div {
			text-align: center;
			font-family: 'Alkes', serif;
			font-size: 1.125rem;
			// font-style: italic;
			// font-weight: normal;
		}

		@media (max-width: 768px) {
			div {
				width: 90%;
			}
		}
	}
</style>
