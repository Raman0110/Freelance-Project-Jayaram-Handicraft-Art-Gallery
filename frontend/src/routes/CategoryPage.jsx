import React from 'react'
import Breadcrumb from '../components/Breedcrum/Breadcrumb'
import ProductCard from '../components/ProductCard/ProductCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const CategoryPage = () => {
  return (
    <section>
      <Breadcrumb location='categories' />
      <div className="container mx-auto">
        <div className="flex justify-between py-6">
          <h2 className='text-2xl font-bold text-[#0D276A]'>Buddha</h2>
          <p className='text-lg font-medium cursor-pointer'>View All <FontAwesomeIcon icon={faArrowRight} /> </p>
        </div>
        <div className="grid grid-cols-4 gap-2 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 justify-items-center">
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
        </div>
        <div className="flex justify-between py-6">
          <h2 className='text-2xl font-bold text-[#0D276A]'>Buddha</h2>
          <p className='text-lg font-medium cursor-pointer'>View All <FontAwesomeIcon icon={faArrowRight} /> </p>
        </div>
        <div className="grid grid-cols-4 gap-2 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 justify-items-center">
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
        </div>
        <div className="flex justify-between py-6">
          <h2 className='text-2xl font-bold text-[#0D276A]'>Buddha</h2>
          <p className='text-lg font-medium cursor-pointer'>View All <FontAwesomeIcon icon={faArrowRight} /> </p>
        </div>
        <div className="grid grid-cols-4 gap-2 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 justify-items-center">
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
        </div>
        <div className="flex justify-between py-6">
          <h2 className='text-2xl font-bold text-[#0D276A]'>Buddha</h2>
          <p className='text-lg font-medium cursor-pointer'>View All <FontAwesomeIcon icon={faArrowRight} /> </p>
        </div>
        <div className="grid grid-cols-4 gap-2 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 justify-items-center">
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
        </div>
        <div className="flex justify-between py-6">
          <h2 className='text-2xl font-bold text-[#0D276A]'>Buddha</h2>
          <p className='text-lg font-medium cursor-pointer'>View All <FontAwesomeIcon icon={faArrowRight} /> </p>
        </div>
        <div className="grid grid-cols-4 gap-2 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 justify-items-center">
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
          <ProductCard imgSrc="/images/login.jpg" />
        </div>

      </div>
    </section>
  )
}

export default CategoryPage