<script>
	import { currentPage, isMenuOpen } from '$lib/js/store';
	export let href;

	// $: isCurrentPage = $currentPage.startsWith(href); original Josh C code
	$: isCurrentPage = $currentPage === href;

	const maybeCloseMenu = () => {
		if (href != $currentPage) {
			isMenuOpen.set(false);
		}
	};

	const scrollToTop = () => {
		// console.log('scrollToTop');
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const onClick = (event) => {
		// console.log('onClick');
		maybeCloseMenu();
		event.preventDefault();
		scrollToTop();
		window.location.href = href;
	};
</script>

<li>
	<a {href} on:click={onClick} class:active={isCurrentPage}>
		<slot />
	</a>
</li>

<style>
	li {
		padding: 0 0.5rem;
	}
	a {
		font-family: sans-serif;
		text-decoration: none;
		color: inherit;
		cursor: default;

		&:hover:not(.active) {
			text-decoration: underline;
			cursor: pointer;
		}
	}
</style>
