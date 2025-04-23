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
		background-color: var(--bg);
		//
		color: var(--text);
		display: flex;
		flex-wrap: wrap;
		height: 2.435rem;
		justify-content: space-between;
		padding: 0 0.5em;
		padding-block-end: 1rem;
		margin-bottom: 0;
		z-index: 100;

		.title a.site-title {
			color: inherit;
			font-size: var(--font-size-fluid-2);
			font-family: 'italicText', sans-serif;
			font-family: 'SCSHeaders', sans-serif;
			// padding-block-end: 1.5em;
			text-decoration: none;
			vertical-align: top;
			// border: 1px solid black;
		}

		.title {
			margin-block-start: -0.875rem;
		}
		.nav {
			margin-block-start: -0.5rem;
		}
	}
</style>
