import React from 'react'
import Swiper from '../components/Swiper/Swiper'
import Category from '../components/Category/Category'
import ProductTab from '../components/ProductTab/ProductTab'
import Feature from '../components/Feature/Feature'
import BlogSection from '../components/Blog/BlogSection'

const Home = () => {
  return (
    <main>
      <Swiper />
      <Category />
      <ProductTab />
      <Feature />
      <BlogSection />
    </main>
  )
}

export default Home