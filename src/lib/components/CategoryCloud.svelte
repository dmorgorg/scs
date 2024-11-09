<script>
	export let data;
	const { uniqueCategories } = data;
	let sortedUniqueCategories = Object.values(uniqueCategories);
	sortedUniqueCategories = sortedUniqueCategories.sort((a, b) => {
		return a.title.localeCompare(b.title);
	});
	function getSize(count) {
		if (count <= 3) return '1.125rem';
		if (count <= 7) return '1.25rem';
		if (count <= 12) return '1.375rem';
		if (count <= 20) return '1.5rem';
		if (count <= 30) return '1.75rem';
		if (count <= 40) return '1.9rem';
		if (count > 40) return '2rem';
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
			<a href="/category/{category.title}">
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
		width: 90vw;
		margin-inline-start: -22vw;
		margin-block-start: 1.5rem;
		// line-height: 1;

		.tag {
			border-radius: 0.5rem;
			color: var(--brand-8);
			// display: inline;
			margin-inline: 0.75rem;
			margin-block: 0;
			// padding: 0;
			padding-inline: 0.5rem;
			// border: 1px solid var(--brand-5);
			// height: auto;
			text-align: center;
			line-height: 1;

			&:hover {
				color: white;
				background-color: var(--brand-7);
			}
		}

		a {
			color: inherit;
			display: flex;
			font-family: Alkes;
			font-size: 1.25rem;
			font-size: 2rem;
			font-style: italic;
			font-weight: 400;
			margin: 0;
			padding: 0;
			// text-align: center;
			text-decoration: none;
			// border: 1px solid red;
			line-height: normal;

			&:link {
				margin: 0;
				// background: yellow;
				// text-align: center;
			}
		}
	}
</style>
