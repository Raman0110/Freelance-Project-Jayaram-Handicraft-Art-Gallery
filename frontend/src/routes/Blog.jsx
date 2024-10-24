import React from 'react'
import Breadcrumb from '../components/Breedcrum/Breadcrumb'

const Blog = () => {
  return (
    <section>
      <Breadcrumb location='Blogs' />
      <div className='container mx-auto my-4'>
        <div className="grid grid-cols-4 gap-2 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 justify-items-center">
          <div className="blogCard p-4 shadow-lg relative rounded-md w-[300px] flex flex-col gap-2 cursor-pointer hover:-translate-y-4 transition-transform duration-300 ease-out">
            <div className="blogImg h-[300px]">
              <img src="/images/thangka1.jpg" alt="" className='w-full h-full object-cover' />
            </div>
            <div className="blogText">
              <h1 className='text-lg font-bold'>10 Facts about Gautama Buddha</h1>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
          <div className="blogCard p-4 shadow-lg relative rounded-md w-[300px] flex flex-col gap-2 cursor-pointer hover:-translate-y-4 transition-transform duration-300 ease-out">
            <div className="blogImg h-[300px]">
              <img src="/images/thangka1.jpg" alt="" className='w-full h-full object-cover' />
            </div>
            <div className="blogText">
              <h1 className='text-lg font-bold'>10 Facts about Gautama Buddha</h1>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
          <div className="blogCard p-4 shadow-lg relative rounded-md w-[300px] flex flex-col gap-2 cursor-pointer hover:-translate-y-4 transition-transform duration-300 ease-out">
            <div className="blogImg h-[300px]">
              <img src="/images/thangka1.jpg" alt="" className='w-full h-full object-cover' />
            </div>
            <div className="blogText">
              <h1 className='text-lg font-bold'>10 Facts about Gautama Buddha</h1>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
          <div className="blogCard p-4 shadow-lg relative rounded-md w-[300px] flex flex-col gap-2 cursor-pointer hover:-translate-y-4 transition-transform duration-300 ease-out">
            <div className="blogImg h-[300px]">
              <img src="/images/thangka1.jpg" alt="" className='w-full h-full object-cover' />
            </div>
            <div className="blogText">
              <h1 className='text-lg font-bold'>10 Facts about Gautama Buddha</h1>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
          <div className="blogCard p-4 shadow-lg relative rounded-md w-[300px] flex flex-col gap-2 cursor-pointer hover:-translate-y-4 transition-transform duration-300 ease-out">
            <div className="blogImg h-[300px]">
              <img src="/images/thangka1.jpg" alt="" className='w-full h-full object-cover' />
            </div>
            <div className="blogText">
              <h1 className='text-lg font-bold'>10 Facts about Gautama Buddha</h1>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
          <div className="blogCard p-4 shadow-lg relative rounded-md w-[300px] flex flex-col gap-2 cursor-pointer hover:-translate-y-4 transition-transform duration-300 ease-out">
            <div className="blogImg h-[300px]">
              <img src="/images/thangka1.jpg" alt="" className='w-full h-full object-cover' />
            </div>
            <div className="blogText">
              <h1 className='text-lg font-bold'>10 Facts about Gautama Buddha</h1>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Blog