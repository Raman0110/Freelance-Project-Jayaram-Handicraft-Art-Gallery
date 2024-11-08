import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = ({ product }) => {
  return (
    <div className='ProductCard shadow-md rounded-lg bg-white'>
      <div className="productCardImg w-[90%] mx-auto h-[300px] pt-3 relative overflow-hidden md:h-[320px]">
        <Link to={`/product/${product.slug}`}>
          <img src={`http://localhost:8000/${product.image}`} alt={product.name} className='w-full h-full object-content' />
        </Link>
        {/* <a href="" className="addToCart w-11/12 mx-auto block absolute text-center rounded-full py-2 uppercase backdrop-blur bottom-2 left-2 text-white border border-white hover:bg-[#0D276A]">
          Get Thangka <FontAwesomeIcon icon={faEnvelope} />
        </a> */}
        {product.featured &&
          <p className='absolute bg-[#0D276A] rounded-md top-2 left-2 text-white p-1 text-sm'>Featured</p>
        }
      </div>
      <div className="productCardDetail px-4 pb-4">
        <h3 className='my-4 font-bold text-xl'><Link to={`/product/${product.slug}`} className='hover:text-[#0D276A]'>{product.name}</Link></h3>
        <div className="text-lg font-medium">
          <p>Size: {product.size}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard