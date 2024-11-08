import React from 'react'

const BlogCard = ({ blog }) => {
  return (
    <section className="bg-white blogCard p-4 shadow-lg relative rounded-md w-[300px] flex flex-col gap-2 cursor-pointer hover:-translate-y-4 transition-transform duration-300 ease-out">
      <div className="blogImg h-[300px]">
        <img src={`http://localhost:8000/${blog.image}`} alt={blog.name} className='w-full h-full object-cover' />
      </div>
      <div className="blogText">
        <h1 className='text-lg font-bold'>{blog.name}</h1>
        <p>{blog.description.slice(0, 100)}</p>
      </div>
    </section>
  )
}

export default BlogCard