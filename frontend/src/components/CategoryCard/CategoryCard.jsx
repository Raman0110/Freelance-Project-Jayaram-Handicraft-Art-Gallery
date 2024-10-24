import React from 'react'

const CategoryCard = () => {
  return (
    <div className='categoryCard'>
      <div className="categoryCardImg rounded-full w-[130px] h-[130px] mx-auto mt-4">
        <a href="">
          <img src="/images/greentara.jpg" alt="" className='w-full h-full object-cover rounded-full' />
        </a>
      </div>
      <h2 className='text-center mt-2'><a href="" className='text-[#57586E] font-bold'>Buddha</a></h2>
    </div>
  )
}

export default CategoryCard