// @ts-nocheck
import { json } from '@sveltejs/kit'

async function getPosts(category) {
	let posts = []
	// get all the paths to the posts
	// eager: true will load the content of the files
	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		// find the last slash and return filename after that as slug, remove .md
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && 'slug') {
			const metadata = file.metadata
			const post = { ...metadata, ...{ slug } }
			post.published && posts.push(post)
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	// add indices to the posts
	// posts.forEach((post, index) => (post.index = index))

	// console.log(posts) // all the posts with metadata and slug

	return posts
}

export async function GET() {
	const posts = await getPosts()
	// console.log(posts) // all the posts with metadata and slug
	return json(posts)
}
