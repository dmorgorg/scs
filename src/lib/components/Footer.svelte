<script>
	import MainNav from './MainNav.svelte'
	import { siteAuthor, email } from '$lib/config'
</script>

<footer>
	<div><MainNav /></div>
	<div>
		&copy; {new Date().getFullYear()} &nbsp; {siteAuthor}
	</div>
</footer>

<style lang="scss">
	footer {
		align-items: center;
		background-color: var(--bg-color);
		border-top: var(--border-light) 1px solid;
		box-shadow: var(--box-shadow);
		display: flex;
		flex-wrap: wrap;
		font-family: sans-serif;
		font-size: 1rem;
		justify-content: space-around;

		div {
			margin: 0 1rem;
			padding: 0 0.75rem;
		}
	}
</style>
