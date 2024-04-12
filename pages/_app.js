import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Head from 'next/head'
import { useEffect,useState } from 'react'
import '@/styles/globals.css'
import '@/styles/bootstrap.min.css'

import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
	useEffect(() => {
	if(typeof window !== "undefined"){
		require('bootstrap/dist/js/bootstrap.min.js')
	}
},[])
  return (
    <>
    <Head>
      <title>Project-4</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
	<Nav />
    <Component {...pageProps} />
	<Footer />
  </>
  )
}
