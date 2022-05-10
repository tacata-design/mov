import { ImageWrapper } from '../image-wrapper'
import { mainWrapper, titleStyles } from './previewComponent.module.css'

export const PreviewComponent = ({ data }) => {
  const image = data.image ? (
    <ImageWrapper blok={data.image[0]} width={1024} height={640} />
  ) : null
  const title = data.title ? (
    <h2 className={titleStyles}>{data.title}</h2>
  ) : null

  return (
    <div className={mainWrapper}>
      {image}
      {title}
    </div>
  )
}
