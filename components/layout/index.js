import Head from 'next/head'

// Components
import { Header } from '../header'
import { Footer } from '../footer'

export const Layout = ({ children, sliderData }) => {
  return (
    <>
      <Head>
        <title>Estudio Mov</title>
      </Head>
      <Header />
      {children}
      <Footer sliderData={sliderData} />
    </>
  )
}
