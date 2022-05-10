import {
  mainWrapper,
  titleStyles,
  secondaryTitleStyles,
  leadTextWrapper,
} from './leadtext.module.css'

export const LeadTextSection = ({ blok, secondary }) => {
  const { title, leadText } = blok

  return secondary ? (
    <div className={mainWrapper}>
      <h2 className={secondaryTitleStyles}>{title}</h2>
      {leadText && (
        <div className={leadTextWrapper}>
          <p>{leadText}</p>
        </div>
      )}
    </div>
  ) : (
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
