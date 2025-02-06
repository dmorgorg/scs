<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { fade } from 'svelte/transition';
	export let isCarouselOpen;
	export let src = '';

	// carousel
	let emblaApi;
	let options = { loop: true, duration: 40 };
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

	const getNext = () => {
		emblaApi.scrollNext();
		currentIndex = (currentIndex + 1) % length;
		// currentIndex += callingIndex;
	};
	const getPrevious = () => {
		emblaApi.scrollPrev();
		currentIndex = currentIndex - 1 < 0 ? length - 1 : currentIndex - 1;
		// currentIndex += callingIndex;
	};
	function getOut() {
		isCarouselOpen = false;
		emblaApi.destroy();
	}

	function cursoryNavigation(event) {
		if (event.key === 'ArrowRight') {
			getNext();
		} else if (event.key === 'ArrowLeft') {
			getPrevious();
		} else if (event.key === 'Escape') {
			getOut();
		}
	}

	let ia = imageArray();
	let callingIndex = getCallingIndex(src);
	let newArray = arrayIndexShift(ia, callingIndex);
	let length = ia.length;
	let matteTheme = 'black';
	let currentIndex = callingIndex;
</script>

<svelte:window on:keydown={cursoryNavigation} />

<div
	class="matte"
	class:white={matteTheme === 'white'}
	class:brand={matteTheme === 'brand'}
	class:black={matteTheme === 'black'}
	transition:fade={{ duration: 400 }}
>
	<div class="matteButtonGroup">
		<button class="white" onclick={() => (matteTheme = 'white')} aria-label="Set theme to white"
		></button>
		<button class="brand" onclick={() => (matteTheme = 'brand')} aria-label="Set theme to brand"
		></button>
		<button class="black" onclick={() => (matteTheme = 'black')} aria-label="Set theme to black"
		></button>
	</div>

	<div class="counter" class:gray={matteTheme === 'black'}>
		Image {currentIndex + 1} of {length}
	</div>

	<button class="x" onclick={getOut}>
		<img src="/icons/x.png" alt="long-arrow-right" />
	</button>

	<div class="embla" use:emblaCarouselSvelte={{ options }} onemblaInit={onInit}>
		<div class="embla__container">
			{#each newArray as image, index}
				<div class="embla__slide">
					<div class="border"><img src={image} alt="" /></div>
				</div>
			{/each}
		</div>
	</div>
	<!-- <div class="embla__controls"> -->
	<div class="embla__buttons">
		<button class="embla__button embla__button--prev" type="button" onclick={() => getPrevious()}>
			<img src="/icons/chevron-left.png" alt="" />
		</button>

		<button class="embla__button embla__button--next" type="button" onclick={() => getNext()}>
			<img src="/icons/chevron-right.png" alt="" />
		</button>
		<!-- </div> -->
		<!-- {index} -->
	</div>
</div>

<style lang="scss">
	.embla {
		overflow: hidden;
		height: 100%;
	}
	.embla__container {
		display: flex;
		height: 100%;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
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
			}
		}
	}
	.embla__buttons {
		align-items: center;
		display: flex;
		justify-content: space-between;
		padding-inline: 0.75rem;
		position: absolute;
		width: 100%;
		z-index: 50;

		.embla__button--prev,
		.embla__button--next {
			// border-radius: 50%;
			border: 0.15rem solid black;
			box-shadow: none;
			outline: none;
			padding: 0;
			height: 2rem;
			width: 2.5rem;

			img {
				border: none;
				margin: 0;
				padding: 0;
				height: 2rem;
				width: 2rem;
			}
		}
	}
	.matte {
		align-items: center;
		background-color: var(--brand-2);
		display: flex;
		justify-content: center;
		position: fixed;
		top: 0;
		transition: background-color 2s;
		left: 0;
		width: 100vw;
		height: 100vh;
		padding-inline: 4rem;
		padding-block-start: 2rem;
		padding-block-end: 4rem;

		&.white {
			background-color: white;
		}
		&.brand {
			background-color: var(--brand-2);
		}
		&.black {
			background-color: black;
			color: white;
		}
		// &.gray {
		// 	color: gray;
		// 	color: red;
		// }

		.counter {
			font-family: alkes;
			font-style: italic;
			position: absolute;
			bottom: 0.375rem;
			right: 1rem;
			transition: color 3.5s;
		}

		.matteButtonGroup {
			bottom: 0.75rem;
			display: flex;
			justify-content: center;
			position: absolute;

			button {
				border: 0.15rem solid black;
				box-shadow: none;
				height: 0.75rem;
				margin-inline: 0.75rem;
				padding: 0.5rem;
				position: relative;
				width: 0.75rem;

				&.white {
					background-color: white;
				}
				&.brand {
					background-color: var(--brand-2);
				}
				&.black {
					background-color: black;
				}
			}
		}
		&.black button.embla__button {
			background-color: gray;
			transition: background-color 2s;
		}

		&.black button.black {
			border-color: gray;
			transition: background-color 2s;
		}
		&.brand .embla__buttons button {
			background-color: var(--brand-2);
			transition: background-color 2s;
		}
		&.white .embla__buttons button {
			background-color: white;
			transition: background-color 2s;
		}
		button.x {
			background-color: white;
			// background-color: gray;
			border: 0.15rem solid black;
			box-shadow: none;
			right: 0.75rem;
			top: 0.75rem;
			position: absolute;
			transition: background-color 2s;
			height: 2rem;
			width: 2.5rem;
			margin: 0;
			padding: 0;

			img {
				border: none;
				margin: 0;
				padding: 0;
				height: 2rem;
				width: 2rem;
			}
		}
		&.brand button.x {
			background-color: var(--brand-2);
		}
		&.black button.x {
			background-color: gray;
		}
	}
	.gray {
		color: gray;
	}
</style>
