import Head from 'next/head'
import { getStoryblokData } from '../utils/storyblok'
import { DynamicComponent } from '../components/dynamic-component'

export default function Home({ storyblokData }) {
  const pageContent = storyblokData.data.story.content.body.map((blok) => (
    <DynamicComponent key={blok._uid} blok={blok} />
  ))
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Estudio Mov somos un grupo de profesionales apasionados del Marketing que creemos en las personas.'
        />
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
