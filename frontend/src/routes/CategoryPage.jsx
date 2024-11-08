// CategoryPage.js
import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breedcrum/Breadcrumb';
import ProductCard from '../components/ProductCard/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/category/category-product")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section>
      <Breadcrumb location="categories" />
      <div className="container mx-auto">
        {categories.map((category, index) => (
          <div key={index}>
            <div className="flex justify-between py-6">
              <h2 className="text-2xl font-bold text-[#0D276A]">{category.name}</h2>
              <p className="text-lg font-medium cursor-pointer">
                <Link to={`/category/${category._id}`}> View All </Link> <FontAwesomeIcon icon={faArrowRight} />
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
              {category.products && category.products.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
