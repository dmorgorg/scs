// @ts-ignore
export const load = async ({ fetch, params }) => {
	const category = params
	const response = await fetch(`/api/posts`)
	const allPosts = await response.json()

	// @ts-ignore
	const posts = allPosts.filter((post) => post.meta.category.includes(category))

	return { category, posts }
}
