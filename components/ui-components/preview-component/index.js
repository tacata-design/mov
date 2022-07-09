import Link from 'next/link'
import { Media } from '../media'
import { mainWrapper, titleStyles } from './previewComponent.module.css'

export const PreviewComponent = ({ data, href }) => {
  const { headerMedia } = data

  let media = null
  if (headerMedia) {
    media = headerMedia[0]
  }

  const title = data.title ? (
    <h2 className={titleStyles}>{data.title}</h2>
  ) : null

  return (
    <div className={mainWrapper}>
      {media && <Media blok={media} />}
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </div>
  )
}
