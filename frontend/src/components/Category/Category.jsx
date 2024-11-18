import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CategoryCard from '../CategoryCard/CategoryCard';
import axios from 'axios';
import Loading from '../Loading/Loading';


const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_host}/api/category`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  if (categories.length == 0) {
    return (<section className='category px-8 py-14'>
      <div className="container mx-auto">
        <h2 className='section-heading text-3xl font-bold text-center relative pb-3'>Explore Our Categories</h2>
        <div className="container-cards mt-8">
          <Swiper className='banner-swiper'
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            navigation={true}

          >
            <SwiperSlide>
              <Loading type='category' />
            </SwiperSlide>
            <SwiperSlide>
              <Loading type='category' />
            </SwiperSlide>
            <SwiperSlide>
              <Loading type='category' />
            </SwiperSlide>
            <SwiperSlide>
              <Loading type='category' />
            </SwiperSlide>
            <SwiperSlide>
              <Loading type='category' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
    )
  }
  return (
    <section className='category px-8 py-14'>
      <div className="container mx-auto">
        <h2 className='section-heading text-3xl font-bold text-center relative pb-3'>Explore Our Categories</h2>
        <div className="container-cards mt-8">
          <Swiper className='banner-swiper'
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            navigation={true}

          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <CategoryCard category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Category