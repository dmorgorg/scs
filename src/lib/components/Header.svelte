<script>
	import MainNav from './MainNav.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import { siteTitle } from '$lib/config';
	import FadeStrip from './FadeStrip.svelte';
</script>

<header>
	<div class="title">
		<a href="/" class="site-title">
			{siteTitle}
		</a>
	</div>

	<div class="nav">
		<MainNav />
	</div>

	<!-- <div>
		<HamburgerMenuButton />
	</div> -->
</header>

<style lang="scss">
	header {
		align-items: center;
		background-color: var(--brand-2);
		border-bottom: 1rem solid var(--bg);
		color: black;
		display: flex;
		flex-wrap: wrap;
		font-size: var(--font-size-fluid-2);
		// height: 2.435rem;
		// height: 3.75rem;
		justify-content: space-between;
		padding-block: 0;

		// padding-block-end: 1rem;
		// margin-bottom: 0;
		z-index: 100;

		.title a.site-title {
			color: inherit;
			// font-size: var(--font-size-fluid-1);
			font-family: 'SCSHeaders', sans-serif;
			font-style: italic;
			margin-block: 0;
			// padding-block-end: 1.5em;
			text-decoration: none;
			// vertical-align: top;
			// border: 1px solid black;
		}

		.title {
			margin-block: -0.5rem;
			margin-inline-start: 0.5rem;
		}
		.nav {
			margin-block: -0.5rem;
			font-size: 100%;
		}
	}

	@media (max-width: 768px) {
		header {
			// background-color: var(--bg);
			// border-bottom: 0.5rem solid var(--bg);
			// height: 2.75rem;
			// padding: 0 0.5em;
			margin-bottom: 0;
		}
	}
</style>
