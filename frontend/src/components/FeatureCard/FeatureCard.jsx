import React from 'react'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FeatureCard = () => {
  return (
    <div className="bg-white overflow-hidden featureCard w-full h-full md:h-[320px] shadow-lg rounded-xl cursor-pointer flex flex-col gap-[4px] p-4 hover:translate-y-[-20px] transition-all duration-500">
      <FontAwesomeIcon icon={faCheckCircle} size='2xl' className='mt-4' color='#0D276A' />
      <h3 className='py-2 md:py-8 font-bold text-2xl'>100% Quality Art</h3>
      <p className='text-justify text-[#57586E]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur quas rerum aut dolorum illo impedit eos, quidem adipisci culpa sed non, </p>
    </div>
  )
}

export default FeatureCard