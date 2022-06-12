import {
  mainWrapper,
  primaryTextStyles,
  secondaryTextStyles,
} from './textFeature.module.css'

export const TextFeature = ({ blok }) => {
  const { textOne, textTwo } = blok
  return (
    <div className={mainWrapper}>
      <p className={primaryTextStyles}>{textOne}</p>
      <p className={secondaryTextStyles}>{textTwo}</p>
    </div>
  )
}
