export const handleLinks = (storyblokLinks) => {
  const articlePaths = Object.values(storyblokLinks.data.links).map(
    (article) => article.slug
  )

  let paths = []
  articlePaths.forEach((article) => {
    article.split('/').filter((element) => {
      if (element !== '' && element !== 'actividades') {
        const slug = { params: { article: element } }
        paths.push(slug)
      }
    })
  })

  return paths
}
