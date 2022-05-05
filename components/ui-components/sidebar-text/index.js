import { RichTextComponent } from '../richtext-component'
import { authorStyles, sidebarWrapper } from './sidebarText.module.css'

export const SideBarText = ({ blok }) => {
  console.log('THE FUUKIN SIDEBAR:', blok)
  const { author, textColor } = blok

  return (
    <div className={sidebarWrapper}>
      <RichTextComponent blok={blok} color={textColor} />
      <p className={authorStyles}>{author}</p>
    </div>
  )
}
