import { getStoryblokData } from '../utils/storyblok'
import { DynamicComponent } from '../components/dynamic-component'
import { main } from '../styles/shared.module.css'
import { bodyContent } from '../styles/article.module.css'

export default function AvisoLegal({ storyblokData }) {
  const pageContent = storyblokData.data.story.content.body.map((blok) => (
    <DynamicComponent key={blok._uid} blok={blok} />
  ))

  return (
    <div className={main}>
      <div className={bodyContent}>{pageContent}</div>
    </div>
  )
}

export const getStaticProps = async () => {
  const storyblokData = await getStoryblokData('aviso-legal')

  return {
    props: { storyblokData },
  }
}
