
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';


import { AnalyticsBrowser } from '@segment/analytics-next'

import 'tailwindcss/tailwind.css'
import Page from '../components/Page/Page'
import { useEffect } from 'react'
import NavBar from '../components/Element/NavBar'

const apiKey: any = process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY
const analytics = AnalyticsBrowser.load({ writeKey: apiKey })


function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    analytics.page()
  })

  return (
    <>
      
        <Page>
          <Component {...pageProps} />
        </Page>
    </>
  )
}

export default appWithTranslation(MyApp);
