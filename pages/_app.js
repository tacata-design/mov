// Components
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '../components/layout'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const [sliderData, setSliderData] = useState(null)
  const { pathname } = useRouter()
  if (pathname !== '/guias' && sliderData !== null) {
    setSliderData(null)
  }
  const sliderDataHandler = (data) => {
    setSliderData(data)
  }
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <Layout sliderData={sliderData}>
        <Component {...pageProps} getSliderData={sliderDataHandler} />
      </Layout>
    </>
  )
}
