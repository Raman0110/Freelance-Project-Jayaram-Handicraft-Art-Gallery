import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [productCount, setproductCount] = useState('');
  const [blogCount, setBlogCount] = useState('');
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_host}/api/product`)
      .then((res) => {
        setproductCount(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      })
    axios.get(`${import.meta.env.VITE_host}/api/blog`)
      .then((res) => {
        setBlogCount(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <section className='mt-6'>
      <div className="flex">
        <div className='bg-white w-[15rem] text-[#3C3E4D] mx-4 p-4 shadow-md rounded-md'>
          <h2 className='text-xl font-medium text-center mb-2'>Total Product</h2>
          <h4 className='text-3xl text-center font-bold'>{productCount}</h4>
        </div>
        <div className='bg-white w-[15rem] text-[#3C3E4D] mx-4 p-4 shadow-md rounded-md'>
          <h2 className='text-xl font-medium text-center mb-2'>Total Blogs</h2>
          <h4 className='text-3xl text-center font-bold'>{blogCount}</h4>
        </div>
      </div>
    </section>
  )
}

export default Dashboard