import { error } from '@sveltejs/kit';

/**
 * @typedef {Object} Params
 * @property {string} slug
 */

/**
 * @param {{ params: Params }} context
 */
export async function load({ params }) {
	// console.log(params) //  { slug: '2024-06-26-Porto' }
	try {
		const post = await import(`../../posts/${params.slug}.md`);
		return {
			content: post.default,
			meta: post.metadata,
			slug: params.slug
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}.md`);
	}
}
