import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <section className='bg-white'>
      <div className="container mx-auto">
        <div className='bg-[#f1f1f1] lg:w-[60%] mx-auto shadow-lg py-20 px-8 rounded-md flex max-lg:flex-col-reverse max-lg:gap-4 items-center'>
          <div className="textSection lg:w-1/2">
            <p className='text-xl font-medium'>Username: Raman Tamang</p>
            <p className='py-8 font-medium'>Email: ramantamang@gmail.com</p>
            <div className="flex gap-8 text-white">
              <Link to="/profile/update">
                <button className='bg-[#0D276A] p-2 rounded-md'>Update Profile</button>
              </Link>
              <button className='bg-[#0D276A] p-2 rounded-md'>View Order</button>
            </div>
          </div>
          <div className="imgSec lg:w-1/2">
            <img src="/images/login.jpg" alt="image" className='w-full h-full' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile