import React from 'react'

const BlogCard = () => {
  return (
    <section className="bg-white blogCard p-4 shadow-lg relative rounded-md w-[300px] flex flex-col gap-2 cursor-pointer hover:-translate-y-4 transition-transform duration-300 ease-out">
      <div className="blogImg h-[300px]">
        <img src="/images/thangka1.jpg" alt="" className='w-full h-full object-cover' />
      </div>
      <div className="blogText">
        <h1 className='text-lg font-bold'>10 Facts about Gautama Buddha</h1>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>
    </section>
  )
}

export default BlogCard