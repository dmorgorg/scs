<script>
	export let data
	console.log(data)
</script>

{data}

<!-- {#if data.category.length}
	<aside>
		<h2>Posted in:</h2>
		<ul>
			{#each data.category as category}
				<li>
					<a href="/blog/category/{category}">
						{category}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if} -->
