import React, { useState } from 'react'
import Breadcrumb from '../components/Breedcrum/Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import ProductCard from '../components/ProductCard/ProductCard'


const Shop = () => {
  const [isSizeOpen, setSizeOpen] = useState(true);
  const [isTypeOpen, setTypeOpen] = useState(true);
  const [isPriceOpen, setPriceOpen] = useState(true);
  const [isFilterOpen, setFilterOpen] = useState(false);
  return (
    <section className='py-4'>
      <Breadcrumb location='Shop' />
      <div className="container mx-auto">
        <div className="flex mt-4 gap-2 items-start">
          <div className={`z-50 lg:h-[100vh] overflow-auto filerSection w-[25%] bg-[#f1f1f1] p-5 rounded-md fixed lg:sticky top-0 ${isFilterOpen ? 'right-0' : '-right-full'} transition-all duration-300 ease-in-out`}>
            <p className='text-end lg:hidden'>
              <FontAwesomeIcon icon={faTimes} onClick={() => setFilterOpen(!isFilterOpen)} className='cursor-pointer' />
            </p>
            <h1 className='lg:text-center text-2xl font-medium pb-6'>Filters</h1>
            <h4 className='cursor-pointer text-lg font-medium pb-3' onClick={() => setSizeOpen(!isSizeOpen)}>Size<FontAwesomeIcon icon={faAngleDown} className={isSizeOpen ? 'rotate-180 ml-2 transition-transform duration-200 ease-out' : 'ml-2 transition-transform duration-200 ease-out'} /> </h4>
            <SlideDown>
              {isSizeOpen &&
                <div className='pl-3 mb-3'>
                  <div>
                    <input type="checkbox" className='mr-2' id='size1' />
                    <label htmlFor='size1'>10*20</label>
                  </div>
                  <div>
                    <input type="checkbox" className='mr-2' id='size2' />
                    <label htmlFor='size2'>10*20</label>
                  </div>
                  <div>
                    <input type="checkbox" className='mr-2' id='size3' />
                    <label htmlFor='size3'>10*20</label>
                  </div>
                  <div>
                    <input type="checkbox" className='mr-2' id='size4' />
                    <label htmlFor='size4'>10*20</label>
                  </div>
                  <div>
                    <input type="checkbox" className='mr-2' id='size5' />
                    <label htmlFor='size5'>10*20</label>
                  </div>
                </div>}
            </SlideDown>
            <h4 className='cursor-pointer text-lg font-medium pb-3' onClick={() => setTypeOpen(!isTypeOpen)}>Type<FontAwesomeIcon icon={faAngleDown} className={isTypeOpen ? 'rotate-180 ml-2 transition-transform duration-200 ease-out' : 'ml-2 transition-transform duration-200 ease-out'} /> </h4>
            <SlideDown>
              {isTypeOpen && <div className='pl-3 mb-3'>
                <div>
                  <input type="checkbox" className='mr-2' id='size1' />
                  <label htmlFor='size1'>10*20</label>
                </div>
                <div>
                  <input type="checkbox" className='mr-2' id='size2' />
                  <label htmlFor='size2'>10*20</label>
                </div>
                <div>
                  <input type="checkbox" className='mr-2' id='size3' />
                  <label htmlFor='size3'>10*20</label>
                </div>
                <div>
                  <input type="checkbox" className='mr-2' id='size4' />
                  <label htmlFor='size4'>10*20</label>
                </div>
                <div>
                  <input type="checkbox" className='mr-2' id='size5' />
                  <label htmlFor='size5'>10*20</label>
                </div>
              </div>}
            </SlideDown>
            <h4 className='cursor-pointer text-lg font-medium pb-3' onClick={() => setPriceOpen(!isPriceOpen)}>Price<FontAwesomeIcon icon={faAngleDown} className={isPriceOpen ? 'rotate-180 ml-2 transition-transform duration-200 ease-out' : 'ml-2 transition-transform duration-200 ease-out'} /> </h4>
            <SlideDown>
              {isPriceOpen &&
                <div className='pl-3 mb-3 flex gap-2 w-full'>
                  <input type="text" name="" id="" className='w-1/2 border p-1 outline-none' placeholder='Min' />
                  <input type="text" name="" id="" className='w-1/2 border p-1 outline-none' placeholder='Max' />
                </div>}
            </SlideDown>
          </div>
          <div className="productSection w-full lg:w-[70%] max-sm:px-6">
            <div className="sort mb-3">
              <div className="flex justify-end gap-2">
                <div>
                  <span className='font-medium text-md'>Sort By</span>
                  <select className='border outline-none rounded-sm border-black p-1 ml-3'>
                    <option value="">A-Z</option>
                    <option value="">Price- Low to High</option>
                    <option value="">Price- High to Low</option>
                  </select>
                </div>
                <button className='border px-5 lg:hidden' onClick={() => setFilterOpen(!isFilterOpen)}>Filter</button>
              </div>
            </div>
            <div className="products grid md:grid-cols-3 gap-3 grid-cols-1 min-[500px]:grid-cols-2 ">
              <ProductCard imgSrc="/images/greentara.jpg" />
              <ProductCard imgSrc="/images/greentara.jpg" />
              <ProductCard imgSrc="/images/greentara.jpg" />
              <ProductCard imgSrc="/images/greentara.jpg" />
              <ProductCard imgSrc="/images/greentara.jpg" />
              <ProductCard imgSrc="/images/greentara.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop