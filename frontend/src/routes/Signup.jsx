import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      await axios.post("http://localhost:8000/api/auth/register", { username, email, password });
      toast.success("User Registration Successful", {
        position: "top-center",
        autoClose: 2000,
        closeButton: false
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000)
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        closeButton: false
      });
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
            <form onSubmit={handleSignUp} className='flex flex-col pt-5 gap-2 text-black font-medium'>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id='username' required className='border rounded-sm p-1 outline-none text-gray-500' />
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id='email' required className='border rounded-sm p-1 outline-none text-gray-500' />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id='password' required className='border rounded-sm p-1 outline-none text-gray-500' />
              <button type="submit" className='bg-[#E64D3D] text-white py-2 px-4 rounded-sm hover:bg-[#b23e31]'>Signup</button>
            </form>
            <div className='text-center mt-2'>
              <p>Already have an account? <Link to="/login" className='underline'> Login </Link></p>
            </div>
          </div>
        </div>

        <div className="right-section max-lg:w-0  w-1/4 bg-[#f1f1f1]" />
      </div>
    </section>
  )
}

export default Signup