import React from 'react'
import Swiper from '../components/Swiper/Swiper'
import Category from '../components/Category/Category'
import ProductTab from '../components/ProductTab/ProductTab'
import Feature from '../components/Feature/Feature'
import BlogSection from '../components/Blog/BlogSection'
import MetaTags from '../components/MetaTags/MetaTags'

const Home = () => {
  return (
    <main>
      <MetaTags
        title='Jayaram Handicraft Art Gallery'
        description='Jayaram Handicraft Art Gallery provides excellent quality Traditional Thangkas crafted with love and we believe that art is meant to be seen, appreciated, and valued, just like the artists who create them. our mission is to promote Nepalese art and crafts through the world'
        image='/images/logo.png'
        name='Jayaram Handicraft Art Gallery' />
      <Swiper />
      <Category />
      <ProductTab />
      <Feature />
      <BlogSection />
    </main>
  )
}

export default Home