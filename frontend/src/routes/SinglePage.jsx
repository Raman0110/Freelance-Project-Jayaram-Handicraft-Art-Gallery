import React, { useRef, useState } from 'react'
import Breadcrumb from '../components/Breedcrum/Breadcrumb'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
const SinglePage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section>
      <Breadcrumb location="product" />
      <div className="container mx-auto my-4">
        <div className="flex">
          <div className="imgSection w-3/5">
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="w-1/4 product-thumb">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={35}
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
                      <img src="https://swiperjs.com/demos/images/nature-8.jpg" className='cursor-pointer product-thumbnail' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-thumbnail-image">
                      <img src="https://swiperjs.com/demos/images/nature-9.jpg" className='cursor-pointer product-thumbnail' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-thumbnail-image">
                      <img src="https://swiperjs.com/demos/images/nature-8.jpg" className='cursor-pointer product-thumbnail' />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="w-4/5">
                <Swiper
                  style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  spaceBetween={10}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  className="mySwiper2"
                > <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="descSection w-2/5"></div>
        </div>
      </div>
    </section>
  )
}

export default SinglePage