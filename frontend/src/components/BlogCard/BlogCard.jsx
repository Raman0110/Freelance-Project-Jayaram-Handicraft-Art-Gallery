import { LazyImageRenderer } from 'lazy-image-renderer'
import React from 'react'

const BlogCard = ({ blog }) => {
  return (
    <article className="bg-white blogCard p-4 shadow-lg relative rounded-md h-[420px] overflow-hidden flex flex-col gap-2 cursor-pointer hover:-translate-y-4 transition-transform duration-300 ease-out">
      <div className="blogImg h-[300px]">
        <LazyImageRenderer
          effect='opacity'
          effectDuration={0.1}
          objectFit='cover'
          src={`${import.meta.env.VITE_host}/${blog.image}`}
          className='w-full h-full object-cover'
        />
      </div>
      <div className="blogText">
        <h1 className='text-lg font-bold'>{blog.name}</h1>
        {/* <p>{blog.description.slice(0, 50)}....</p> */}
      </div>
    </article>
  )
}

export default BlogCard