// Components
import { Button } from '../button'
import { Media } from '../media'
import { ImageWrapper } from '../image-wrapper'
// Styles
import styles from './designSection.module.css'

const {
  designSectionWrapper,
  imageWrapper,
  designSectionTitleWrapper,
  ctaButtonWrapper,
  textArea,
  designElementWrapper,
} = styles

export const DesignSection = ({ blok }) => {
  const { sectionMedia, title, subtitle, cta } = blok
  const [media] = sectionMedia
  const ctaButton = cta.map((element) => (
    <Button key={element._uid} blok={element} />
  ))
  return (
    <div className={designSectionWrapper}>
      <div className={imageWrapper}>
        <Media blok={media} priority />
      </div>
      <div className={designSectionTitleWrapper}>
        <div className={textArea}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <div className={ctaButtonWrapper}>{ctaButton}</div>
        </div>
        <div className={designElementWrapper}>
          <ImageWrapper
            imageSrc={'/images/anillos.png'}
            imageAlt='anillos-decorativo'
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  )
}
