<script>
	export let data;
	const { uniqueCategories } = data;
	let sortedUniqueCategories = Object.values(uniqueCategories);
	sortedUniqueCategories = sortedUniqueCategories.sort((a, b) => {
		return a.title.localeCompare(b.title);
	});
</script>

<div class="cloud">
	<ul role="navigation">
		{#each sortedUniqueCategories as category}
			<li>
				<span>
					<a href="/category/{category.title}">
						{@html category.title}
						({category.count})</a
					>
				</span>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	ul {
		margin-block-start: 1.5rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		li {
			display: inline;
			background-color: var(--brand-2);
			color: var(--brand-8);
			border: 1px solid var(--border);
			line-height: 1;
			padding: 0.35em;
			margin: 0.35rem;

			&:hover {
				color: white;
				background-color: var(--brand);
			}
		}

		span {
			white-space: nowrap;
			padding: 0;
		}

		a {
			color: inherit;
			font-family: Alkes;
			font-size: 1.25rem;
			font-style: italic;
			font-weight: 400;
			text-decoration: none;
		}
	}
</style>
