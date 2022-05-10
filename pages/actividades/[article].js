import Head from 'next/head'
import { getStoryblokLinks, getStoryblokData } from '../../utils/storyblok'

// Components
import { DynamicComponent } from '../../components/dynamic-component'
import { ArticleHeader } from '../../components/ui-components/article-header'

// Styles
import { main } from '../../styles/shared.module.css'
import { mainWrapper, bodyContent } from '../../styles/article.module.css'

const PAGE_PATH = 'actividades'
const COMPONENTS = {
  articleHeader: ArticleHeader,
}

export default function Article({ storyblokData }) {
  let headerContent = null
  const pageContent = storyblokData?.data?.story?.content?.body?.map((blok) => {
    if (blok.component && COMPONENTS[blok.component]) {
      const ArticleHeaderComponent = COMPONENTS[blok.component]
      headerContent = <ArticleHeaderComponent key={blok._uid} blok={blok} />
    } else {
      return <DynamicComponent key={blok._uid} blok={blok} />
    }
  })

  return (
    <>
      <Head>
        <meta
          name='description'
          content='Todas las actividades de Estudio Mov'
        />
      </Head>
      <main className={main}>
        <div className={mainWrapper}>
          {headerContent}
          <div className={bodyContent}>{pageContent}</div>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths = async () =>
  await getStoryblokLinks({ starts_with: 'actividades' })
export const getStaticProps = async (context) => {
  const { article } = context?.params
  const path = [PAGE_PATH, article].join('/')
  const storyblokData = await getStoryblokData(path)

  return {
    props: { storyblokData },
  }
}
