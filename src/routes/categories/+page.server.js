// @ts-ignore

export async function load({ fetch }) {
	// get all posts
	const response = await fetch('/api/posts');
	const posts = await response.json();
	return { posts };
}
