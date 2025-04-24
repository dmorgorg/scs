import fetchCategoryPosts from '$lib/js/fetchCategoryPosts';

export const load = async ({ params }) => {
	const { category } = params.category;
	const page = params.page || 1;
	const options = { category };
	const { posts } = await fetchCategoryPosts(options);

	return {
		posts,
		category,
		page,
		total: posts.length
	};
};
