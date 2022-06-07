// Components
import { Button } from '../button'
// Styles
import styles from './ctaSection.module.css'

const { ctaSectionWrapper, ctaButtonWrapper } = styles

export const CtaSection = ({ blok }) => {
  const { title, cta } = blok
  const ctaButton = cta.map((element) => (
    <Button key={element._uid} blok={element} cta={title} />
  ))
  return (
    <div className={ctaSectionWrapper}>
      <h2>{title}</h2>
      <div className={ctaButtonWrapper}>{ctaButton}</div>
    </div>
  )
}
