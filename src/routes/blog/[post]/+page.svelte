<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	export let data;

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
	const { PostContent } = data;
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="post">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	<!-- can't comment attributes in svelte so i'm commenting here, some attributes I removed from the img tag-->
	<!-- style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}  -->
	<!-- <img class="cover-image" src={coverImage} alt="" /> -->

	<div class="card top-matter">
		<img class="cover-image" src={coverImage} alt="" />
		<h2>{@html title}</h2>

		<div class="meta">
			<b>Published:</b>
			{date}
			&nbsp; &nbsp; &nbsp; &nbsp;
			{#if updated}
				<b>Updated:</b>&nbsp;{updated}
			{/if}
		</div>
	</div>

	<svelte:component this={PostContent} />

	{#if categories}
		<aside class="post-footer">
			<h6>Categories:</h6>
			<div class="center">
				<ul>
					{#each categories as category}
						<li>
							<a href="/blog/category/{category}/">
								{@html category}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</aside>
	{/if}
</article>
