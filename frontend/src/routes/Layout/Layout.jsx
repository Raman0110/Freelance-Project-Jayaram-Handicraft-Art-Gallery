import React from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import ScrollTop from '../../components/ScrollTop/ScrollTop.jsx'
import { HelmetProvider } from 'react-helmet-async';

const Layout = () => {
  return (
    <HelmetProvider>
      <div className='layout'>
        <ScrollTop />
        <Header />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default Layout