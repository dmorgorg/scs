const fetchPosts = async ({ offset = 0, limit = postsPerPage, category = '' } = {}) => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/posts/*/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').pop().slice(0, -3);
			return { ...metadata, slug };
		})
	);

	// console.logs(posts);

	return posts;
};

export default fetchPosts;
