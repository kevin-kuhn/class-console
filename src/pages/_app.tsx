import type { AppProps } from 'next/app'

import '../styles/global.css'

import { ClassProvider } from '../contexts/ClassContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClassProvider>
      <Component {...pageProps} />
    </ClassProvider>
  )
}

export default MyApp
