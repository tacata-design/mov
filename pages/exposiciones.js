import Head from 'next/head'
import { getStoryblokData } from '../utils/storyblok'
import { DynamicComponent } from '../components/dynamic-component'
import { SimpleSection } from '../components/ui-components/simple-section'
import { main } from '../styles/Shared.module.css'

export default function Exposiciones({ storyblokData }) {
  const pageContent = storyblokData.data.story.content.body.map(
    (blok, index) => {
      if (blok.component === 'simpleSection') {
        return <SimpleSection key={blok._uid} blok={blok} index={index} expo />
      } else {
        return <DynamicComponent key={blok._uid} blok={blok} />
      }
    }
  )
  return (
    <>
      <Head>
        <meta name='description' content='Guías de reciclaje Estudio Mov' />
      </Head>
      <main className={main}>{pageContent}</main>
    </>
  )
}

export const getStaticProps = async () => {
  const storyblokData = await getStoryblokData('exposiciones')

  return {
    props: { storyblokData },
  }
}
