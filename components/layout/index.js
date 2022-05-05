import Head from 'next/head'

// Components
import { Header } from '../header'
import { Footer } from '../footer'

// Styles
import styles from './layout.module.css'

const { main } = styles

export const Layout = ({ children, sliderData }) => {
  return (
    <>
      <Head>
        <title>Estudio Mov</title>
      </Head>
      <Header />
      <main className={main}>{children}</main>
      <Footer sliderData={sliderData} />
    </>
  )
}
