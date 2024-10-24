import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductCard from '../ProductCard/ProductCard';

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
              <ProductCard imgSrc={"/images/thangka1.jpg"} />
              <ProductCard imgSrc={"/images/greentara.jpg"} />
              <ProductCard imgSrc={"/images/thangka1.jpg"} />
              <ProductCard imgSrc={"/images/thangka2.jpg"} />
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