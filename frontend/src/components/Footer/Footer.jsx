import { faAngleRight, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-green-500 text-white'>
      <div className="footer-top border-b-2 border-gray-300">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="grid md:grid-cols-3">
            <div className="flex items-center gap-2 md:border-r-2 md:justify-center md:border-gray-300 py-4 px-2">
              <FontAwesomeIcon icon={faLocationDot} size='lg' />
              <p>Bhaktapur, Nepal</p>
            </div>
            <div className="flex items-center gap-2 md:border-r-2 md:justify-center md:border-gray-300 py-4 px-2">
              <FontAwesomeIcon icon={faEnvelope} size='lg' />
              <p>Email us:<br /> jayramartgallery@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 py-4 px-2 md:justify-center">
              <FontAwesomeIcon icon={faPhone} size='lg' />
              <p>Call us: <br /> 9801354688</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-main mt-4 pb-4 border-b-2 border-white">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="footer-col">
              <h2 className='font-bold text-2xl'>Jayram Handicraft Art Gallery</h2>
              <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aliquam fugiat. Excepturi, cupiditate vel.</p>
            </div>
            <div className="footer-col ">
              <h4 className='font-bold text-xl pb-2'>Links</h4>
              <ul className='list-none '>
                <li><a href=""> <FontAwesomeIcon icon={faAngleRight} size='xs' /> Home</a></li>
                <li><a href=""> <FontAwesomeIcon icon={faAngleRight} size='xs' /> Shop</a></li>
                <li><a href=""> <FontAwesomeIcon icon={faAngleRight} size='xs' /> About</a></li>
                <li><a href=""> <FontAwesomeIcon icon={faAngleRight} size='xs' /> Blog</a></li>
                <li><a href=""> <FontAwesomeIcon icon={faAngleRight} size='xs' /> Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h2 className='text-xl font-bold pb-2'>Contact</h2>
              <p> <a href=""><FontAwesomeIcon icon={faEnvelope} className='mr-2' />   jayramhandicraft@gmail.com</a></p>
              <p><a href=""> <FontAwesomeIcon icon={faPhone} className='mr-2' />   +977 9810123125</a></p>
              <p><a href=""> <FontAwesomeIcon icon={faLocationDot} className='mr-2' />   Bhaktapur, Nepal</a></p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4">
        &copy; Copyright {new Date().getFullYear()} All rights reserved | Designed and Developed by Raman and Srijal
      </p>
    </footer >
  )
}

export default Footer