import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation } from 'swiper/modules';
import BlogCard from '../components/BlogCard/BlogCard';


const BlogSinglePage = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className='text-center font-bold text-3xl py-8'>10 Facts about Green Tara Devi</h2>
        <div className="blog-img w-[550px] h-[500px] mx-auto ">
          <img src="/images/login.jpg" alt="" className='w-full h-full' />
        </div>
        <div className="blog-text py-4 px-20 text-justify">
          <h2 className='py-4 text-2xl font-medium text-center'>Know About Green Tara</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatum quos adipisci nobis aliquam natus saepe nesciunt, assumenda similique illo suscipit, nihil laborum distinctio fugiat id neque vero cumque debitis praesentium aspernatur earum repellendus. Unde quaerat minus corporis adipisci voluptas ullam id aliquid non libero explicabo dolorem perspiciatis, itaque ipsum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore consectetur asperiores nam, omnis reiciendis aliquid tenetur, at facilis beatae ut aspernatur deleniti nisi neque porro animi esse sunt cum pariatur ipsam. Sit dolore nam nemo sequi autem quia officiis voluptates deserunt. Dolorum, ex ipsa molestias blanditiis, voluptas atque repellat provident illum repudiandae suscipit officiis iusto eaque veritatis a sapiente!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem voluptatem blanditiis eius suscipit cumque ratione necessitatibus facere assumenda eum veritatis, tempore mollitia qui neque libero modi nisi consequuntur alias, repudiandae vel iste ad! Praesentium ipsum qui nulla officia quibusdam commodi! Voluptatum, expedita pariatur neque fugit ipsa recusandae tempore? Hic, laborum eum impedit ipsa sint non iste commodi reiciendis nostrum maxime sapiente porro eaque laudantium doloribus iusto dignissimos facere iure id quaerat, eligendi veniam ducimus quos quibusdam! Quam quae eos aperiam similique quod! Minima explicabo illum veniam, aperiam, debitis voluptatibus eum tempore harum commodi, ratione non voluptates maxime alias perferendis?
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
            <SwiperSlide className='mb-4'>
              <div>
                <BlogCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <BlogCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <BlogCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <BlogCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <BlogCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <BlogCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <BlogCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <BlogCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <BlogCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <BlogCard />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default BlogSinglePage