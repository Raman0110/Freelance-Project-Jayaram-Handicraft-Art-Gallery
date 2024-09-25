import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CategoryCard from '../CategoryCard/CategoryCard';

const Category = () => {
  return (
    <section className='category px-8 py-14 bg-[#F5F3EB]'>
      <div className="container mx-auto">
        <h2 className='section-heading text-3xl font-bold text-center'>Explore Our Categories</h2>
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
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Category