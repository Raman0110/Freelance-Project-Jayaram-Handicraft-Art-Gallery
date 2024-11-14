import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
  const [admin, setAdmin] = useState({});
  useEffect(() => {
    axios.get("http://192.168.1.71:8000/api/auth/user")
      .then((res) => {
        setAdmin(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username").trim();
    const email = formData.get("email").trim();
    const password = formData.get("password").trim();
    const newPassword = formData.get("npassword").trim();
    if (!username || !email || !password) {
      toast.error("All Fields are required including password", {
        autoClose: 2000,
        closeButton: false,
        position: "top-center"
      });
      return;
    }
    try {
      await axios.put(`http://192.168.1.71:8000/api/auth/user/update/${admin._id}`, {
        username,
        email,
        password,
        newPassword
      }, { withCredentials: true });
      toast.success("Details Updated Successfully", {
        autoClose: 2000,
        closeButton: false,
        position: "top-center"
      });
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong", {
        autoClose: 2000,
        closeButton: false,
        position: "top-center"
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <section className='bg-white'>
      <ToastContainer />
      <div className="container mx-auto">
        <div className='bg-[#f1f1f1] md:w-[60%] mx-auto py-20 px-8 rounded-md shadow-lg'>
          <form className='flex flex-col gap-4 text-lg font-medium' onSubmit={handleUpdate}>
            <label htmlFor="username">Username</label>
            <input type="text" name='username' id='username' className='p-1 outline-none text-black rounded-md' value={admin.username} onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input type="text" name='email' id='email' className='p-1 outline-none text-black rounded-md' value={admin.email} onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' className='p-1 outline-none text-black rounded-md' onChange={handleChange} />
            <label htmlFor="npassword">New Password</label>
            <input type="password" name='npassword' id='npassword' className='p-1 outline-none text-black rounded-md' onChange={handleChange} />
            <button className='bg-[#0D276A] text-white mt-5 p-3 rounded-md'>Update</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UpdateProfile