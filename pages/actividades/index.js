import Head from 'next/head'
import { getStoryblokData } from '../../utils/storyblok'
// Components
import { LeadTextSection } from '../../components/ui-components/leadtext-section'
import { ArticleCluster } from '../../components/ui-components/article-cluster'
// Styles
import styles from '../../styles/Actividades.module.css'
import { main } from '../../styles/Shared.module.css'

const { mainWrapper } = styles

const COMPONENTS = {
  leadTextSection: LeadTextSection,
}

export default function Actividades({ storyblokData, articleList }) {
  const headerContent = storyblokData?.data?.story?.content?.body?.map(
    (blok) => {
      if (blok.component && COMPONENTS[blok.component]) {
        const Component = COMPONENTS[blok.component]
        return <Component key={blok._uid} blok={blok} />
      }
    }
  )

  const contentCluster = articleList.map((article) => (
    <ArticleCluster key={article.data.story.uuid} blok={article} />
  ))

  return (
    <>
      <Head>
        <meta name='description' content='Guías de reciclaje Estudio Mov' />
      </Head>
      <main className={main}>
        <div className={mainWrapper}>
          {headerContent}
          {contentCluster}
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const storyblokData = await getStoryblokData('actividades')
  const [articleCluster] = storyblokData.data.story.content.body.filter(
    (blok) => blok.component === 'articleCluster'
  )
  const { publishedArticles } = articleCluster

  let articleList = null
  if (publishedArticles.length !== 0) {
    articleList = await Promise.all([
      ...publishedArticles.map((id) => getSelectedArticle(id)),
    ])
  }

  return {
    props: { storyblokData, articleList },
    revalidate: 10,
  }
}

const getSelectedArticle = async (id) => {
  const response = await getStoryblokData(id, {
    find_by: 'uuid',
  })

  return response
}
