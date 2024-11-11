import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCartShopping, faMagnifyingGlass, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQ = queryParams.get("search");
  useEffect(() => {
    if (searchQ) {
      setSearchInput(searchQ);
    }
  }, [searchQ]);
  function handleSearchChange(e) {
    setSearchInput(e.target.value)
  }
  function setActive() {
    setNav(!nav);
  }
  function setSearchBar() {
    setSearch(!search);
  }
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/category")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchQuery = formData.get('search');
    navigate(`/shop?search=${searchQuery}`);
  };
  return (
    <>
      <div className='sticky top-0 z-50 bg-white'>
        <header className='relative py-2 px-4 border-b md:px-0'>
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="header-left flex gap-8 items-center">
                <div>
                  <img src="/images/small.png" alt="logo" />
                </div>
                <div className="search-bar relative hidden md:block">
                  <form onSubmit={handleSearch}>
                    <input type="text" onChange={handleSearchChange} value={searchInput} name="search" id="search" className='border outline-[#0D276A] p-2 rounded-full w-80' placeholder='Search Product..' />
                    <button className="searchIcon bg-[#0D276A] h-8 w-8 rounded-full flex items-center justify-center absolute right-1 top-[0.3rem] cursor-pointer">
                      <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white' />
                    </button>
                  </form>
                </div>
              </div>
              <div className="header-right">
                <div className="flex gap-4">
                  {/* <Link to="/profile" className='flex gap-1'>
                    <FontAwesomeIcon icon={faUser} size='lg' className='cursor-pointer' /><span className='hidden md:block cursor-pointer'>Profile</span>
                  </Link>
                  <Link className='flex gap-1'>
                    <FontAwesomeIcon icon={faCartShopping} size='lg' className='cursor-pointer' /><span className='hidden md:block cursor-pointer'>Cart</span>
                  </Link> */}
                  <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' className='md:!hidden cursor-pointer' onClick={setSearchBar} />
                  <FontAwesomeIcon icon={faBars} size='lg' className=' md:!hidden cursor-pointer' onClick={setActive} />
                </div>
              </div>
            </div>
          </div>
          <div className={`searchBar md:hidden absolute z-10 ${search ? 'activesearchBar' : ''}`}>
            <form onSubmit={handleSearch}>
              <input type="text" name="search" onChange={handleSearchChange} value={searchInput} className='p-4 outline-none w-[300px] ' />
              <button className='bg-[#1e1e1e] p-4 text-white'>Search</button>
            </form>
          </div>
        </header>
        <nav className='hidden md:block font-medium headerNav'>
          <ul className='flex justify-center items-center gap-10 p-4'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li className='dropDown relative'>
              <Link to='/categories'>
                Categories
                <FontAwesomeIcon icon={faAngleDown} className='relative top-0.5 ml-2' />
              </Link>
              <ul className='dropDownMenu p-4 bg-white absolute flex flex-col gap-3 min-w-[200px] z-10 rounded-md'>
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link to={`/category/${category.slug}`}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </div>
      <aside className={`mobileNav h-[100vh] w-[250px] bg-[#0D276A] md:hidden fixed top-0 overflow-y-auto z-50 p-4 ${nav ? 'activemobileNav' : ''}`}>
        <div className="text-end">
          <FontAwesomeIcon icon={faTimes} onClick={setActive} color='white' className='text-end cursor-pointer text-2xl' />
        </div>
        <ul className='p-4 flex flex-col gap-4 mt-6'>
          <li><Link onClick={setActive} to='/' >Home</Link></li>
          <li><Link onClick={setActive} to='/about'>About</Link></li>
          <li><Link onClick={setActive} to='/categories'>Category</Link></li>
          <li><Link onClick={setActive} to='/shop'>Shop</Link></li>
          <li><Link onClick={setActive} to='/blogs'>Blog</Link></li>
          <li><Link onClick={setActive} to='/contact'>Contact</Link></li>
        </ul>
      </aside>

    </>
  )
}

export default Header