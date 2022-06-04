import Link from 'next/link'
import { ImageWrapper } from '../ui-components/image-wrapper'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { SliderWrapper } from '../ui-components/slider'
import {
  footerSVG,
  logoSVG,
  facebookSVG,
  instaSVG,
  leafSVG,
  petalosSVG,
} from '../ui-components/svg'
import styles from './footer.module.css'

const {
  footer,
  customShapeDividerTop,
  mainBody,
  bottom,
  legalLinks,
  logoSection,
  logoWrapper,
  white,
  green,
  legalLinkWrapper,
  copyWright,
  linksSection,
  contactSection,
  contact,
  pageLinks,
  logoAddressSection,
  socialMedia,
  facebookWrapper,
  instaWrapper,
  addressBox,
  leaf,
  preFooterDesign,
  preFooterDesignInnerwrapper,
  sliderWrapper,
  sliderCustomShapeDivider,
  grey,
  petalosStyle,
  waveStyles,
  leafStyle,
} = styles

const HOME = '/'
const ACTIVIDADES = '/actividades'
const EXPOSICIONES = '/exposiciones'
const GUIAS = '/guias'
const WITHOUT_SLIDER_MARGIN = '150px'
const WITH_SLIDER_MARGIN = '0px'

export const Footer = ({ sliderData }) => {
  const { pathname } = useRouter()
  const [showDesignElement, setShowDesignElement] = useState(null)
  const [petalos, setPetalos] = useState(false)

  useEffect(() => {
    if (pathname === HOME || pathname === ACTIVIDADES) {
      setShowDesignElement(leafSVG(leaf))
      setPetalos(false)
    } else if (pathname === EXPOSICIONES) {
      setShowDesignElement(petalosSVG())
      setPetalos(true)
    } else {
      setShowDesignElement(null)
      setPetalos(false)
    }
  }, [pathname])

  const designElementStyles = petalos ? petalosStyle : leafStyle
  const designImage = petalos ? '/images/footer-leaf.png' : '/images/holas.png'

  return (
    <>
      {sliderData && (
        <div className={sliderWrapper}>
          <div className={sliderCustomShapeDivider}>{footerSVG(grey)}</div>
          <SliderWrapper blok={sliderData} />
        </div>
      )}
      <footer
        style={{
          marginTop: `${
            sliderData ? WITH_SLIDER_MARGIN : WITHOUT_SLIDER_MARGIN
          }`,
        }}
        className={footer}
      >
        {showDesignElement && (
          <div className={preFooterDesign}>
            <div className={preFooterDesignInnerwrapper}>
              <div className={designElementStyles}>{showDesignElement}</div>
              <div className={waveStyles}>
                <ImageWrapper
                  imageSrc={designImage}
                  width={petalos ? 200 : 300}
                  height={petalos ? 200 : 150}
                />
              </div>
            </div>
          </div>
        )}
        <div className={customShapeDividerTop}>{footerSVG(green)}</div>
        <div className={mainBody}>
          <div className={logoSection}>
            <div className={logoAddressSection}>
              <div className={logoWrapper}>
                <Link href='/'>
                  <a>{logoSVG(white)}</a>
                </Link>
              </div>
              <div className={addressBox}>
                <p>Calle Doctor Alcay 16 Oficina C</p>
                <p>50.006 Zaragoza</p>
              </div>
            </div>
            <div className={linksSection}>
              <ul className={pageLinks}>
                <li>
                  <Link href='/actividades'>
                    <a>Actividades</a>
                  </Link>
                </li>
                <li>
                  <Link href='/guias'>
                    <a>Guias</a>
                  </Link>
                </li>
                <li>
                  <Link href='/regalos'>
                    <a>Regalos</a>
                  </Link>
                </li>
                <li>
                  <Link href='/exposiciones'>
                    <a>Exposiciones</a>
                  </Link>
                </li>
                <li>
                  <Link href='/rsc'>
                    <a>RSC</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={contactSection}>
            <div className={contact}>
              <p>876 28 08 06</p>
              <p>info@estudiomov.es</p>
              <div className={socialMedia}>
                <div className={facebookWrapper}>
                  <Link href='/'>
                    <a>{facebookSVG(white)}</a>
                  </Link>
                </div>
                <div className={instaWrapper}>
                  <Link href='/'>
                    <a>{instaSVG(white)}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={bottom}>
          <div className={copyWright}>
            <p>&copy; 2021 Estudio Mov. Todos los derechos reservados.</p>
          </div>
          <div className={legalLinkWrapper}>
            <ul className={legalLinks}>
              <li>
                <Link href='/legal'>
                  <a>AVISO LEGAL</a>
                </Link>
              </li>
              <li>
                <Link href='/privacidad'>
                  <a>PRIVACIDAD</a>
                </Link>
              </li>
              <li>
                <Link href='/cookies'>
                  <a>COOKIES</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
