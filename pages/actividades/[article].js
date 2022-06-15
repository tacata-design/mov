import Head from 'next/head'
import { getStoryblokLinks, getStoryblokData } from '../../utils/storyblok'
// Components
import { DynamicComponent } from '../../components/dynamic-component'
import { ArticleHeader } from '../../components/ui-components/article-header'
import { ImageWrapper } from '../../components/ui-components/image-wrapper'
import { nutSVG } from '../../components/ui-components/svg'
// Styles
import { main } from '../../styles/shared.module.css'
import {
  mainWrapper,
  bodyContent,
  outsideWrapper,
  leftDesignElement,
  leftDesignElementWrapper,
  rightDesignElement,
  rightDesignElementWrapper,
  nutDesignElementWrapper,
  rightBottomDesignElement,
  leftSecondaryDesignElement,
} from '../../styles/article.module.css'

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
      <div className={outsideWrapper}>
        <div className={leftDesignElement}>
          <div className={leftDesignElementWrapper}>
            <ImageWrapper
              imageSrc={'/images/circulos-decorativos.png'}
              imageAlt='circulos decorativos'
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className={leftSecondaryDesignElement}>
          <div className={leftDesignElementWrapper}>
            <ImageWrapper
              imageSrc={'/images/rama.png'}
              imageAlt='rama decorativo'
              width={250}
              height={250}
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
        <div className={rightDesignElement}>
          <div className={nutDesignElementWrapper}>{nutSVG()}</div>
        </div>
        <main className={main}>
          <div className={mainWrapper}>
            {headerContent}
            <div className={bodyContent}>{pageContent}</div>
          </div>
        </main>
      </div>
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
