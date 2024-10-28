import { faAngleDown, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const BlogSection = () => {
  return (
    <section className='py-4'>
      <div className="container mx-auto px-4 sm:px-0">
        <h2 className='pt-8 pb-2 text-center text-3xl font-bold'>BLOG</h2>
        <div className="blogContainer grid gap-4 xl:grid-cols-2 xl:grid-rows-2 xl:gap-4 mt-8">
          <div className="bigBlogCard flex w-full gap-2 xl:gap-4 xl:flex-col  xl:row-span-2">
            <div className="blogImg overflow-hidden h-[200px] min-w-[200px] xl:h-[350px] w-[200px] xl:w-full">
              <img src="/images/sliderImg1.jpg" alt="" className=' cursor-pointer hover:scale-[110%] transition-transform duration-200 ease-out h-full w-full object-cover' />
            </div>
            <div className="blogDesc">
              <h2 className='cursor-pointer font-bold text-lg lg:text-2xl pb-2 hover:text-[#0D276A]'>10 Facts About Gautam Buddha</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum culpa possimus mollitia perspiciatis minima</p>
            </div>
          </div>
          <div className="smallBlogCard flex gap-2">
            <div className="blogImg overflow-hidden h-[200px] min-w-[200px] w-[200px]">
              <img src="/images/sliderImg1.jpg" alt="" className='cursor-pointer hover:scale-[110%] transition-transform duration-200 ease-out h-full w-full object-cover' />
            </div>
            <div className="blogDesc">
              <h2 className='font-bold text-lg lg:text-2xl cursor-pointer pb-2 hover:text-[#0D276A]'>Must Known Facts About Green Tara Devi</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum quos, dicta delectus expedita hic</p>
            </div>
          </div>
          <div className="smallBlogCard flex gap-2">
            <div className="blogImg overflow-hidden h-[200px] min-w-[200px] w-[200px]">
              <img src="/images/sliderImg1.jpg" alt="" className='cursor-pointer hover:scale-[110%] transition-transform duration-200 ease-out h-full w-full object-cover' />
            </div>
            <div className="blogDesc">
              <h2 className='font-bold text-lg lg:text-2xl cursor-pointer pb-2 hover:text-[#0D276A]'>Must Known Facts About Green Tara Devi</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum quos, dicta delectus expedita hic recusandae</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection;