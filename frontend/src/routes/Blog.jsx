import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/Breedcrum/Breadcrumb'
import BlogCard from '../components/BlogCard/BlogCard'
import axios from "axios"
import { Link } from 'react-router-dom'
import Loading from '../components/Loading/Loading'
import MetaTags from '../components/MetaTags/MetaTags'


const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_host}/api/blog`)
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
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
    <>
      <MetaTags
        title='Blogs | Jayaram Handicraft Art Gallery'
        description='Jayaram Handicraft Art Gallery provides excellent quality Traditional Thangkas crafted with love and we believe that art is meant to be seen, appreciated, and valued, just like the artists who create them. our mission is to promote Nepalese art and crafts through the world'
        image='/images/logo.png'
        name='Jayaram Handicraft Art Gallery' />
      <section>
        <Breadcrumb location='Blogs' />
        <div className='container mx-auto my-4'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
            {blogs.map((blog, index) => (
              <Link to={`/blog/${blog.slug}`}>
                <BlogCard blog={blog} key={index} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog