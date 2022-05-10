import style from './button.module.css'

const { buttonStyle } = style

export const Button = ({ blok, color }) => {
  const { buttonText, buttonLink, buttonColor, target, onClick } = blok
  const [gotTo] = target

  let element = (
    <button
      className={buttonStyle}
      style={{ background: buttonColor, color }}
      onClick={onClick}
    >
      {buttonText}
    </button>
  )
  if (buttonLink) {
    element = (
      <a
        className={buttonStyle}
        style={{ background: buttonColor }}
        href={buttonLink}
        target={gotTo}
      >
        {buttonText}
      </a>
    )
  }
  return element
}
