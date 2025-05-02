<script>
	export let data;
	const { uniqueCategories } = data;
	let sortedUniqueCategories = Object.values(uniqueCategories);
	sortedUniqueCategories = sortedUniqueCategories.sort((a, b) => {
		return a.title.localeCompare(b.title);
	});
	function getSize(count) {
		if (count <= 3) return '1em';
		if (count <= 7) return '1.125em';
		if (count <= 12) return '1.25em';
		if (count <= 20) return '1.375em';
		if (count <= 30) return '1.5em';
		if (count <= 40) return '1.675em';
		if (count > 40) return '1.75em';
	}
	const sizedCategories = Object.values(sortedUniqueCategories).map((category) => {
		return {
			title: category.title,
			count: category.count,
			size: getSize(category.count)
		};
	});
</script>

<div class="cloud">
	{#each sizedCategories as category}
		<div class="tag">
			<a href="/blog/category/{category.title}">
				<span style={`font-size: ${category.size}`}>
					{@html category.title}
					({category.count})
				</span></a
			>
		</div>
	{/each}
</div>

<style lang="scss">
	.cloud {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: calc(100% + 50vw - 21.5rem);
		margin-inline-start: calc(10rem - 25vw);
		margin-block-start: 1.5rem;

		.tag {
			color: var(--text);
			padding-inline: 0.5rem;
			text-align: center;
			line-height: 1;
		}

		a {
			// background: var(--bg-;
			border-radius: var(--border-radius-med);
			border: 2px solid var(--border-light);
			color: var(--text);
			color: var(--header-text-dark);
			display: flex;
			margin-block: 0.125rem;
			padding-inline: 0.5rem;
			padding-block-start: 0;
			padding-block-end: 0.25rem;
			text-decoration: none;
			line-height: 1.2;

			&:hover {
				background: var(--bg-card);
				box-shadow: var(--box-shadow-hover);
				color: var(--brand-5);
			}
		}
	}

	@media (max-width: 768px) {
		.cloud {
			// font-size: calc(100% * 0.65);
			// font-size: calc(60%);
			width: 100%;
			margin-inline-start: 0;
			margin-block-start: 1.5rem;
		}
	}
</style>
