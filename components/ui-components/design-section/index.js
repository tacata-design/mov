import Image from 'next/image'
// Components
import { Button } from '../button'
// Styles
import styles from './designSection.module.css'

const {
  designSectionWrapper,
  imageWrapper,
  designSectionTitleWrapper,
  ctaButtonWrapper,
  textArea,
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
        {/* <div className={designElementWrapper}>
          <div className={designElement}>
            <Image
              src={'/images/circulos-decorativos.png'}
              alt='circulo-decorativo'
              layout='fill'
              priority
            />
          </div>
        </div> */}
      </div>
    </div>
  )
}
