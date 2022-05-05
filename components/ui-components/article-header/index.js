import { ImageWrapper } from '../image-wrapper'
import { mainWrapper, titleStyles } from './articleHeader.module.css'

export const ArticleHeader = ({ blok }) => {
  const { image, title, leadText } = blok
  const [src] = image

  return (
    <div className={mainWrapper}>
      <h1 className={titleStyles}>{title}</h1>
      <h2>{leadText}</h2>
      <ImageWrapper blok={src} blur />
    </div>
  )
}
