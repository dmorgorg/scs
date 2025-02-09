<script>
	// @ts-nocheck
	import { onMount } from 'svelte';

	// data.slug is passed in as a prop
	export let thisSlug;

	$: getSortedSlugList = async () => {
		let list = [];
		const filePaths = import.meta.glob('/src/posts/*.md', { eager: true });
		for (const path in filePaths) {
			const file = filePaths[path];
			const slug = path.split('/').at(-1)?.replace('.md', '');
			if (file && typeof file === 'object' && 'metadata' in file && 'slug') {
				const { date, title, published } = file.metadata;
				published && list.push({ title: title, date: date, slug: slug });
			}
		}
		// sorted in chronological order. Whereas users might want the most recent post first, those using the arrows to navigate between posts want ? to read the posts in the order they were published.
		list = list.sort(
			(first, second) => new Date(first.date).getTime() - new Date(second.date).getTime()
		);
		// console.log('sorted slug list returning');
		return list;
	};

	$: getIndex = async () => {
		const list = await getSortedSlugList();
		const index = list.findIndex((item) => item.slug === thisSlug);
		// console.log('getIndex returning');
		return index;
	};

	$: getNextIndex = async () => {
		// need list for list.length
		const list = await getSortedSlugList();
		const index = await getIndex();
		const nextIndex = index + 1 < list.length ? index + 1 : null;
		// console.log('getNextIndex returning', nextIndex);
		return nextIndex;
	};

	$: getPrevIndex = async () => {
		const index = await getIndex();
		const prevIndex = index > 0 ? index - 1 : null;
		// can return 0
		// console.log('getPrevIndex returning', prevIndex);
		return prevIndex;
	};

	const scrollToTop = () => {
		// console.log('scrollToTop');
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	onMount(() => {
		scrollToTop();
	});

	$: getNextSlug = async () => {
		const list = await getSortedSlugList();
		const nextIndex = await getNextIndex();
		if (nextIndex !== null) {
			return [list[nextIndex].slug, list[nextIndex].title];
		}
		return null;
	};

	$: getPrevSlug = async () => {
		const list = await getSortedSlugList();
		const prevIndex = await getPrevIndex();
		if (prevIndex !== null) {
			return [list[prevIndex].slug, list[prevIndex].title];
		}
		return null;
	};
</script>

<div class="navbar">
	<div class="row">
		<div class="col left">
			<div>
				{#await getPrevSlug()}
					<p>pending...</p>
				{:then returnValue}
					{#if returnValue !== null}
						<a
							href={returnValue[0]}
							on:click={(event) => {
								event.preventDefault();
								scrollToTop();
								window.location.href = returnValue[0];
							}}
							><button>
								<img
									width="30"
									height="30"
									src="/icons/leftArrow.svg"
									alt="long-arrow-left"
								/></button
							></a
						>
						<br />
						{#if returnValue}
							{@const slug = `${returnValue[0]}`}
							{@const title = returnValue[1]}
							<a class="title" href={slug}>{@html title}</a>
						{/if}
					{/if}
				{/await}
			</div>
		</div>

		<div class="col right">
			<div>
				{#await getNextSlug()}
					<p>pending...</p>
				{:then returnValue}
					{#if returnValue !== null}
						<a
							href={returnValue[0]}
							on:click={(event) => {
								event.preventDefault();
								scrollToTop();
								window.location.href = returnValue[0];
							}}
							><button
								><img
									width="30"
									height="30"
									src="/icons/rightArrow.svg"
									alt="long-arrow-right"
								/></button
							></a
						><br />
						<a class="title" href={returnValue[0]}>{@html returnValue[1]}</a>
					{/if}
				{/await}
			</div>
		</div>
	</div>
</div>

<!-- {window.scrollY}, {window.scrollX} -->

<style lang="scss">
	.row {
		display: flex;
		justify-content: space-between;
		margin: 1rem 0;
		padding-block-start: 1.25rem;
	}
	.col {
		display: flex;
		flex-direction: column;

		&.right {
			// align-items: flex-end;
			text-align: right;
		}
		&.left {
			// align-items: flex-start;
			text-align: left;
		}
	}
	button {
		background-color: var(--bg-color);
		// background-color: black;
		border-radius: var(--radius-3);
		border: 1px solid var(--border-light);
		box-shadow: var(--box-shadow);
		margin-block: 0;
		padding: 0.25rem 1rem;

		&:hover {
			// background-color: var(--bg-color-light);
			border: 1px solid var(--border-dark);
			box-shadow: var(--box-shadow-hover);
		}
	}
	a {
		text-decoration: none;
		color: var(--header-text-dark);

		&.title {
			color: black;
			display: block;
			font-weight: 500;
			padding-block-start: 0.25rem;
			// margin-block-end: -0.75rem;
		}
	}
</style>
