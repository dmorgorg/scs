export const load = async ({ url, fetch }) => {
	const postRes = await fetch(`${url.origin}/api/posts`);
	const posts = await postRes.json();

	// const totalRes = await fetch(`${url.origin}/api/posts/count`);
	// const total = await totalRes.json();

	return { posts };
};
