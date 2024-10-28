
import React from 'react'
import FeatureCard from '../FeatureCard/FeatureCard'

const Feature = () => {
  return (
    <section className='py-4 w-full'>
      <div className="container mx-auto px-4 sm:px-0">
        <h2 className='text-center text-3xl py-4 font-bold relative '>Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-8">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </section>
  )
}

export default Feature