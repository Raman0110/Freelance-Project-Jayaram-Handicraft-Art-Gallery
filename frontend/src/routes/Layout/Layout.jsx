import React from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout