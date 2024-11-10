<script>
	export let data;
	const { uniqueCategories } = data;
	let sortedUniqueCategories = Object.values(uniqueCategories);
	sortedUniqueCategories = sortedUniqueCategories.sort((a, b) => {
		return a.title.localeCompare(b.title);
	});
	function getSize(count) {
		if (count <= 3) return '1.125em';
		if (count <= 7) return '1.25em';
		if (count <= 12) return '1.375em';
		if (count <= 20) return '1.5em';
		if (count <= 30) return '1.75em';
		if (count <= 40) return '1.9em';
		if (count > 40) return '2em';
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
		width: calc(100% + 50vw - 21.5rem);
		margin-inline-start: calc(10rem - 25vw);
		margin-block-start: 1.5rem;
		// line-height: 1;

		.tag {
			// background-color: var(--brand-2);
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
				background-color: var(--brand);
			}
		}

		a {
			color: inherit;
			display: flex;
			font-family: Alkes;
			// font-size: 1.25rem;
			// font-size: 2rem;
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
				text-align: center;
			}
		}
	}

	@media (max-width: 768px) {
		.cloud {
			font-size: calc(100% * 0.65);
			font-size: calc(60%);
			width: 100%;
			margin-inline-start: 0;
			margin-block-start: 1.5rem;
		}
	}
</style>
