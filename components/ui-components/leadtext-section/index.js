import {
  mainWrapper,
  titleStyles,
  leadTextWrapper,
} from './leadtext.module.css'

export const LeadTextSection = ({ blok }) => {
  const { title, leadText } = blok
  return (
    <div className={mainWrapper}>
      <h1 className={titleStyles}>{title}</h1>
      {leadText && (
        <div className={leadTextWrapper}>
          <p>{leadText}</p>
        </div>
      )}
    </div>
  )
}
