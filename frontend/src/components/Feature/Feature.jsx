
import React from 'react'
import FeatureCard from '../FeatureCard/FeatureCard'

const Feature = () => {
  return (
    <section className='py-4 w-full'>
      <div className="container mx-auto px-4 sm:px-0">
        <h2 className='text-center text-3xl py-4 font-bold relative '>Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-8">
          <FeatureCard title='Customer Satisfaction Guarantee' desc='We stand behind our products and offer a satisfaction guarantee, ensuring a hassle-free experience for all our customers.' />
          <FeatureCard title='Expert Craftsmanship and Quality Materials' desc='Our thangkas are crafted with the finest materials and traditional methods, ensuring durability and lasting beauty.' />
          <FeatureCard title='Authentic Hand-Painted Thangkas' desc='Each thangka is hand-painted by skilled artisans using traditional techniques, ensuring a unique and genuine piece of Tibetan art.' />
          <FeatureCard title='Wide Selection of Styles and Sizes' desc='We offer a diverse range of thangkas in various styles and sizes, from intricate mandalas to smaller, more intimate designs.' />
        </div>
      </div>
    </section>
  )
}

export default Feature