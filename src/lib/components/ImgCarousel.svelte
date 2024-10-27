<script>
	// @ts-nocheck
	import { fly, fade, slide } from 'svelte/transition';

	export let src;
	export let isCarouselOpen;

	function imageArray() {
		const images = document.images;
		const anArray = [];
		for (let i = 0; i < images.length; i++) {
			const index = images[i].src.indexOf('/images/');
			if (index !== -1) {
				anArray.push(images[i].src.slice(index));
			}
		}
		return anArray;
	}

	function callingIndex() {
		const images = document.images;
		for (let i = 0; i < images.length; i++) {
			if (imageArray()[i] === src) {
				return Number(i);
			}
		}
	}

	function getNext() {
		currentIndex = (currentIndex + 1) % length;
	}
	function getPrevious() {
		// if (currentIndex === initIndex + 2) {
		// 	// the photo that calls the carousel is in the photo array twice ????!!!
		// 	// requiring a double click to advance to the next.
		// 	// this hack fixes that.
		// 	currentIndex = currentIndex - 1;
		// }
		if (currentIndex == 0) {
			currentIndex = imageArray().length - 2;
		} else {
			currentIndex = currentIndex - 1;
		}
	}

	function getOut() {
		isCarouselOpen = false;
	}

	function cursoryNavigation(event) {
		if (event.key === 'ArrowRight') {
			getNext();
		} else if (event.key === 'ArrowLeft') {
			getPrevious();
		} else if (event.key === 'Escape') {
			// close the carousel
		}
	}

	const initIndex = callingIndex();
	$: currentIndex = callingIndex();
	$: currentFilePath = imageArray()[currentIndex];
	let ia = imageArray();
	let length = ia.length;
	let matteTheme = 'brand';
</script>

<svelte:window on:keydown={cursoryNavigation} />

<div
	class="matte"
	class:white={matteTheme === 'white'}
	class:brand={matteTheme === 'brand'}
	class:black={matteTheme === 'black'}
	transition:fade={{ duration: 500 }}
>
	<div class="matteButtonGroup">
		<button class="white" on:click={() => (matteTheme = 'white')} aria-label="Set theme to white"
		></button>
		<button class="brand" on:click={() => (matteTheme = 'brand')} aria-label="Set theme to brand"
		></button>
		<button class="black" on:click={() => (matteTheme = 'black')} aria-label="Set theme to black"
		></button>
	</div>

	<button class="x" on:click={getOut}>
		<img src="/icons/xBrand.png" alt="long-arrow-right" />
	</button>

	<div class="counter" class:black={matteTheme === 'black'}>
		Image {currentIndex + 1} of {length}
	</div>

	<div class="inner">
		{#each ia as image, index}
			{#if index === currentIndex}
				<img
					out:slide={{ duration: 500 }}
					in:slide={{ duration: 1200, delay: 100 }}
					src={ia[index]}
					alt="x"
				/>
			{/if}
		{/each}

		<div class="nextPrevButtons">
			<button class="leftChevron" on:click={getPrevious}>
				<img src="/icons/leftChevronBrand.png" alt="left-chevron" />
			</button>
			<button class="rightChevron" on:click={getNext}>
				<img src="/icons/rightChevronBrand.png" alt="right-chevron" />
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	// mobile first design

	button {
		background-color: white;
		border: 2px solid var(--brand-9);
		border-radius: var(--radius-4);
		box-shadow: none;
		height: 1.25rem;
		padding: 0.125rem;
		position: absolute;
		width: 1.25rem;

		img {
			border: none;
		}
	}

	.counter {
		font-family: alkes;
		font-style: italic;
		font-weight: 00;
		position: absolute;
		bottom: 0.375rem;
		right: 1rem;
		transition: color 3.5s;
	}

	.matte {
		align-items: center;
		background-color: var(--brand-2);
		display: flex;
		font-size: 65%;
		height: 100%;
		justify-content: center;
		left: 0;
		padding-block-start: 1rem;
		padding-block-end: 2rem;
		padding-inline: 1rem;
		position: fixed;
		top: 0;
		transition: background-color 2s;
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
			color: white;
		}
	}

	.matteButtonGroup {
		bottom: 0.75rem;
		display: flex;
		justify-content: center;
		position: absolute;

		button {
			height: 0.75rem;
			margin-inline: 0.75rem;
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

	.inner {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 100%;
		// border: 3px solid purple;

		img {
			border: 2px solid black;
			margin-block: auto;
			max-width: 100%;
			max-height: 100%;
			// in full screen mode in the browser, object-fit:  contain; sometimes doesn't work, rendering the border in the wrong place. Setting max width and max height instead fixes this.
			// object-fit: contain;
		}

		.nextPrevButtons {
			align-items: center;
			display: flex;
			justify-content: space-between;
			margin-block-start: 1rem;
			padding-inline: 0.5rem;
			position: absolute;
			width: 100%;

			button {
				background-color: var(--bg-color);
				background-color: white;
				border: 2px solid var(--brand-9);
				border-radius: var(--radius-4);
				box-shadow: none;
				height: 1.25rem;
				padding: 0.125rem;
				position: relative;
				width: 1.25rem;

				img {
					border: none;
				}
			}
		}

		// &:hover {
		// 	border: 3px solid black;
		// }

		// img {
		// 	border: none;
		// 	padding: 0;
		// 	margin: 0;
		// 	// width: 25%;
		// 	height: auto;
		// 	max-width: 100%;
		// }

		// &.leftChevron {
		// 	left: 1rem;
		// }
		// &.rightChevron {
		// 	right: 1rem;
		// }
		// }
	}

	// .matte.black button.black:hover {
	// 	border: 13px solid white;
	// }

	.x {
		right: 0.5rem;
		top: 0.5rem;
	}
</style>
