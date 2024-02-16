<script>
	import { navItems } from '$lib/config';
	import NavItem from './NavItem.svelte';
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="footer-nav">
	<ul>
		{#each navItems as page}
			<NavItem href={page.route}>
				{page.title}
			</NavItem>
		{/each}
	</ul>
</nav>
