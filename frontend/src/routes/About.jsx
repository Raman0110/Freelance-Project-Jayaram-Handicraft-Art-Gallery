import React from 'react'
import Breadcrumb from '../components/Breedcrum/Breadcrumb'
import MetaTags from '../components/MetaTags/MetaTags'

const About = () => {
  return (
    <>
      <MetaTags
        title='About | Jayaram Handicraft Art Gallery'
        description='Jayaram Handicraft Art Gallery provides excellent quality Traditional Thangkas crafted with love and we believe that art is meant to be seen, appreciated, and valued, just like the artists who create them. our mission is to promote Nepalese art and crafts through the world'
        image='/images/logo.png'
        name='Jayaram Handicraft Art Gallery' />
      <section>
        <div className='container mx-auto'>
          <Breadcrumb location='About' />
          <div className="flex gap-4 my-4 max-lg:flex-wrap max-lg:justify-center">
            <div className="image-sec h-[400px] min-w-[300px] w-[300px]">
              <img
                src="/images/PAN.jpg"
                className='h-full w-full max-sm:object-top object-cover rounded-xl border-4'
                alt="Company PAN"
              />
            </div>
            <div className="image-sec h-[400px] min-w-[300px] w-[300px]">
              <img
                src="/images/Reg.jpg"
                className='h-full w-full max-sm:object-top object-cover rounded-xl border-4'
                alt='Company Registration'
              />
            </div>
            <div className="text-sec max-sm:px-4">
              <h1 className='text-2xl max-sm:text-xl max-lg:text-center font-bold max-sm:py-2 pt-4'>Welcome To Jayaram Handicraft Art Gallery</h1>
              <h1 className='text-2xl max-sm:text-xl font-bold py-4 text-[#0D276A]'>About us</h1>
              <p className='text-gray-600 pt-4'>Jayaram Handicraft Art Gallery provides excellent quality Traditional Thangkas crafted with love and we believe that art is meant to be seen, appreciated, and valued, just like the artists who create them. our mission is to promote Nepalese art and crafts through the world</p>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default About