/* eslint-disable @next/next/no-page-custom-font */
import { useEffect } from 'react'
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import {ThemeProvider} from '@mui/material'
import theme from 'ui/themes/theme'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
      document.querySelector('#jss-server-side')?.remove();
  }, [])
  return (
    <>
      <Head>
        <title>e-diaristas</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
