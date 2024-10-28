import React from 'react'

const Dashboard = () => {
  return (
    <section className='mt-6'>
      <div className="flex">
        <div className='bg-white w-[15rem] text-[#3C3E4D] mx-4 p-4 shadow-md rounded-md'>
          <h2 className='text-xl font-medium text-center mb-2'>Total Product</h2>
          <h4 className='text-3xl text-center font-bold'>124</h4>
        </div>
        <div className='bg-white w-[15rem] text-[#3C3E4D] mx-4 p-4 shadow-md rounded-md'>
          <h2 className='text-xl font-medium text-center mb-2'>Total Orders</h2>
          <h4 className='text-3xl text-center font-bold'>1014</h4>
        </div>
        <div className='bg-white w-[15rem] text-[#3C3E4D] mx-4 p-4 shadow-md rounded-md'>
          <h2 className='text-xl font-medium text-center mb-2'>Total Blogs</h2>
          <h4 className='text-3xl text-center font-bold'>14</h4>
        </div>
      </div>
    </section>
  )
}

export default Dashboard