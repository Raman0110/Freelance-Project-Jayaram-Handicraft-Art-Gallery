import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section>
      <div className="flex relative">
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
            <form action="" className='flex flex-col pt-5 gap-2 text-black font-medium'>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id='email' className='border rounded-sm p-1 outline-none text-gray-500' />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id='email' className='border rounded-sm p-1 outline-none text-gray-500' />
              <a href="">Forget Password?</a>
              <Link to="/">
                <button className='bg-[#E64D3D] block w-full text-white py-2 px-4 rounded-sm hover:bg-[#b23e31]'>Login</button>
              </Link>
            </form>
            <div className='text-center mt-2'>
              <p>Don't have an account? <Link to="/signup" className='underline'> Signup </Link></p>
            </div>
          </div>
        </div>

        <div className="right-section max-lg:w-0  w-1/4 bg-[#f1f1f1]">

        </div>
      </div>
    </section>
  )
}

export default Login