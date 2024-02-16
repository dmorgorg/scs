<script>
	export let data;
	const { uniqueCategories } = data;
</script>

<svelte:head>
	<title>Categories</title>
</svelte:head>

<div class="compressed-content">
	<h4>Blog categories:</h4>

	<ul>
		{#each uniqueCategories as category}
			<li>
				<a href="/blog/category/{category.title}">
					{@html category.title}
				</a>
				({category.count})
			</li>
		{/each}
	</ul>
</div>

<style>
	h4 {
		padding: 0;
		margin: 0;
	}
</style>
