import Image from 'next/image'
// Components
import { Button } from '../button'
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
  const { image, title, subtitle, cta } = blok
  const ctaButton = cta.map((element) => (
    <Button key={element._uid} blok={element} />
  ))
  return (
    <div className={designSectionWrapper}>
      <div className={imageWrapper}>
        <Image
          src={image.filename}
          alt={image.alt}
          width={1280}
          height={720}
          priority
        />
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
