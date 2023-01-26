import React from 'react'
import Head from 'next/head'

import Navbar  from './Navbar'
import Footer from './Footer'
import '../public/images/pressStart.jpg'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
        <Head>
            <title>Pixel Cart</title>
        </Head>
        <header>
            <Navbar />
        </header>
        <main className='main-container'>
            <img src="../public/images/pressStart.pg" alt="" />
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Layout