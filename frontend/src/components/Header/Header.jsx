import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCartShopping, faMagnifyingGlass, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);
  function setActive() {
    setNav(!nav);
  }
  function setSearchBar() {
    setSearch(!search);
  }
  return (
    <>
      <header className='py-4 px-4 border-b md:px-0 relative'>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="header-left flex gap-8 items-center">
              <h1 className='font-bold text-2xl'>Jayram Handicraft <br /> Art Gallery</h1>
              <div className="search-bar relative hidden md:block">
                <input type="text" name="search" id="" className='border border-[#525151] p-2 rounded-full w-80 outline-none' placeholder='Search Product..' />
                <div className="searchIcon bg-[#525151] h-8 w-8 rounded-full flex items-center justify-center absolute right-1 top-[0.3rem] cursor-pointer">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white' />
                </div>
              </div>
            </div>
            <div className="header-right">
              <div className="flex gap-4">
                <FontAwesomeIcon icon={faUser} size='lg' className='cursor-pointer' /><span className='hidden md:block cursor-pointer text-[#525151]'>Profile</span>
                <FontAwesomeIcon icon={faCartShopping} size='lg' className='cursor-pointer' /><span className='hidden md:block cursor-pointer text-[#525151]' >Cart</span>
                <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' className='md:!hidden cursor-pointer text-[#525151]' onClick={setSearchBar} />
                <FontAwesomeIcon icon={faBars} size='lg' className=' md:!hidden cursor-pointer text-[#525151]' onClick={setActive} />
              </div>
            </div>
          </div>
        </div>
        <div className={`searchBar md:hidden absolute z-10 ${search ? 'activesearchBar' : ''}`}>
          <input type="text" name="search" className='p-4 outline-none w-[300px] ' />
          <button className='bg-[#1e1e1e] p-4 text-white'>Search</button>
        </div>
      </header>
      <nav className='bg-[#F5F3EB] hidden md:block font-semibold'>
        <ul className='flex justify-center items-center gap-10 p-4 text-lg'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li className='dropDown relative'>
            <Link to='/category'>
              Categories
              <FontAwesomeIcon icon={faAngleDown} className='relative top-0.5 ml-2 text-[#1e1e1e]' />
            </Link>
            <ul className='dropDownMenu p-4 bg-white absolute flex flex-col gap-3 min-w-[200px] z-10'>
              <li><Link to='/category'>Buddha</Link></li>
              <li><Link to='/category'>Green Tara</Link></li>
              <li><Link to='/category'>Manjushree</Link></li>
              <li><Link to='/category'>White Tara</Link></li>
              <li><Link to='/category'>Mandala</Link></li>
            </ul>
          </li>
          <li><Link to='/shop'>Shop</Link></li>
          <li><Link to='/blogs'>Blogs</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
      <aside className={`mobileNav h-[100vh] w-[250px] backdrop-blur-[20px] md:hidden  fixed top-0 overflow-y-auto z-10 p-4 ${nav ? 'activemobileNav' : ''}`}>
        <div className="text-end">
          <FontAwesomeIcon icon={faTimes} onClick={setActive} className='text-end cursor-pointer text-2xl' />
        </div>
        <ul className='p-4 flex flex-col gap-4 mt-6'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/category'>Category</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </aside>

    </>
  )
}

export default Header