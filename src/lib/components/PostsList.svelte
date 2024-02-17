<script>
	export let posts = [];
</script>

<ul class="posts-list">
	{#each posts as post}
		<li class="card top-matter">
			<article>
				<a href="/blog/{post.slug}">
					<img
						src={post.coverImage}
						alt=""
						width={post.coverWidth}
						height={post.coverHeight}
						style="ratio: {post.coverWidth} / {post.coverHeight}"
					/>
					<h3 class="title">
						{@html post.title}
					</h3>
					<span class="date">&nbsp; ({post.date})</span>
				</a>
			</article>

			<p>{post.excerpt}</p>
		</li>
	{/each}
</ul>

<style>
	h3.title {
		display: inline;
		padding-top: 2em;
	}
	.date {
		font-size: 0.8em;
		vertical-align: text-bottom;
		/* put the date on its own line if it wants to wrap */
		white-space: nowrap;
	}
	p {
		margin-bottom: 0;
	}
	img {
		margin-top: 0;
		margin-bottom: 1em;
	}
</style>
