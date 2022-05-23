import Head from 'next/head'

// Components
import { Header } from '../header'
import { Footer } from '../footer'

export const Layout = ({ children, sliderData }) => {
  return (
    <>
      <Head>
        <title>Estudio Mov</title>
        <link
          rel='preload'
          href='/fonts/Oxygen-Regular.ttf'
          as='font'
          crossOrigin=''
        />
      </Head>
      <Header />
      {children}
      <Footer sliderData={sliderData} />
    </>
  )
}
