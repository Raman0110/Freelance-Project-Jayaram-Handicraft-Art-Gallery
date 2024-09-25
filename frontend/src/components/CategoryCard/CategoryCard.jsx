import React from 'react'

const CategoryCard = () => {
  return (
    <div className='categoryCard'>
      <div className="categoryCardImg rounded-full border-8 border-[#767676] w-[150px] h-[150px] mx-auto mt-4">
        <a href="">
          <img src="/images/sliderImg3.jpg" alt="" className='w-full h-full object-cover rounded-full' />
        </a>
      </div>
      <h2 className='text-center mt-2'><a href="">Buddha</a></h2>
    </div>
  )
}

export default CategoryCard