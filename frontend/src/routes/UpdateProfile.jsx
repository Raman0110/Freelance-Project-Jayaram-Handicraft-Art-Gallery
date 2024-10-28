import React from 'react'

const UpdateProfile = () => {
  return (
    <section className='bg-white'>
      <div className="container mx-auto">
        <div className='bg-[#f1f1f1] md:w-[60%] mx-auto py-20 px-8 rounded-md shadow-lg'>
          <form action="" className='flex flex-col gap-4 text-lg font-medium'>
            <label htmlFor="username">Username</label>
            <input type="text" name='username' id='username' className='p-1 outline-none text-black rounded-md' />
            <label htmlFor="email">Email</label>
            <input type="text" name='email' id='email' className='p-1 outline-none text-black rounded-md' />
            <label htmlFor="password">Password</label>
            <input type="text" name='password' id='password' className='p-1 outline-none text-black rounded-md' />
            <label htmlFor="npassword">New Password</label>
            <input type="text" name='npassword' id='npassword' className='p-1 outline-none text-black rounded-md' />
            <button className='bg-[#0D276A] text-white mt-5 p-3 rounded-md'>Update</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UpdateProfile