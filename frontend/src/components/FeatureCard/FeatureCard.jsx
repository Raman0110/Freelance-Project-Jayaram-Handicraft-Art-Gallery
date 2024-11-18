import React from 'react'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FeatureCard = ({ title, desc }) => {
  return (
    <div className="bg-white overflow-hidden featureCard w-full h-full md:h-[340px] shadow-lg rounded-xl cursor-pointer flex flex-col gap-[4px] p-4 hover:translate-y-[-20px] transition-all duration-500">
      <FontAwesomeIcon icon={faCheckCircle} size='2xl' className='mt-4' color='#0D276A' />
      <h3 className='pt-2 md:py-6 font-bold text-2xl'>{title}</h3>
      <p className='text-justify text-[#57586E]'>{desc}</p>
    </div>
  )
}

export default FeatureCard