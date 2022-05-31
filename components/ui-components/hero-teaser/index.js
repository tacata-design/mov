import Image from 'next/image'

// Styles
import styles from './hero.module.css'
// Components
import { Button } from '../button'
import { ImageWrapper } from '../image-wrapper'

const {
  heroWrapper,
  imageWrapper,
  heroTitleWrapper,
  boldTitle,
  designElement,
  designElementWrapper,
  ctaButtonWrapper,
} = styles

export const HeroTeaser = ({ blok }) => {
  const { image, intro, title, subtitle, cta } = blok
  const ctaButton = cta.map((element) => (
    <Button key={element._uid} blok={element} />
  ))
  return (
    <div className={heroWrapper}>
      <div className={heroTitleWrapper}>
        <h1>
          {intro}
          <span className={boldTitle}>{` ${title}`}</span>
        </h1>
        <h2>{subtitle}</h2>
        <div className={ctaButtonWrapper}>{ctaButton}</div>
        <div className={designElementWrapper}>
          <div className={designElement}>
            <Image
              src={'/images/circulos-decorativos.png'}
              alt='circulo-decorativo'
              layout='fill'
              priority
            />
          </div>
        </div>
      </div>
      <div className={imageWrapper}>
        <ImageWrapper imageSrc={image.filename} imageAlt={image.alt} priority />
      </div>
    </div>
  )
}
