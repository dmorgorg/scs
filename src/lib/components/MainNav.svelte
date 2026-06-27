<script>
	import { navItems } from '$lib/config';
	import NavListItem from './NavListItem.svelte';
	// import HamburgerMenuButton from '$lib/components/HamburgerMenuButton.svelte';
</script>

<nav>
	<ul>
		{#each navItems as navItem}
			<NavListItem href={navItem.route}>
				{navItem.title}
			</NavListItem>
		{/each}
	</ul>
	<!-- <HamburgerMenuButton closeOnly="false" /> -->
</nav>

<style lang="scss">
	ul {
		display: flex;
		flex-wrap: wrap;
		// font-size: var(--font-size-fluid-1);
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
</style>
