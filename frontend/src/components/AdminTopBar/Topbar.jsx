import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Topbar = () => {
  return (
    <section className='shadow-md px-8 py-3 flex gap-8 justify-end items-center'>
      <div>
        <a className='item-container bg-white w-9 h-9 flex justify-center items-center rounded-full cursor-pointer'><FontAwesomeIcon icon={faBell} color='#2E53DA' /></a>
      </div>
      <div className='cursor-pointer'>
        <a className='item-container'><FontAwesomeIcon icon={faUser} color='#2E53DA' /> Profile</a>
      </div>
    </section>
  )
}

export default Topbar