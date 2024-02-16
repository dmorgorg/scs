<script>
	import MainNav from './MainNav.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import { siteTitle } from '$lib/config';

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	};
</script>

<header>
	<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>

	<div class="title">
		<a href="/" class="site-title">
			{siteTitle}
		</a>
	</div>

	<div class="nav">
		<HamburgerMenuButton />
		<MainNav />
	</div>
</header>

<style>
	.title {
		font-family: 'Alkes', serif;
		font-style: italic;
	}
	.nav {
		font-size: 0.9em;
	}
</style>
