import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { LazyImageRenderer } from 'lazy-image-renderer';

const Slider = () => {
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_host}/api/slider`)
      .then((res) => {
        setSliders(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  if (sliders.length == 0) {
    return <Loading type="slider" />
  }
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
      {
        sliders.map((slider, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-image-wrapper md:h-[78vh]">
              <LazyImageRenderer
                effect='opacity'
                effectDuration={0.1}
                objectFit='center'
                src={`${import.meta.env.VITE_host}/${slider.image}`}
                alt='slider-image'
              />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}


export default Slider