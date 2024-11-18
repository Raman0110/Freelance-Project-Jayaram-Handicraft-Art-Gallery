import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Profile = () => {
  const [admin, setAdmin] = useState({});
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_host}/api/auth/user`)
      .then((res) => {
        setAdmin(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <section className='mt-10'>
      <div className="container mx-auto">
        <div className='bg-[#f1f1f1] lg:w-[60%] mx-auto shadow-lg py-20 px-8 rounded-md flex max-lg:flex-col-reverse max-lg:gap-4 items-center'>
          <div className="textSection lg:w-1/2">
            <p className='text-xl'>
              <span className='text-[#0D276A] font-medium'>Username:</span> {admin.username}</p>
            <p className='py-4 text-sm'>
              <span className='text-[#0D276A] font-medium'>Email:</span> {admin.email}</p>
            <div className="flex gap-8 text-white">
              <Link to={`/dashboard/profile/update/${admin.id}`}>
                <button className='bg-[#0D276A] p-2 rounded-md'>Update Profile</button>
              </Link>
            </div>
          </div>
          <div className="imgSec lg:w-1/2">
            <img src="/images/sliderImg1.jpg" alt="image" className='w-full h-full' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile