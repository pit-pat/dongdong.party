import '@/styles/globalstyle.scss'

import App, { AppContext, AppInitialProps, AppProps } from 'next/app'

import { NextComponentType } from 'next'
import React from 'react'

const DongDongPartyApp: NextComponentType<
  AppContext,
  AppInitialProps,
  AppProps
> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

DongDongPartyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default DongDongPartyApp
