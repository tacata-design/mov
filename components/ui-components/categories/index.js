// Components
import { RichTextComponent } from '../richtext-component'
import { Button } from '../button'
// Styles
import {
  main,
  ctaSection,
  headerSection,
  richTextStyles,
} from './categories.module.css'

export const Categories = ({ blok }) => {
  const { intro, introTitle, title, backgroundColor, content, ctaContent } =
    blok

  const ctaArea = ctaContent.map((button) => (
    <Button key={button._uid} blok={button} color={backgroundColor} />
  ))

  return (
    <div style={{ width: '100%', backgroundColor }}>
      <div className={main}>
        <div className={headerSection}>
          <p>{intro}</p>
          <p>{introTitle}</p>
          <h2>{title}</h2>
        </div>
        <div className={richTextStyles}>
          <RichTextComponent blok={{ text: content }} />
        </div>
        <div className={ctaSection}>{ctaArea}</div>
      </div>
    </div>
  )
}
