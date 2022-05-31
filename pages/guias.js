import Head from 'next/head'
import { useEffect } from 'react'
import { getStoryblokData } from '../utils/storyblok'
// Components
import { ArticleHeader } from '../components/ui-components/article-header'
import { DynamicComponent } from '../components/dynamic-component'
// Styles
import { mainWrapper, bodyContent } from '../styles/Guias.module.css'
import { main } from '../styles/Shared.module.css'

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
      <main className={main}>
        <div className={mainWrapper}>
          {headerContent}
          <div className={bodyContent}>{pageContent}</div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const storyblokData = await getStoryblokData('guias')

  return {
    props: { storyblokData },
  }
}
