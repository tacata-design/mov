import Image from 'next/image'

// Styles
import styles from './simpleSection.module.css'
// Components
import { Button } from '../button'
import { footerSVG } from '../svg'

const {
  simpleSectionWrapper,
  imageWrapper,
  simpleSectionTitleWrapper,
  ctaButtonWrapper,
  white,
  customShapeDividerTop,
  customShapeDividerBottom,
} = styles

export const SimpleSection = ({ blok, expo }) => {
  const {
    image: { filename, alt },
    title,
    subtitle,
    cta,
    imagePosition,
    backgroundColor,
    titleColor,
    textColor,
  } = blok

  const ctaButton = cta.map((element) => (
    <Button key={element._uid} blok={element} />
  ))

  const margin = expo ? '0px' : '24px'

  const content =
    imagePosition && imagePosition === 'left' ? (
      <div style={{ margin }} className={simpleSectionWrapper}>
        <div className={customShapeDividerTop}>{footerSVG(white)}</div>
        <div className={imageWrapper}>
          {filename && (
            <Image src={filename} alt={alt} width={720} height={640} />
          )}
        </div>
        <div className={simpleSectionTitleWrapper} style={{ backgroundColor }}>
          <h2 style={{ color: titleColor }}>{title}</h2>
          <h3 style={{ color: textColor }}>{subtitle}</h3>
          <div className={ctaButtonWrapper}>{ctaButton}</div>
        </div>
        <div className={customShapeDividerBottom}>{footerSVG(white)}</div>
      </div>
    ) : (
      <div style={{ margin }} className={simpleSectionWrapper}>
        <div className={customShapeDividerTop}>{footerSVG(white)}</div>
        <div className={simpleSectionTitleWrapper} style={{ backgroundColor }}>
          <h2 style={{ color: titleColor }}>{title}</h2>
          <h3 style={{ color: textColor }}>{subtitle}</h3>
          <div className={ctaButtonWrapper}>{ctaButton}</div>
        </div>
        <div className={imageWrapper}>
          {filename && (
            <Image src={filename} alt={alt} width={720} height={640} />
          )}
        </div>
        <div className={customShapeDividerBottom}>{footerSVG(white)}</div>
      </div>
    )

  return content
}
