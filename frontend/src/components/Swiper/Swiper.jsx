import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper className='banner-swiper'
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false
      }}
    >
      <SwiperSlide>
        <div className="swiper-image-wrapper md:h-[78vh]">
          <img src="/images/sliderImg1.jpg" alt="" className='object-center' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image-wrapper md:h-[78vh]">
          <img src="/images/login.jpg" alt="" className='object-center' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image-wrapper md:h-[78vh]">
          <img src="/images/sliderImg3.jpg" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}


export default Slider