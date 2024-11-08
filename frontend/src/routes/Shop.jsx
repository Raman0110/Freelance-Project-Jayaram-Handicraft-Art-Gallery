import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breedcrum/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import ProductCard from '../components/ProductCard/ProductCard';
import axios from 'axios';
import Loading from '../components/Loading/Loading';

const Shop = () => {
  const [isSizeOpen, setSizeOpen] = useState(true);
  const [isTypeOpen, setTypeOpen] = useState(true);
  const [isAvailabilityOpen, setAvailabilityOpen] = useState(true);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [filter, setFilter] = useState({ category: [], size: "", availability: "" });

  useEffect(() => {
    const categoryQuery = filter.category.join(',');
    axios
      .get(`http://localhost:8000/api/product/shop?category=${categoryQuery}&size=${filter.size}&availability=${filter.availability}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filter]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/category`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFilterChange = (e) => {
    const { value, checked, name } = e.target;
    setFilter((prev) => {
      if (name === "category") {
        let updatedCategories = [...prev.category];
        if (checked) {
          updatedCategories.push(value);
        } else {
          updatedCategories = updatedCategories.filter((categoryId) => categoryId !== value);
        }
        return { ...prev, category: updatedCategories };
      }
      if (name === "size") {
        return { ...prev, size: value };
      }
      if (name === "availability") {
        return { ...prev, availability: value };
      }
      return prev;
    });
  };

  return (
    <section className='py-4'>
      <Breadcrumb location='Shop' />
      <div className="container mx-auto">
        <div className="flex mt-4 gap-2 items-start overflow-visible">
          <div
            className={`max-lg:z-50 max-lg:h-[100vh] filerSection lg:w-[25%] md:w-[30%] w-[50%] bg-white p-5 rounded-md max-lg:fixed top-0 ${isFilterOpen ? 'right-0' : '-right-full'} transition-all duration-300 ease-in-out`}>
            <p className='text-end lg:hidden'>
              <FontAwesomeIcon icon={faTimes} onClick={() => setFilterOpen(!isFilterOpen)} className='cursor-pointer' />
            </p>
            <h1 className='lg:text-center text-2xl font-medium pb-6'>Filters</h1>

            {/* Size filter (not implemented here, but can be added later) */}
            <h4 className='cursor-pointer text-lg font-medium pb-3' onClick={() => setSizeOpen(!isSizeOpen)}>
              Size
              <FontAwesomeIcon icon={faAngleDown} className={isSizeOpen ? 'rotate-180 ml-2 transition-transform duration-200 ease-out' : 'ml-2 transition-transform duration-200 ease-out'} />
            </h4>
            <SlideDown>
              {isSizeOpen &&
                <div className='pl-3 mb-3'>
                  <input type="text" name="size" id="size" placeholder='20*30' className='w-full px-2 py-1 outline-none border border-gray-500 rounded-md' onChange={handleFilterChange} />
                </div>}
            </SlideDown>

            {/* Category filter */}
            <h4 className='cursor-pointer text-lg font-medium pb-3' onClick={() => setTypeOpen(!isTypeOpen)}>
              Category
              <FontAwesomeIcon icon={faAngleDown} className={isTypeOpen ? 'rotate-180 ml-2 transition-transform duration-200 ease-out' : 'ml-2 transition-transform duration-200 ease-out'} />
            </h4>
            <SlideDown>
              {isTypeOpen && (
                <div className='pl-3 mb-3'>
                  {categories.map((category, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        className='mr-2'
                        id={category._id}
                        value={category._id}
                        checked={filter.category.includes(category._id)}
                        onChange={handleFilterChange}
                      />
                      <label htmlFor={category._id}>{category.name}</label>
                    </div>
                  ))}
                </div>
              )}
            </SlideDown>

            <h4 className='cursor-pointer text-lg font-medium pb-3' onClick={() => setAvailabilityOpen(!isAvailabilityOpen)}>
              Availability
              <FontAwesomeIcon icon={faAngleDown} className={isAvailabilityOpen ? 'rotate-180 ml-2 transition-transform duration-200 ease-out' : 'ml-2 transition-transform duration-200 ease-out'} />
            </h4>
            <SlideDown>
              {isAvailabilityOpen && (
                <div className='pl-3 mb-3'>
                  <div>
                    <input type="radio" className='mr-2' name='availability' id="inStock" value="inStock" onChange={handleFilterChange} />
                    <label htmlFor="inStock">In Stock</label>
                  </div>
                  <div>
                    <input type="radio" className='mr-2' id="outOfStock" name='availability' value="outOfStock" onChange={handleFilterChange} />
                    <label htmlFor="outOfStock">Out of Stock</label>
                  </div>
                </div>
              )}
            </SlideDown>
          </div>

          <div className="productSection w-full lg:w-[70%] max-sm:px-6">
            <div className="sort mb-3">
              <div className="flex justify-end gap-2">
                {/* <div>
                  <span className='font-medium text-md'>Sort By</span>
                  <select className='border outline-none rounded-lg p-1 ml-3'>
                    <option value="">A-Z</option>
                    <option value="">Price- Low to High</option>
                    <option value="">Price- High to Low</option>
                  </select>
                </div> */}
                <button className='border px-5 lg:hidden' onClick={() => setFilterOpen(!isFilterOpen)}>Filter</button>
              </div>
            </div>

            <div className="products grid md:grid-cols-3 gap-3 grid-cols-1 min-[500px]:grid-cols-2">
              {products.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
