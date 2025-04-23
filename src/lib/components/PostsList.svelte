<script>
	import PostCard from '$lib/components/PostCard.svelte';
	import Banner from '$lib/components/Banner.svelte';
	import * as config from '$lib/config';
	export let data;
	export let limit = '';

	const scrollToTop = () => {
		console.log('scrollToTop');
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<svelte:head>
	<title>{config.siteTitle}</title>
</svelte:head>

<main id="main">
	<ul class="posts">
		{#each data.posts as post, index}
			{#if !limit || index <= limit - 1}
				<li class="post">
					<a
						href={post.slug}
						on:click={(event) => {
							event.preventDefault();
							scrollToTop();
							window.location.href = post.slug;
						}}
					>
						<PostCard
							img={post.coverImage}
							title={post.title}
							date={post.date}
							description={post.description}
						/>
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</main>

<style>
	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		grid-template-rows: repeat(auto-fit, minmax(10rem, 1fr));
		gap: var(--size-7);
		padding: 0;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
	main {
		padding-block-start: var(--size-fluid-3);
	}
</style>
