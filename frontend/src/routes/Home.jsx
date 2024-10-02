import React from 'react'
import Swiper from '../components/Swiper/Swiper'
import Category from '../components/Category/Category'
import ProductTab from '../components/ProductTab/ProductTab'
import Feature from '../components/Feature/Feature'
import Blog from '../components/Blog/Blog'

const Home = () => {
  return (
    <main>
      <Swiper />
      <Category />
      <ProductTab />
      <Feature />
      <Blog />
    </main>
  )
}

export default Home