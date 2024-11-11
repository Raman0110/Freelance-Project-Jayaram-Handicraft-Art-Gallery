
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/blog")
      .then((res) => {
        setBlogs(res.data);

      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
  const limitedBlogs = blogs.slice(0, 2);
  return (
    <section className='py-4'>
      <div className="container mx-auto px-4 sm:px-0">
        <h2 className='pt-8 pb-2 text-center text-3xl font-bold'>BLOG</h2>
        <div className="blogContainer grid gap-4 xl:grid-cols-2 xl:grid-rows-2 xl:gap-4 mt-8">
          {limitedBlogs.map((blog, index) =>
            index == 0 ? (
              <div className="bigBlogCard flex w-full gap-2 xl:gap-4 xl:flex-col  xl:row-span-2">
                <div className="blogImg overflow-hidden h-[200px] min-w-[200px] xl:h-[350px] w-[200px] xl:w-full">
                  <Link to={`/blog/${blog.slug}`}>
                    <img src={`http://localhost:8000/${blog.image}`} loading='lazy' alt={blog.name} className=' cursor-pointer hover:scale-[110%] transition-transform duration-200 ease-out h-full w-full object-cover' />
                  </Link>
                </div>
                <div className="blogDesc">
                  <Link to={`/blog/${blog.slug}`}>
                    <h2 className='cursor-pointer font-bold text-lg lg:text-2xl pb-2 hover:text-[#0D276A]'>{blog.name}</h2>
                  </Link>
                  <p>{blog.description.slice(0, 100)}</p>
                </div>
              </div>
            ) :
              (
                <div className="smallBlogCard flex gap-2">
                  <div className="blogImg overflow-hidden h-[200px] min-w-[200px] w-[200px]">
                    <Link to={`/blog/${blog.slug}`}>
                      <img src={`http://localhost:8000/${blog.image}`} loading='lazy' alt={blog.name} className='cursor-pointer hover:scale-[110%] transition-transform duration-200 ease-out h-full w-full object-cover' />
                    </Link>
                  </div>
                  <div className="blogDesc">
                    <Link to={`/blog/${blog.slug}`}>
                      <h2 className='font-bold text-lg lg:text-2xl cursor-pointer pb-2 hover:text-[#0D276A]'>{blog.name}</h2>
                    </Link>
                    <p>{blog.description.slice(0, 100)}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  )
}

export default BlogSection;