import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation } from 'swiper/modules';
import BlogCard from '../components/BlogCard/BlogCard';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const BlogSinglePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState(null);
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/blog")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(`http://localhost:8000/api/blog/get/${slug}`)
      .then((res) => {
        if (res.data && Object.keys(res.data).length === 0) {
          navigate('/error');
        } else {
          setSingleBlog(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        navigate('/error');
      });
  }, [slug]);
  return (
    loading ?
      <div className='flex justify-center items-center h-[40vh]'>
        <Loading />
      </div> :
      <section>
        <div className="container mx-auto">
          <h2 className='text-center font-bold text-3xl py-8'>{singleBlog.name}</h2>
          <div className="blog-img w-[550px] h-[500px] mx-auto">
            <img src={`http://localhost:8000/${singleBlog.image}`} alt={singleBlog.name} className='w-full h-full' />
          </div>
          <div className="blog-text py-4 px-20 text-justify">
            <h2 className='py-4 text-2xl font-medium text-center'>{singleBlog.name}</h2>
            <p>
              {singleBlog.description}
            </p>
          </div>
          <div className='my-8 text-center'>
            <h2 className='text-2xl font-bold mt-4'>More Blogs</h2>
            <Swiper className='mt-8'
              modules={[Navigation]}
              navigation
              spaceBetween={10}
              slidesPerView={2}
              breakpoints={{
                768: {
                  slidesPerView: 3
                },
                1024: {
                  slidesPerView: 4
                }
              }}
            >
              {blogs.map((blog, index) => (
                <SwiperSlide key={index} className='mb-4'>
                  <div>
                    <Link to={`/blog/${blog.slug}`}>
                      <BlogCard blog={blog} />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
  );
}

export default BlogSinglePage;
