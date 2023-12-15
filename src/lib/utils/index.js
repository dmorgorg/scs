// @ts-nocheck
export const fetchMarkdownPosts = async () => {
  // import.meta.glob is a Vite function. It imports any files that match the glob (wildcard string) provided—in this case, all .md files inside src/routes/blog.
  const allPostFiles = import.meta.glob("/src/routes/blog2023/*.md")
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      // converts /src/routes/blog2023/post-title.md to /blog2023/post-title
      const postPath = path.slice(11, -3)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allPosts
}
