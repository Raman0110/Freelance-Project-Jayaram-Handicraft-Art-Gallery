import React from 'react'
import Breadcrumb from '../components/Breedcrum/Breadcrumb'
import BlogCard from '../components/BlogCard/BlogCard'

const Blog = () => {
  return (
    <section>
      <Breadcrumb location='Blogs' />
      <div className='container mx-auto my-4'>
        <div className="grid grid-cols-4 gap-2 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 justify-items-center">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  )
}

export default Blog