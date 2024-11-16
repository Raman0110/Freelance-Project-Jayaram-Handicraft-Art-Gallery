import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading/Loading';
import MetaTags from '../components/MetaTags/MetaTags';


const CategoryDetailPage = () => {
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    axios.get(`http://192.168.1.71:8000/api/category/category-product/${slug}`)
      .then((res) => {
        setCategory(res.data.category);
        setProducts(res.data.category.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slug]);

  if (!category) {
    return (
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#0D276A] text-center py-6"></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
          <Loading type='product' />
          <Loading type='product' />
          <Loading type='product' />
          <Loading type='product' />
        </div>
      </div>
    )
  };

  return (
    <>
      <MetaTags
        title={category.name}
        description={category.name}
        image={`http://192.168.1.71:8000/${category.image}`}
        name='Jayram Handicraft Art Gallery Pvt. Ltd' />
      <section>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#0D276A] text-center py-6">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
            {products && products.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryDetailPage;
