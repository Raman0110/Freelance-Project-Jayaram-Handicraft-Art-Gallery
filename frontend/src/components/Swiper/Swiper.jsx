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
        delay: 2500,
        disableOnInteraction: false
      }}
    >
      <SwiperSlide>
        <div className="swiper-image-wrapper md:h-[75vh]">
          <img src="/images/sliderImg1.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image-wrapper md:h-[75vh]">
          <img src="/images/sliderImg2.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image-wrapper md:h-[75vh]">
          <img src="/images/sliderImg3.jpg" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}


export default Slider