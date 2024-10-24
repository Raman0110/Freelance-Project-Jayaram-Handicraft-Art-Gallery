import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({ location }) => {
  return (
    <div className=''>
      <p className='py-2 px-4 text-[#2B2E48]'>
        <Link to='/' className='font-bold'>Home</Link>
        <FontAwesomeIcon icon={faAngleRight} size='xs' className='mx-2' />
        {location}
      </p>
    </div>
  )
}

export default Breadcrumb