import Head from 'next/head'
import { getStoryblokData } from '../utils/storyblok'
// Components
import { ArticleHeaderKitDigital } from '../components/ui-components/article-header/ArticleHeaderKitDigital'
import { DynamicComponent } from '../components/dynamic-component'
import { Categories } from '../components/ui-components/categories'
import { TextFeature } from '../components/ui-components/text-feature'
import { SimpleSection } from '../components/ui-components/simple-section'
// Styles
import { main } from '../styles/KitDigital.module.css'

export default function KitDigital({ storyblokData }) {
  const categories = []
  const simpleContent = []
  const pageContent = storyblokData.data.story.content.body.map((blok) => {
    if (blok.component === 'articleHeader') {
      return <ArticleHeaderKitDigital key={blok._uid} blok={blok} />
    }
    if (blok.component === 'categories') {
      categories.push(<Categories key={blok._uid} blok={blok} />)
    }
    if (blok.component === 'textFeature') {
      return <TextFeature key={blok._uid} blok={blok} />
    }
    if (blok.component === 'simpleSection') {
      simpleContent.push(<SimpleSection key={blok._uid} blok={blok} expo />)
    } else {
      return <DynamicComponent key={blok._uid} blok={blok} secondary />
    }
  })
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Estudio Mov somos un grupo de profesionales apasionados del Marketing que creemos en las personas.'
        />
      </Head>
      <>
        <main className={main}>{pageContent}</main>
        {categories}
        <div className={main}>{simpleContent}</div>
      </>
    </>
  )
}

export const getStaticProps = async () => {
  const storyblokData = await getStoryblokData('kit-digital')

  return {
    props: { storyblokData },
  }
}
