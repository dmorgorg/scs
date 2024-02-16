import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		// the slice is to extract the year from the post title, i.e. 2022, 2023
		const post = await import(`../../../lib/posts/${params.post.slice(0, 4)}/${params.post}.md`);

		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.post }
		};
	} catch (err) {
		throw error(404, err);
	}
};
