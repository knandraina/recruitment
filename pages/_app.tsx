
import type { AppProps } from 'next/app'

import Script from 'next/script'
import * as snippet from '@segment/snippet'

import 'tailwindcss/tailwind.css'
import Page from '../components/Page/Page'

function MyApp({ Component, pageProps }: AppProps) {

  const loadSegment = () => {
    const options = {
      apiKey: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY,
      page: true
    }
    if (process.env.NEXT_PUBLIC_NODE_ENV) {
      return snippet.max(options)
    } else {
      return snippet.min(options)
    }
  }


  return (


    <>
      <Script
        dangerouslySetInnerHTML={{ __html: loadSegment() }}
        id="segmentScript"
      />
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  )
}

export default MyApp
