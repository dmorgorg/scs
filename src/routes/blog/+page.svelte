<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { siteDescription } from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>Blog Posts</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<h2>Blog Posts:</h2>

<PostsList posts={data.posts} />

<Pagination currentPage={1} totalPosts={data.total} />

<style>
	h2 {
		margin-top: 1em;
		font-family: 'Alkes';
		font-style: italic;
	}
</style>
