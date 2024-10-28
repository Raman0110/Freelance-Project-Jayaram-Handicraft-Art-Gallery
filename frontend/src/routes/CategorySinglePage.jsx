import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard'

const CategorySinglePage = () => {
  return (
    <section className='container mx-auto'>
      <h2 className='text-center py-8 text-3xl font-bold text-[#0D276A]'>Buddha</h2>
      <div className="grid grid-cols-4 gap-2 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 justify-items-center">
        <ProductCard imgSrc="/images/login.jpg" />
        <ProductCard imgSrc="/images/login.jpg" />
        <ProductCard imgSrc="/images/login.jpg" />
        <ProductCard imgSrc="/images/login.jpg" />
        <ProductCard imgSrc="/images/login.jpg" />
      </div>
    </section>
  )
}

export default CategorySinglePage