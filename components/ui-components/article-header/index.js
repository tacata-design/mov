import { Media } from '../media'
// Styles
import { mainWrapper, titleStyles } from './articleHeader.module.css'

export const ArticleHeader = ({ blok }) => {
  const { headerMedia, title, leadText } = blok
  const [media] = headerMedia

  return (
    <div className={mainWrapper}>
      <h1 className={titleStyles}>{title}</h1>
      <h2>{leadText}</h2>
      {media && <Media blok={media} priority />}
    </div>
  )
}
