
import React from 'react'
import { Outlet } from 'react-router-dom'
import 'react-slidedown/lib/slidedown.css'
import Sidebar from '../../components/AdminSideBar/Sidebar'
import Topbar from '../../components/AdminTopBar/Topbar'

const DashboardLayout = () => {


  return (
    <section className='flex bg-[#F2F6FE]'>
      <Sidebar />
      <main className='flex-grow'>
        <Topbar />
        <Outlet />
      </main>
    </section >
  )
}

export default DashboardLayout