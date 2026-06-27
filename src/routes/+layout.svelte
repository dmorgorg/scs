<script>
	import { onMount } from 'svelte';
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/css/styles.scss';
	import '$lib/css/fonts.css';
	// import FadeStrip from '$lib/components/FadeStrip.svelte';

	// const scrollToTop = () => {
	// 	console.log('scrollToTop');
	// 	window.scrollTo({ top: 0, behavior: 'smooth' });
	// };

	// onMount(() => {
	// 	console.log('onMount');
	// 	scrollToTop();
	// });
</script>

<div class="wrapper">
	<div class="header"><Header /></div>
	<!-- <FadeStrip /> -->
	<div class="container" id="top">
		<section class="inset">
			<main class="content"><slot /></main>
		</section>
		<Footer />
	</div>
</div>

<style lang="scss">
	.wrapper {
		background-color: var(--bg);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 99.9vh;
		overflow-y: auto;
	}
	.container {
		flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: space-between;
	}
	.inset {
		padding: 0 calc(50vw - 21.5rem);
		margin-block: var(--margin-card);
	}
	main {
		font-size: 1.125rem;
		line-height: var(--font-lineheight-4);
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
