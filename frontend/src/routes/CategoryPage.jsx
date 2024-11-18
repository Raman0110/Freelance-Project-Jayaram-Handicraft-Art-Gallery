// CategoryPage.js
import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breedcrum/Breadcrumb';
import ProductCard from '../components/ProductCard/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import MetaTags from '../components/MetaTags/MetaTags';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_host}/api/category/category-product`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (categories.length == 0) {
    return (
      <section>
        <Breadcrumb location='categories' />
        <div className='container mx-auto'>
          <div className="flex justify-between py-6">
            <h2 className="bg-slate-600 w-24 h-6 rounded-full"></h2>
            <p className="text-lg font-medium cursor-pointer">
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
            <Loading type='product' />
            <Loading type='product' />
            <Loading type='product' />
            <Loading type='product' />
          </div>
        </div>
      </section>
    )
  }
  return (
    <>
      <MetaTags
        title='Categories | Jayaram Handicraft Art Gallery'
        description='Jayaram Handicraft Art Gallery provides excellent quality Traditional Thangkas crafted with love and we believe that art is meant to be seen, appreciated, and valued, just like the artists who create them. our mission is to promote Nepalese art and crafts through the world'
        image='/images/logo.png'
        name='Jayaram Handicraft Art Gallery' />
      <section>
        <Breadcrumb location="categories" />
        <div className="container mx-auto">
          {categories.map((category, index) => (
            <div key={index} className='px-4'>
              <div className="flex justify-between py-6">
                <h2 className="text-2xl font-bold text-[#0D276A]">{category.name}</h2>
                <p className="text-lg font-medium cursor-pointer">
                  <Link to={`/category/${category.slug}`}> View All </Link> <FontAwesomeIcon icon={faArrowRight} />
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
                {category.products && category.products.map((product, index) => (
                  <ProductCard product={product} key={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
