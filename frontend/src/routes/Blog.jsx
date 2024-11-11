import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/Breedcrum/Breadcrumb'
import BlogCard from '../components/BlogCard/BlogCard'
import axios from "axios"
import { Link } from 'react-router-dom'
import Loading from '../components/Loading/Loading'


const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/blog")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  if (blogs.length == 0) {
    return (
      <section>
        <Breadcrumb location='Blogs' />
        <div className='container mx-auto my-4'>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
            <Loading type='product' />
            <Loading type='product' />
            <Loading type='product' />
            <Loading type='product' />
          </div>
        </div>
      </section>
    )
  }
  return (
    <section>
      <Breadcrumb location='Blogs' />
      <div className='container mx-auto my-4'>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {blogs.map((blog, index) => (
            <Link to={`/blog/${blog.slug}`}>
              <BlogCard blog={blog} key={index} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog