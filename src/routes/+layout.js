/**
 * @param {{ url: URL }} param0
 */
export const load = ({ url }) => {
	const currentPath = url.pathname

	return { currentPath }
}
