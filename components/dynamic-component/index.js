// Components
import { HeroTeaser } from '../ui-components/hero-teaser'
import { DesignSection } from '../ui-components/design-section'
import { SimpleSection } from '../ui-components/simple-section'
import { CtaSection } from '../ui-components/cta-section'
import { LeadTextSection } from '../ui-components/leadtext-section'
import { ImageWrapper } from '../ui-components/image-wrapper'
import { RichTextComponent } from '../ui-components/richtext-component'
import { SideBarText } from '../ui-components/sidebar-text'
// import { SliderWrapper } from '../ui-components/slider'
import { ArticleCluster } from '../ui-components/article-cluster'
import { ArticleHeader } from '../ui-components/article-header'

const COMPONENTS = {
  teaser: HeroTeaser,
  designSection: DesignSection,
  simpleSection: SimpleSection,
  ctaSection: CtaSection,
  leadTextSection: LeadTextSection,
  image: ImageWrapper,
  richTextComponent: RichTextComponent,
  sideBarText: SideBarText,
  // slider: SliderWrapper,
  articleCluster: ArticleCluster,
  articleHeader: ArticleHeader,
}

export const DynamicComponent = ({ blok, articleList, expo }) => {
  if (typeof COMPONENTS[blok.component] !== 'undefined') {
    const Component = COMPONENTS[blok.component]
    return <Component blok={blok} articleList={articleList} expo={expo} />
  }

  return null
}
