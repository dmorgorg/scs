<script>
	import FooterNav from './FooterNav.svelte';
	import { siteAuthor } from '$lib/config';
</script>

<footer>
	<div>
		<FooterNav />
	</div>

	<p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
</footer>

<style>
	footer {
		margin-top: 1em;
		padding: 0 0 0.25em 0;
	}
</style>
