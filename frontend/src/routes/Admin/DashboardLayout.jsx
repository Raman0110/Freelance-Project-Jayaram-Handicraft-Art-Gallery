
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import 'react-slidedown/lib/slidedown.css'
import Sidebar from '../../components/AdminSideBar/Sidebar'
import Topbar from '../../components/AdminTopBar/Topbar'
import axios from 'axios'
import Loading from "../../components/Loading/Loading.jsx"

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    axios.get("http://192.168.1.71:8000/api/auth/authenticate", { withCredentials: true })
      .then((res) => {
        if (!res.data.isAdmin) {
          setIsAdmin(false);
          navigate("/login");
        } else {
          setIsAdmin(true);
        }
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      })
  }, [navigate]);
  if (!isAdmin) {
    return (
      <div className=' h-[100vh] flex justify-center items-center'>
        <Loading />
      </div>
    )
  }
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