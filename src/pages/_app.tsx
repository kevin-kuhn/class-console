import type { AppProps } from 'next/app'

import { SWRConfig } from 'swr'
import axios from 'axios'

import '../styles/global.css'

import { ClassProvider } from '../contexts/ClassContext'

const api = axios.create({
  baseURL: 'https://bff-qa.mesalva.com/json/pages/'
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fallback: pageProps.fallback,
        fetcher: url => api.get(url).then(res => res.data),
        revalidateIfStale: false,
        revalidateOnFocus: true,
        revalidateOnReconnect: false
      }}
    >
      <ClassProvider pageId={pageProps.id}>
        <Component {...pageProps} />
      </ClassProvider>
    </SWRConfig>
  )
}

export default MyApp
