import style from './button.module.css'

const { buttonStyle } = style

export const Button = ({ blok, color, cta }) => {
  const { buttonText, buttonLink, buttonColor, target, onClick } = blok
  const [gotTo] = target

  const buttonHref =
    cta && buttonLink
      ? `mailto:${buttonLink}?subject=${cta}`
      : buttonLink
      ? buttonLink
      : null

  let element = (
    <button
      className={buttonStyle}
      style={{ background: buttonColor, color }}
      onClick={onClick}
    >
      {buttonText}
    </button>
  )
  if (buttonHref) {
    element = (
      <a
        className={buttonStyle}
        style={{ background: buttonColor, color }}
        href={buttonHref}
        target={gotTo}
      >
        {buttonText}
      </a>
    )
  }
  return element
}
