import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Feature = () => {
  return (
    <section className='py-4 w-full'>
      <div className="container mx-auto px-4 sm:px-0">
        <h2 className='text-center text-3xl py-4 font-bold'>Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-8">
          <div className="overflow-hidden featureCard w-full h-full md:h-[320px] bg-green-500 text-center text-white rounded-xl cursor-pointer flex flex-col gap-[4px] p-4 hover:translate-y-[-20px] transition-all duration-500">
            <FontAwesomeIcon icon={faCheckCircle} size='2xl' className='mt-4' />
            <h3 className='py-2 md:py-8 font-bold text-2xl'>100% Quality Art</h3>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur quas rerum aut dolorum illo impedit eos, quidem adipisci culpa sed non, </p>
          </div>
          <div className="overflow-hidden featureCard w-full h-full md:h-[320px] bg-green-500 text-center text-white rounded-xl cursor-pointer flex flex-col gap-[4px] p-4 sm:mt-10 hover:translate-y-[-20px] transition-all duration-500">
            <FontAwesomeIcon icon={faCheckCircle} size='2xl' className='mt-4' />
            <h3 className='py-2 md:py-8 font-bold text-2xl'>100% Quality Art</h3>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur quas rerum aut dolorum illo impedit eos, quidem adipisci culpa sed non, </p>
          </div>
          <div className="overflow-hidden featureCard w-full h-full md:h-[320px] bg-green-500 text-center text-white rounded-xl cursor-pointer flex flex-col gap-[4px] p-4 hover:translate-y-[-20px] transition-all duration-500">
            <FontAwesomeIcon icon={faCheckCircle} size='2xl' className='mt-4' />
            <h3 className='py-2 md:py-8 font-bold text-2xl'>100% Quality Art</h3>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur quas rerum aut dolorum illo impedit eos, quidem adipisci culpa sed non, </p>
          </div>
          <div className="overflow-hidden featureCard w-full h-full md:h-[320px] bg-green-500 text-center text-white rounded-xl cursor-pointer flex flex-col gap-[4px] p-4 sm:mt-10 hover:translate-y-[-20px] transition-all duration-500">
            <FontAwesomeIcon icon={faCheckCircle} size='2xl' className='mt-4' />
            <h3 className='py-2 md:py-8 font-bold text-2xl'>100% Quality Art</h3>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur quas rerum aut dolorum illo impedit eos, quidem adipisci culpa sed non, </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature