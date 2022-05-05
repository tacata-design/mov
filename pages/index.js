import Head from 'next/head'
import { getStoryblokData } from '../utils/storyblok'
import { DynamicComponent } from '../components/dynamic-component'
import styles from '../styles/Home.module.css'

export default function Home({ storyblokData }) {
  const pageContent = storyblokData.data.story.content.body.map((blok) => (
    <DynamicComponent key={blok._uid} blok={blok} />
  ))
  return (
    <>
      <Head>
        <meta name='description' content='Pagina de inicio de Estudio Mov' />
      </Head>
      {pageContent}
    </>
  )
}

export const getStaticProps = async () => {
  const storyblokData = await getStoryblokData('home')

  return {
    props: { storyblokData },
  }
}
