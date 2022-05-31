import { useRouter } from 'next/router'
import {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

// Components
import { Modal } from '../ui-components/modal'
import { logoSVG } from '../ui-components/svg'
// Styles
import styles from './header.module.css'

const {
  menuItems,
  headerModal,
  closeHeaderModal,
  mobileLinks,
  closeMobileLinks,
  headerWrapper,
  headerWrapperOpen,
  headerContainer,
  logoWrapper,
  navSection,
  ulStyle,
  menuButton,
  mobileMenu,
  green,
  greenLink,
} = styles

// const LinkComponent = ({ href, linkStyle, page, index, pathname }) => {
//   const [linkStyling, setLinkStyling] = useState(menuItems)
//   const linkClickHandler = () => {
//     console.log('CLICKED LINK:', href, index)
//   }

//   useEffect(() => {
//     console.log('USE EFFECT', pathname)
//     if (pathname === href) {
//       setLinkStyling(greenLink)
//     } else {
//       setLinkStyling(menuItems)
//     }
//   })

//   return (
//     <li key={href} className={linkStyling} onClick={linkClickHandler}>
//       <Link href={href}>{page}</Link>
//     </li>
//   )
// }

const HeaderLinksContext = createContext({
  clicked: false,
})

const useHeaderLinksContext = () => useContext(HeaderLinksContext)

export const Header = () => {
  const { pathname } = useRouter()
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [actividadesLink, setActividadesLink] = useState(false)
  const [guiasLink, setGuiasLink] = useState(false)
  const [regalosLink, setRegalosLink] = useState(false)
  const [exposicionesLink, setExposicionesLink] = useState(false)
  const [kitDigitalLink, setKitDigitalLink] = useState(false)
  const [rscLink, setRscLink] = useState(false)

  const modalStyle = isMenuOpen ? headerModal : closeHeaderModal
  const mobileNavItems = isMenuOpen ? mobileLinks : closeMobileLinks
  const headerWrapperStyles = isMenuOpen ? headerWrapperOpen : headerWrapper
  const pages = [
    {
      href: '/actividades',
      page: 'ACTIVIDADES',
    },
    {
      href: '/guias',
      page: 'GUIAS',
    },
    {
      href: '/regalos',
      page: 'REGALOS',
    },
    {
      href: '/exposiciones',
      page: 'EXPOSICIONES',
    },
    {
      href: '/kit-digital',
      page: 'KIT DIGITAL',
    },
    {
      href: '/rsc',
      page: 'RSC',
    },
  ]

  // TODO: change to hook
  const linkClickHandler = useCallback((href) => {
    if (href === '/actividades') {
      setActividadesLink(true)
      setGuiasLink(false)
      setRegalosLink(false)
      setExposicionesLink(false)
      setKitDigitalLink(false)
      setRscLink(false)
    } else if (href === '/guias') {
      setActividadesLink(false)
      setGuiasLink(true)
      setRegalosLink(false)
      setExposicionesLink(false)
      setKitDigitalLink(false)
      setRscLink(false)
    } else if (href === '/regalos') {
      setActividadesLink(false)
      setGuiasLink(false)
      setRegalosLink(true)
      setExposicionesLink(false)
      setKitDigitalLink(false)
      setRscLink(false)
    } else if (href === '/exposiciones') {
      setActividadesLink(false)
      setGuiasLink(false)
      setRegalosLink(false)
      setExposicionesLink(true)
      setKitDigitalLink(false)
      setRscLink(false)
    } else if (href === '/kit-digital') {
      setActividadesLink(false)
      setGuiasLink(false)
      setRegalosLink(false)
      setExposicionesLink(false)
      setKitDigitalLink(true)
      setRscLink(false)
    } else if (href === '/rsc') {
      setActividadesLink(false)
      setGuiasLink(false)
      setRegalosLink(false)
      setExposicionesLink(false)
      setKitDigitalLink(false)
      setRscLink(true)
    } else {
      setActividadesLink(false)
      setGuiasLink(false)
      setRegalosLink(false)
      setExposicionesLink(false)
      setKitDigitalLink(false)
      setRscLink(false)
    }
  }, [])

  useEffect(() => {
    linkClickHandler(pathname)
  }, [pathname, linkClickHandler])

  return (
    <>
      <header className={headerWrapperStyles}>
        <div className={headerContainer}>
          <div className={logoWrapper}>
            <Link href='/'>
              <a>{logoSVG(green)}</a>
            </Link>
          </div>
          <nav className={navSection}>
            <ul className={ulStyle}>
              <li
                className={actividadesLink ? greenLink : menuItems}
                onClick={() => linkClickHandler('/actividades')}
              >
                <Link href='/actividades'>ACTIVIDADES</Link>
              </li>
              <li
                className={guiasLink ? greenLink : menuItems}
                onClick={() => linkClickHandler('/guias')}
              >
                <Link href='/guias'>GUIAS</Link>
              </li>
              {/* <li
                className={regalosLink ? greenLink : menuItems}
                onClick={() => linkClickHandler('/regalos')}
              >
                <Link href='/regalos'>REGALOS</Link>
              </li> */}
              <li
                className={exposicionesLink ? greenLink : menuItems}
                onClick={() => linkClickHandler('/exposiciones')}
              >
                <Link href='/exposiciones'>EXPOSICIONES</Link>
              </li>
              <li
                className={kitDigitalLink ? greenLink : menuItems}
                onClick={() => linkClickHandler('/kit-digital')}
              >
                <Link href='/kit-digital'>KIT DIGITAL</Link>
              </li>
              {/* <li
                className={rscLink ? greenLink : menuItems}
                onClick={() => linkClickHandler('/rsc')}
              >
                <Link href='/rsc'>RSC</Link>
              </li> */}
            </ul>
          </nav>
          <button
            className={menuButton}
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faClose} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </header>
      <Modal
        className={modalStyle}
        onClickHandler={() => setMenuOpen(!isMenuOpen)}
      >
        <nav className={mobileMenu} onClick={() => setMenuOpen(!isMenuOpen)}>
          <ul>
            <li className={mobileNavItems}>
              <Link href='/actividades'>ACTIVIDADES</Link>
            </li>
            <li className={mobileNavItems}>
              <Link href='/guias'>GUÍAS</Link>
            </li>
            {/* <li className={mobileNavItems}>
              <Link href='/regalos'>REGALOS</Link>
            </li> */}
            <li className={mobileNavItems}>
              <Link href='/exposiciones'>EXPOSICIONES</Link>
            </li>
            <li className={mobileNavItems}>
              <Link href='/kit-digital'>KIT DIGITAL</Link>
            </li>
            {/* <li className={mobileNavItems}>
              <Link href='/rsc'>RSC</Link>
            </li> */}
          </ul>
        </nav>
      </Modal>
    </>
  )
}
