<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	export let isCarouselOpen;
	export let src = '';

	// carousel
	let emblaApi;
	let options = { loop: true };
	function onInit(event) {
		emblaApi = event.detail;
	}

	// grab all post images
	function imageArray() {
		const images = document.images;
		const anArray = [];
		for (let i = 0; i < images.length; i++) {
			// trim image path to slug
			const index = images[i].src.indexOf('/images/');
			if (index !== -1) {
				anArray.push(images[i].src.slice(index));
			}
		}
		return anArray;
	}
	// get the index of the calling image
	function getCallingIndex(src) {
		const images = document.images;
		for (let i = 0; i < images.length; i++) {
			if (imageArray()[i] === src) {
				return Number(i);
			}
		}
	}
	// shift the calling image index to the start of a new array, if necessary
	function arrayIndexShift(ia, callingIndex) {
		let newArray = [];
		for (let i = 0; i < ia.length; i++) {
			newArray.push(ia[(callingIndex + i) % ia.length]);
		}
		return newArray;
	}

	let ia = imageArray();
	let callingIndex = getCallingIndex(src);
	let newArray = arrayIndexShift(ia, callingIndex);
</script>

Open: {isCarouselOpen}{src}
<div class="matte">
	<div class="embla" use:emblaCarouselSvelte={{ options }} onemblaInit={onInit}>
		<div class="embla__container">
			{#each newArray as image}
				<div class="embla__slide">
					<div class="border"><img src={image} alt="" /></div>
				</div>
			{/each}
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
		margin-inline: 2rem;

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
