// Components
import { Media } from '../media'
import { Button } from '../button'
import { footerSVG } from '../svg'
// Styles
import styles from './simpleSection.module.css'

const {
  simpleSectionWrapper,
  imageWrapper,
  simpleSectionTitleWrapper,
  ctaButtonWrapper,
  rightCtaButtonWrapper,
  white,
  customShapeDividerTop,
  customShapeDividerBottom,
  textContentWrapper,
  leftTextContentWrapper,
  leftImageWrapper,
  leftTitle,
  leftText,
} = styles

export const SimpleSection = ({ blok, expo }) => {
  const {
    title,
    subtitle,
    cta,
    imagePosition,
    backgroundColor,
    titleColor,
    textColor,
    sectionMedia,
  } = blok
  const [media] = sectionMedia

  const ctaButton = cta.map((element) => (
    <Button key={element._uid} blok={element} />
  ))

  const margin = expo ? '-3px' : undefined
  const content =
    imagePosition && imagePosition === 'left' ? (
      <div style={{ margin }} className={simpleSectionWrapper}>
        {!expo ? (
          <div className={customShapeDividerTop}>{footerSVG(white)}</div>
        ) : null}
        <div className={imageWrapper}>{media && <Media blok={media} />}</div>
        <div className={textContentWrapper}>
          <div
            style={{ backgroundColor, height: '100%' }}
            className={simpleSectionTitleWrapper}
          >
            <h2 style={{ color: titleColor }}>{title}</h2>
            <p style={{ color: textColor }}>{subtitle}</p>
            <div className={ctaButtonWrapper}>{ctaButton}</div>
          </div>
        </div>
        {!expo && (
          <div className={customShapeDividerBottom}>{footerSVG(white)}</div>
        )}
      </div>
    ) : (
      <div style={{ margin }} className={simpleSectionWrapper}>
        {!expo && (
          <div className={customShapeDividerTop}>{footerSVG(white)}</div>
        )}
        <div className={leftTextContentWrapper}>
          <div
            style={{ backgroundColor, height: '100%' }}
            className={simpleSectionTitleWrapper}
          >
            <h2 style={{ color: titleColor }} className={leftTitle}>
              {title}
            </h2>
            <p style={{ color: textColor }} className={leftText}>
              {subtitle}
            </p>
            <div className={rightCtaButtonWrapper}>{ctaButton}</div>
          </div>
        </div>
        <div className={leftImageWrapper}>
          {media && <Media blok={media} />}
        </div>
        {!expo && (
          <div className={customShapeDividerBottom}>{footerSVG(white)}</div>
        )}
      </div>
    )

  return content
}
