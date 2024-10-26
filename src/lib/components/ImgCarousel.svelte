<script>
	// @ts-nocheck
	import { slide } from 'svelte/transition'

	export let src
	export let isCarouselOpen

	function imageArray() {
		const images = document.images
		const anArray = []
		for (let i = 0; i < images.length; i++) {
			const index = images[i].src.indexOf('/images/')
			if (index !== -1) {
				anArray.push(images[i].src.slice(index))
			}
		}
		return anArray
	}

	function callingIndex() {
		const images = document.images
		for (let i = 0; i < images.length; i++) {
			if (imageArray()[i] === src) {
				return Number(i)
			}
		}
	}

	function getNext() {
		if (currentIndex === initIndex) {
			// the photo that calls the carousel is in the photo array twice ????!!!
			// requiring a double click to advance to the next.
			// this hack fixes that.
			currentIndex++
		}
		if (currentIndex > -1) {
			currentIndex = (currentIndex + 1) % imageArray().length
			currentFilePath = imageArray()[currentIndex]
		}
	}
	function getPrevious() {
		if (currentIndex === initIndex + 2) {
			// the photo that calls the carousel is in the photo array twice ????!!!
			// requiring a double click to advance to the next.
			// this hack fixes that.
			currentIndex = currentIndex - 1
		}
		if (currentIndex <= 0) {
			currentIndex = imageArray().length - 1
			currentFilePath = imageArray()[currentIndex]
		} else {
			currentIndex = currentIndex - 1
			currentFilePath = imageArray()[currentIndex]
		}
	}

	function getOut() {
		isCarouselOpen = false
	}

	function cursoryNavigation(event) {
		if (event.key === 'ArrowRight') {
			getNext()
		} else if (event.key === 'ArrowLeft') {
			getPrevious()
		} else if (event.key === 'Escape') {
			// close the carousel
		}
	}

	const initIndex = callingIndex()
	$: currentIndex = callingIndex()
	$: currentFilePath = imageArray()[currentIndex]
	let ia = imageArray()
	let matteTheme = 'brand'
</script>

<svelte:window on:keydown={cursoryNavigation} />

<div
	class="matte"
	class:white={matteTheme === 'white'}
	class:brand={matteTheme === 'brand'}
	class:black={matteTheme === 'black'}
>
	<button class="leftChevron" on:click={getPrevious}>
		<img src="/icons/leftChevronBrand.png" alt="left-chevron" />
	</button>
	<button class="rightChevron" on:click={getNext}>
		<img src="/icons/rightChevronBrand.png" alt="right-chevron" />
	</button>
	<button class="x" on:click={getOut}>
		<img src="/icons/xBrand.png" alt="long-arrow-right" />
	</button>

	<div class="buttonGroup">
		<button class="white" on:click={() => (matteTheme = 'white')} aria-label="Set theme to white"
			>&nbsp;</button
		>
		<button class="brand" on:click={() => (matteTheme = 'brand')} aria-label="Set theme to brand"
			>&nbsp;</button
		>
		<button class="black" on:click={() => (matteTheme = 'black')} aria-label="Set theme to black"
			>&nbsp;</button
		>
	</div>

	<div class="inner">
		<img transition:slide={{ duration: 500 }} src={currentFilePath} alt="x" />
	</div>
</div>

<style lang="scss">
	.matte {
		align-items: center;
		background-color: var(--brand-2);
		display: flex;
		height: 100%;
		justify-content: center;
		left: 0;
		padding-block-start: 2rem;
		padding-block-end: 4rem;
		padding-inline: 4rem;
		position: fixed;
		top: 0;
		transition: background-color 1s;
		width: 100vw;
		z-index: 50;

		&.white {
			background-color: white;
		}
		&.brand {
			background-color: var(--brand-2);
		}
		&.black {
			background-color: black;
		}

		.buttonGroup {
			align-items: center;
			bottom: 1rem;
			display: flex;
			justify-content: center;

			position: absolute;

			button {
				position: relative;
				margin-inline: 1rem;
				width: 1.25rem;
				height: 1.25rem;
				box-shadow: none;

				&.brand {
					background-color: var(--brand-2);
				}
				&.white {
					background-color: white;
				}
				&.black {
					background-color: black;
				}
			}
		}

		// .buttonGroup {
		// 	display: flex;
		// 	justify-content: center;
		// 	margin-block-start: 1rem;
		// 	margin-block-end: 1rem;

		// 	button {
		// 		background-color: var(--bg-color);
		// 		border: 2px solid var(--brand-9);
		// 		border-radius: var(--radius-4);
		// 		height: 1.25rem;
		// 		padding: 0.25rem;
		// 		width: 1.25rem;

		// 		&:hover {
		// 			border: 3px solid black;
		// 		}

		// 	}
		// }

		.inner {
			align-items: center;
			display: flex;
			justify-content: center;
			width: 100%;
			height: 100%;

			img {
				border: 2px solid black;

				margin-block: auto;
				max-width: 100%;
				max-height: 100%;
				// in full screen mode in the browser, object-fit:  contain; sometimes doesn't work, rendering the border in the wrong place. Setting max width and max height instead fixes this.
				// object-fit: contain;
			}
		}

		& button {
			background-color: var(--bg-color);
			background-color: white;
			border: 2px solid var(--brand-9);
			border-radius: var(--radius-4);
			box-shadow: none;
			height: 2rem;
			padding: 0.25rem;
			position: absolute;
			width: 2rem;

			&:hover {
				border: 3px solid black;
			}

			img {
				border: none;
				padding: 0;
				margin: 0;
				// width: 25%;
				height: auto;
				max-width: 100%;
			}

			&.leftChevron {
				left: 1rem;
			}
			&.rightChevron {
				right: 1rem;
			}
			&.x {
				top: 1rem;
				right: 1rem;
			}
		}
	}
	.matte.black button:hover {
		border: 3px solid white;
	}
</style>
