import Head from 'next/head'
import { getStoryblokData } from '../../utils/storyblok'
// Components
import { LeadTextSection } from '../../components/ui-components/leadtext-section'
import { ArticleCluster } from '../../components/ui-components/article-cluster'
import { ImageWrapper } from '../../components/ui-components/image-wrapper'
// Styles
import styles from '../../styles/actividades.module.css'
import { main } from '../../styles/shared.module.css'

const {
  mainWrapper,
  outsideWrapper,
  rightDesignElement,
  rightDesignElementWrapper,
  leftDesignElement,
  leftDesignElementWrapper,
  rightBottomDesignElement,
} = styles

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
      <div className={outsideWrapper}>
        <div className={rightDesignElement}>
          <div className={rightDesignElementWrapper}>
            <ImageWrapper
              imageSrc={'/images/actividades-1.png'}
              imageAlt='elemento-decorativo-1'
              width={250}
              height={350}
            />
          </div>
        </div>
        <div className={leftDesignElement}>
          <div className={leftDesignElementWrapper}>
            <ImageWrapper
              imageSrc={'/images/gotas.png'}
              imageAlt='gotas'
              width={190}
              height={240}
            />
          </div>
        </div>
        <div className={rightBottomDesignElement}>
          <div className={rightDesignElementWrapper}>
            <ImageWrapper
              imageSrc={'/images/actividades-3.png'}
              imageAlt='elemento-decorativo-3'
              width={250}
              height={250}
            />
          </div>
        </div>
        <main className={main}>
          <div className={mainWrapper}>
            {headerContent}
            {contentCluster}
          </div>
        </main>
      </div>
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
  }
}

const getSelectedArticle = async (id) => {
  const response = await getStoryblokData(id, {
    find_by: 'uuid',
  })

  return response
}
