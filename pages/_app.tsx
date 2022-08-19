import 'tailwindcss/tailwind.css'
import Page from '../components/Page/Page'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps ) {
  return (

    <>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  )
}

export default MyApp
