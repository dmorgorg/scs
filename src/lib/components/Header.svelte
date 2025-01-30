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
		background-color: var(--bg-color);
		border-bottom: 1px solid var(--border-mid);
		color: var(--text);
		display: flex;
		flex-wrap: wrap;
		height: var(--size-7);
		justify-content: space-between;
		padding: 0 0.5em;
		margin-bottom: 0;

		.title a.site-title {
			color: inherit;
			font-size: var(--font-size-fluid-0pt5);
			font-family: 'italicText', sans-serif;
			padding-block-end: 1.5em;
			text-decoration: none;
		}
	}
</style>
