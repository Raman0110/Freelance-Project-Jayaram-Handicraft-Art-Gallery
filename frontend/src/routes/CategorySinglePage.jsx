import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const CategoryDetailPage = () => {
  const [category, setCategory] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/category/category-product`)
      .then((res) => {
        const categoryData = res.data.find(c => c._id === id);
        setCategory(categoryData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!category) return <div>Loading...</div>;

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#0D276A] text-center py-6">{category.name}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
          {category.products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryDetailPage;
