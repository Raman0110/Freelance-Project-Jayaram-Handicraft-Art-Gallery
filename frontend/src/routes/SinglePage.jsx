import React, { useRef, useState } from 'react'
import Breadcrumb from '../components/Breedcrum/Breadcrumb'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import ProductCard from '../components/ProductCard/ProductCard'
const SinglePage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section>
      <Breadcrumb location="product" />
      <div className="container mx-auto my-4 px-2">
        <div className="flex max-md:flex-col">
          <div className="imgSection w-full md:w-3/5">
            <div className="flex flex-col-reverse lg:flex-row max-md:items-center">
              <div className="w-full product-thumb max-lg:mt-4">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs]}
                  breakpoints={{
                    1024: {
                      direction: 'vertical',
                      spaceBetween: 120
                    }
                  }}
                >
                  <SwiperSlide>
                    <div className="product-thumbnail-image">
                      <img src="/images/thangka1.jpg" className='cursor-pointer product-thumbnail' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-thumbnail-image">
                      <img src="/images/thangka1p1.jpg" className='cursor-pointer product-thumbnail' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-thumbnail-image">
                      <img src="/images/thangka1p2.jpg" className='cursor-pointer product-thumbnail' />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="w-full lg:w-4/5 swiper-product-img">
                <Swiper
                  modules={[FreeMode, Navigation, Thumbs]}
                  spaceBetween={10}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  className="mySwiper2"
                > <SwiperSlide>
                    <div className="img-container max-w-[450px] h-[450px] mx-auto">
                      <img src="/images/thangka1.jpg" className='w-full h-full object-contain' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="img-container max-w-[450px] h-[450px] mx-auto">
                      <img src="/images/thangka1p1.jpg" className='w-full h-full object-contain' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="img-container max-w-[450px] h-[450px] mx-auto">
                      <img src="/images/thangka1p2.jpg" className='w-full h-full object-contain' />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="descSection w-full md:w-2/5 px-4 max-md:mt-6">
            <h4 className='text-3xl font-bold'>Gautam Buddha Thangka</h4>
            <p className='inline-block px-3 rounded-md bg-[#0D276A] text-white my-4'>Buddha</p>
            <p className='font-medium'>Size:  18*24 inches </p>
            <p className='text-lg font-bold my-4'>Price: $120</p>
            <p className='font-medium'>Stock: <span className='text-[#008A00]'>In Stock</span></p>
            <div className="flex gap-6 mt-4 text-white">
              <button className='bg-[#E64D3D] py-2 px-4 rounded-md font-medium hover:bg-[#b23e31]'>Add to Cart</button>
              <button className='bg-[#E64D3D] py-2 px-4 rounded-md font-medium hover:bg-[#b23e31]'>Inquiry</button>
            </div>
            <h4 className='my-2 text-xl font-medium'>Description</h4>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quas ducimus veniam beatae. Atque veritatis tempora non ullam dolore quod veniam cumque, sit sequi est rem qui dolorem debitis quidem? Exercitationem, cumque? Tempore, consectetur et!</p>
          </div>
        </div>
        <div className='my-8 text-center'>
          <h2 className='text-2xl font-bold mt-4'>Similar Thangka</h2>
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
                <ProductCard imgSrc="/images/thangka2.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <ProductCard imgSrc="/images/thangka2.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <ProductCard imgSrc="/images/thangka2.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <ProductCard imgSrc="/images/thangka2.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <ProductCard imgSrc="/images/thangka2.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <ProductCard imgSrc="/images/thangka2.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <ProductCard imgSrc="/images/thangka2.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <ProductCard imgSrc="/images/thangka2.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <ProductCard imgSrc="/images/thangka2.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <ProductCard imgSrc="/images/thangka2.jpg" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default SinglePage