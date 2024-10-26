<script>
	import { isMenuOpen } from '$lib/js/store'
	import HamburgerSVG from './svg/HamburgerSVG.svelte'
	import XSVG from './svg/XSVG.svelte'

	export let closeOnly = false

	const toggleIsMenuOpen = () => {
		isMenuOpen.set(!$isMenuOpen)
	}
</script>

<button on:click={toggleIsMenuOpen}>
	<!-- <span class="sr-only">Toggle hamburger menu</span> -->
	{#if closeOnly}
		<XSVG />
	{:else}
		<HamburgerSVG />
	{/if}
</button>

<style>
	button {
		background: none;
		border: none;
		cursor: pointer;
		padding-right: 0;
		outline: none;
		box-shadow: none;
	}
</style>
