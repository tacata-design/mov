import Link from 'next/link'
import { RichTextComponent } from '../richtext-component'
import { PreviewComponent } from '../preview-component'
import { mainWrapper, richTextWrapper } from './articleCluster.module.css'

export const ArticleCluster = ({ blok }) => {
  const {
    data: {
      story: {
        content: { body },
        full_slug,
      },
    },
  } = blok

  const firstRichText = []
  const bodyContent = body.map((element) => {
    if (
      element.component === 'richTextComponent' &&
      firstRichText.length === 0
    ) {
      firstRichText.push(element)
    }
    if (element.component === 'articleHeader') {
      return <PreviewComponent key={element._uid} data={element} />
    }
  })

  const richTextParagraph = firstRichText.map((text) => (
    <RichTextComponent key={text._uid} blok={text} short />
  ))

  return (
    <div className={mainWrapper}>
      {bodyContent}
      <div className={richTextWrapper}>
        <Link href={full_slug}>
          <a>{richTextParagraph}</a>
        </Link>
      </div>
    </div>
  )
}
