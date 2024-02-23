"use client"
import './globals.css'

import Head from 'next/head'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <title>Sushant Photography</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <body >
      
        {children}</body>
    </html>
  )
}
