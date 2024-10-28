import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const ProductCard = ({ imgSrc }) => {
  return (
    <div className='ProductCard shadow-md rounded-lg bg-white'>
      <div className="productCardImg w-[90%] mx-auto h-[300px] pt-3 relative overflow-hidden md:h-[320px]">
        <a href="">
          <img src={imgSrc} alt="" className='w-full h-full object-content' />
        </a>
        <a href="" className="addToCart w-11/12 mx-auto block absolute text-center rounded-full py-2 uppercase backdrop-blur bottom-2 left-2 text-white border border-white hover:bg-[#0D276A]">
          Add to Cart <FontAwesomeIcon icon={faCartPlus} />
        </a>
        <p className='absolute bg-[#0D276A] rounded-md top-2 left-2 text-white p-1 text-sm'>Featured</p>
      </div>
      <div className="productCardDetail px-4 pb-4">
        <h3 className='my-4 font-bold text-xl'><a href="" className='hover:text-[#0D276A]'>Buddha Life Thangka</a></h3>
        <div className="flex justify-between text-lg font-medium">
          <p>$200</p>
          <p>18*24</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard