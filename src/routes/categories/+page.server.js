// @ts-ignore

export const load = async ({ url, fetch }) => {
	const response = await fetch('/api/posts');
	let posts = await response.json();

	let uniqueCategories = {};

	posts.forEach((post) => {
		post.categories.forEach((category) => {
			if (uniqueCategories.hasOwnProperty(category)) {
				uniqueCategories[category].count += 1;
			} else {
				uniqueCategories[category] = {
					count: 1,
					title: category
				};
			}
		});
	});

	const sortedUniqueCategories = Object.values(uniqueCategories).sort((a, b) => b.title - a.title);

	return { uniqueCategories: sortedUniqueCategories };
};
