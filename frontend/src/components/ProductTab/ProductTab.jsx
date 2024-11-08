import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductCard from '../ProductCard/ProductCard';
import axios from "axios";
import Loading from '../Loading/Loading.jsx';

const ProductTab = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  const featuredProducts = products.filter((product) => product.featured);
  const mostPopularProducts = products.filter((product) => product.mostPopular);
  const sortedProducts = products.sort((a, b) => a.createdAt - b.createdAt);
  if (products.length == 0) {
    return <section className='py-4'>
      <div className="container mx-auto px-4 sm:px-0">
        <Tabs>
          <TabList>
            <Tab>Featured</Tab>
            <Tab>Latest</Tab>
            <Tab>Most Popular</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
              <Loading type='product' />
              <Loading type='product' />
              <Loading type='product' />
              <Loading type='product' />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  }
  return (
    <section className='py-4'>
      <div className="container mx-auto px-4 sm:px-0">
        <Tabs>
          <TabList>
            <Tab>Featured</Tab>
            <Tab>Latest</Tab>
            <Tab>Most Popular</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
              {featuredProducts.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
              {sortedProducts.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
              {mostPopularProducts.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  )
}

export default ProductTab