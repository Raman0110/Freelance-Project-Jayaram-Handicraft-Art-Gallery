import React from 'react'
import Breadcrumb from '../components/Breedcrum/Breadcrumb'

const About = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <Breadcrumb location='About' />
        <div className="flex gap-4 my-4 max-lg:flex-wrap max-lg:justify-center">
          <div className="image-sec max-sm:h-[300px] h-[400px] min-w-[300px] w-[300px]">
            <img src="/images/reg1.jpg" alt="" className='h-full w-full max-sm:object-top object-cover rounded-xl border-4 border-gray-600' />
          </div>
          <div className="image-sec max-sm:h-[300px] h-[400px] min-w-[300px] w-[300px]">
            <img src="/images/reg2.jpg" alt="" className='h-full w-full object-cover rounded-xl border-4 max-sm:object-top border-gray-600' />
          </div>
          <div className="text-sec max-sm:px-4">
            <h1 className='text-2xl max-sm:text-xl max-lg:text-center font-bold text-green-500 max-sm:py-2 py-4'>Welcome To Jayram Handicraft Art Gallery</h1>
            <h1 className='text-2xl max-sm:text-xl font-bold pb-2'>About us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis error earum rem dolor illum nostrum qui explicabo nam porro adipisci, mollitia eius maiores voluptatum veritatis cum recusandae placeat dicta harum hic quas. Debitis praesentium ipsum asperiores porro optio laborum aliquam harum tempora repellat consequuntur! Soluta, sint laudantium! Numquam, quis culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus possimus rem ut a. Quam aliquam unde cumque. Possimus ab ex deleniti vero adipisci id voluptate expedita facilis ad. Officiis.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About