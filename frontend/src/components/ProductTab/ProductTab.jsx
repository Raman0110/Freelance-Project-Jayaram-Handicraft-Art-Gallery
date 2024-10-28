import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';

const ProductTab = () => {
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
              <Link to="/product/1">
                <ProductCard imgSrc={"/images/buddha.jpg"} />
              </Link>
              <ProductCard imgSrc={"/images/buddha2.jpg"} />
              <ProductCard imgSrc={"/images/buddha3.JPG"} />
              <ProductCard imgSrc={"/images/buddha4.jpg"} />
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  )
}

export default ProductTab