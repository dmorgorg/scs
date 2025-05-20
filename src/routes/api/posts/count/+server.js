// simply counts all posts and returns the total number

import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = () => {
	const posts = import.meta.glob(`${url.origin}/api/posts/*.md`);
	console.log(Object.keys(posts));
	return json(Object.keys(posts).length);
};
