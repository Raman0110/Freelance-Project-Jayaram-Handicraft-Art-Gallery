import React, { useState } from 'react'
import { SlideDown } from 'react-slidedown'
import { faAngleDown, faBasketShopping, faChartColumn, faEnvelopeOpenText, faImages, faLayerGroup, faPen, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  return (
    <aside className='bg-[#2F52DA] h-screen text-white p-4 overflow-auto w-[20vw] sticky top-0'>
      <div className="logo">
        <img src="/images/logo.PNG" alt="" className='w-[80px] mx-auto' />
      </div>
      <nav className='pt-8'>
        <ul>
          <li className='mb-2'><Link to="/dashboard" className='nav-link' > <FontAwesomeIcon icon={faChartColumn} /> Dashboard</Link></li>
          <li className='mb-2'><Link to="/dashboard/messages" className='nav-link'> <FontAwesomeIcon icon={faEnvelopeOpenText} /> Messages</Link></li>
          <li className='mb-2'>
            <a className={`nav-link has-drop-down ${openDropdown == "Product" ? 'active-dropdown' : ''}`} onClick={() => toggleDropdown("Product")}>
              <span className="">
                <FontAwesomeIcon icon={faShoppingBag} /> Product
              </span>
              <FontAwesomeIcon icon={faAngleDown} className={`${openDropdown == "Product" ? 'rotate-180' : ''} all duration-300 ease-out`} />
            </a>
            <SlideDown>
              {openDropdown == "Product" &&
                <ul className='ps-4 text-[14px]'>
                  <li className='py-2'><Link to="/dashboard/product">Products</Link></li>
                  <li> <Link to="/dashboard/product/add"> Add Product </Link></li>
                </ul>
              }
            </SlideDown>
          </li>
          <li className='mb-2'>
            <a className={`nav-link has-drop-down ${openDropdown == "ProductCata" ? 'active-dropdown' : ''}`} onClick={() => toggleDropdown("ProductCata")}>
              <span>
                <FontAwesomeIcon icon={faLayerGroup} /> Product Category
              </span>
              <FontAwesomeIcon icon={faAngleDown} className={`${openDropdown == "ProductCata" ? 'rotate-180' : ''} all duration-300 ease-out`} />
            </a>
            <SlideDown>
              {openDropdown == "ProductCata" &&
                <ul className='ps-4 text-[14px]'>
                  <li className='py-2'><Link to="/dashboard/product/category">Product Categories</Link></li>
                  <li><Link to="product/category/add">Add Category</Link></li>
                </ul>
              }
            </SlideDown>
          </li>
          <li className='mb-2'>
            <a className={`nav-link has-drop-down ${openDropdown == "Slider" ? 'active-dropdown' : ''}`} onClick={() => toggleDropdown("Slider")}>
              <span>
                <FontAwesomeIcon icon={faImages} /> Slider
              </span>
              <FontAwesomeIcon icon={faAngleDown} className={`${openDropdown == "Slider" ? 'rotate-180' : ''} all duration-300 ease-out`} />
            </a>
            <SlideDown>
              {openDropdown == "Slider" &&
                <ul className='ps-4 text-[14px]'>
                  <li className='py-2'><Link to="/dashboard/slider">Slider Image</Link></li>
                  <li><Link to="/dashboard/slider/add">Add Slider</Link></li>
                </ul>
              }
            </SlideDown>
          </li>
          <li className='mb-2'><Link to="/dashboard/orders" className='nav-link '> <FontAwesomeIcon icon={faBasketShopping} /> Order</Link></li>
          <li className='mb-2'>
            <a className={`nav-link has-drop-down ${openDropdown == "Blog" ? 'active-dropdown' : ''}`} onClick={() => toggleDropdown("Blog")}>
              <span>
                <FontAwesomeIcon icon={faPen} /> Blog
              </span>
              <FontAwesomeIcon icon={faAngleDown} className={`${openDropdown == "Blog" ? 'rotate-180' : ''} all duration-300 ease-out`} />
            </a>
            <SlideDown>
              {openDropdown == "Blog" &&
                <ul className='ps-4 text-[14px]'>
                  <li className='py-2'><Link to="/dashboard/blog">Blogs</Link></li>
                  <li><Link to="/dashboard/blog/add">Add Blog</Link></li>
                </ul>
              }
            </SlideDown>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar