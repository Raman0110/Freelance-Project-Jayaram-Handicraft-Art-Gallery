import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const handleLogIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      await axios.post("http://localhost:8000/api/auth/login", { email, password }, { withCredentials: true });
      navigate("/dashboard");
    } catch (error) {
      e.target.reset();
      toast.error(error.response.data.message, {
        closeButton: false,
        position: "top-center",
        autoClose: 2000
      })
    }
  }
  return (
    <section>
      <div className="flex relative">
        <ToastContainer />
        <div className="left-section w-3/4 max-lg:w-full">
          <div className="loginImgDiv h-[100vh]">
            <img src="/images/login.jpg" alt="" className='w-full h-full object-cover' />
          </div>
          <div className="loginForm max-sm:w-11/12 absolute top-[50%] left-[50%] max-lg:-translate-x-1/2 -translate-y-1/2 lg:left-[65%] p-6 rounded-md bg-white text-[#0D276A] shadow-md">
            <div className='flex justify-center pb-4'>
              <div className="imgDiv max-lg:w-[70px] w-[150px]">
                <img src="/images/logo.PNG" alt="" />
              </div>
            </div>
            <h2 className='text-lg font-bold'>Welcome to Jayram Handicraft Art Gallery</h2>
            <form onSubmit={handleLogIn} className='flex flex-col pt-5 gap-2 text-black font-medium'>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id='email' className='border rounded-sm p-1 outline-none text-gray-500' />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id='password' className='border rounded-sm p-1 outline-none text-gray-500' />
              <button type="submit" className='bg-[#E64D3D] block w-full text-white py-2 px-4 rounded-sm hover:bg-[#b23e31]'>Login</button>
            </form>
          </div>
        </div>

        <div className="right-section max-lg:w-0  w-1/4 bg-[#f1f1f1]" />

      </div>
    </section>
  )
}

export default Login