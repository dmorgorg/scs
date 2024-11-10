<script>
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles.scss';
	import FadeStrip from '$lib/components/FadeStrip.svelte';
</script>

<div class="wrapper">
	<div class="header"><Header /></div>
	<FadeStrip />
	<div class="container" id="top">
		<section class="inset">
			<main class="content"><slot /></main>
		</section>
		<Footer />
	</div>
</div>

<style lang="scss">
	.container {
		flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: space-between;
		// max-inline-size: 960px;
		// z-index: 0 !important;
	}
	.inset {
		padding: 0 calc(50vw - 21.5rem);
		margin-block: var(--margin-card);
		// z-index: 0 !important;
	}
	main {
		font-size: 1.125rem;
		// font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		line-height: var(--font-lineheight-4);
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 99.9vh;
		overflow-y: auto;
	}

	@media (max-width: 768px) {
		// .wrapper {
		// 	font-size: 50%;
		// }
		// .inset {
		// 	padding: 0 0.5em;
		// }
	}
</style>
