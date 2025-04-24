const fetchCategoryPosts = async ({ category } = {}) => {
	let posts = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/posts/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').pop().slice(0, -3);
			return { ...metadata, slug };
		})
	);

	posts = posts.filter((post) => post.categories.includes(category));
	posts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
	console.log(posts);

	return posts;
};

export default fetchCategoryPosts;
