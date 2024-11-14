import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='text-center mb-16'>
      <h1 className='text-8xl mt-8 mb-4'>404</h1>
      <p className='text-4xl mb-4'>Something's missing.</p>
      <p className='text-2xl mb-8'>Sorry, we can't find that page. You'll find lots to explore on the home page</p>
      <Link to="/" className='bg-[#0D276A] hover:bg-[#0e172c] rounded-lg text-white py-3 px-4'>Back to Home</Link>
    </section>
  )
}

export default NotFound