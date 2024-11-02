<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	export let isCarouselOpen;
	export let src = '';

	let emblaApi;

	function onInit(event) {
		emblaApi = event.detail;
		console.log(emblaApi.slideNodes());
	}

	let options = { loop: true };
</script>

<div class="matte">
	<!-- Open: {isCarouselOpen}{src} -->
	<div class="embla" use:emblaCarouselSvelte={{ options }} onemblaInit={onInit}>
		<div class="embla__container">
			<div class="embla__slide">
				<div class="border"><img src="/images/2024/06/2024-06-27-140236.jpg" alt="" /></div>
			</div>
			<div class="embla__slide"><img src="/images/2024/06/2024-06-27-143258.jpg" alt="" /></div>
			<div class="embla__slide"><img src="/images/2024/06/2024-06-27-153904.jpg" alt="" /></div>
		</div>
	</div>

	<div class="embla__controls">
		<div class="embla__buttons">
			<button
				class="embla__button embla__button--prev"
				type="button"
				onclick={() => emblaApi.scrollPrev()}
			>
				&lt;
			</button>

			<button
				class="embla__button embla__button--next"
				type="button"
				onclick={() => emblaApi.scrollNext()}
			>
				&gt;
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	.embla {
		overflow: hidden;

		height: 100%;
		// border: none;
		// outline: none;
	}
	.embla__container {
		display: flex;
		height: 100%;
		/* justify-content: center;
		align-items: center; */
		// border: none;
		// outline: none;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
		// background: green;
		height: 100%;
		width: auto;
		border: none;
		outline: none;

		.border {
			// 	this border div and the img are for setting the border to the image rather than the object-fit: contain bounding box
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;

			img {
				width: auto;
				height: auto;
				max-height: 100%;
				max-width: 100%;
				object-fit: contain;
				border: 3px solid black;
				// margin: 0;
				// padding: 0;
			}
		}
	}
	.matte {
		background-color: var(--brand-2);
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		padding-inline: 3rem;
		padding-block-start: 2rem;
		padding-block-end: 4rem;
	}
</style>
