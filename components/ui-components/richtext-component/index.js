import { renderRichtext } from '../../../utils/storyblok'

export const RichTextComponent = ({ blok, short, color }) => {
  const { text, textColor } = blok
  if (short) {
    const [firstParagraph] = text.content

    const reducedContent = {
      type: 'doc',
      content: [firstParagraph],
    }

    const HTML = renderRichtext(reducedContent)
    return (
      <>
        <div style={{ fontWeight: 'normal' }} dangerouslySetInnerHTML={HTML} />
        <span style={{ fontWeight: 'bold' }}>Más...</span>
      </>
    )
  } else {
    const HTML = renderRichtext(text)
    return (
      <div
        style={{ color: `${color ?? textColor}` }}
        dangerouslySetInnerHTML={HTML}
      />
    )
  }
}
