import Link from 'next/link'
// Components
import { RichTextComponent } from '../richtext-component'
import { PreviewComponent } from '../preview-component'
// Styles
import {
  mainWrapper,
  richTextWrapper,
  previewParagraphStyles,
} from './articleCluster.module.css'

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
          <a className={previewParagraphStyles}>{richTextParagraph}</a>
        </Link>
      </div>
    </div>
  )
}
