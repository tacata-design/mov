import Head from 'next/head'
import { useEffect } from 'react'
import { getStoryblokData } from '../utils/storyblok'
// Components
import { ArticleHeader } from '../components/ui-components/article-header'
import { DynamicComponent } from '../components/dynamic-component'
import { ImageWrapper } from '../components/ui-components/image-wrapper'
// Styles
import {
  mainWrapper,
  bodyContent,
  outsideWrapper,
  rightDesignElement,
  rightDesignElementWrapper,
  rightBottomDesignElement,
  rightBottomDesignElementWrapper,
  leftDesignElement,
  leftDesignElementWrapper,
} from '../styles/Guias.module.css'
import { main } from '../styles/shared.module.css'

const COMPONENTS = {
  articleHeader: ArticleHeader,
}

export default function Guias({ storyblokData, getSliderData }) {
  let headerContent = null
  const pageContent = storyblokData.data.story.content.body.map((blok) => {
    if (blok.component && COMPONENTS[blok.component]) {
      const ArticleHeaderComponent = COMPONENTS[blok.component]
      headerContent = <ArticleHeaderComponent key={blok._uid} blok={blok} />
    } else {
      return <DynamicComponent key={blok._uid} blok={blok} />
    }
  })

  useEffect(() => {
    storyblokData.data.story.content.body.forEach((blok) => {
      if (blok.component === 'slider') {
        getSliderData(blok)
      }
    })
  }, [getSliderData, storyblokData])

  return (
    <>
      <Head>
        <meta name='description' content='Guías de reciclaje Estudio Mov' />
      </Head>
      <div className={outsideWrapper}>
        <div className={rightDesignElement}>
          <div className={rightDesignElementWrapper}>
            <ImageWrapper
              imageSrc={'/images/rama-vieja.png'}
              imageAlt='elemento-decorativo'
              width={250}
              height={350}
            />
          </div>
        </div>
        <div className={leftDesignElement}>
          <div className={leftDesignElementWrapper}>
            <ImageWrapper
              imageSrc={'/images/gotas.png'}
              imageAlt='gotas decorativos'
              width={200}
              height={250}
            />
          </div>
        </div>
        <div className={rightBottomDesignElement}>
          <div className={rightBottomDesignElementWrapper}>
            <ImageWrapper
              imageSrc={'/images/cactus.png'}
              imageAlt='elemento-decorativo'
              width={350}
              height={550}
            />
          </div>
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

export const getStaticProps = async () => {
  const storyblokData = await getStoryblokData('guias')

  return {
    props: { storyblokData },
  }
}
