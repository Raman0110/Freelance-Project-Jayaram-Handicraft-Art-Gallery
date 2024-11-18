import { faBell, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Topbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios.post("https://jayaramhandicraftartgallery.com.np/api/auth/logout", {}, { withCredentials: true })
      .then((res) => {
        navigate('/login')
      })
      .catch((err) => {
        console.log(err);
      })
  };
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("http://192.168.1.71:8000/api/message")
      .then((res) => {
        setMessages(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [messages])
  return (
    <section className='shadow-md px-8 py-3 flex gap-8 justify-end items-center'>
      <div>
        <Link to="/dashboard/messages">
          <a className='item-container bg-white w-9 h-9 flex justify-center items-center rounded-full cursor-pointer relative'>
            <FontAwesomeIcon icon={faBell} color='#2E53DA' />
            {messages.length !== 0 &&
              <p className='w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center absolute top-0 -right-3'>{messages.length}</p>
            }
          </a>
        </Link>
      </div>
      <div className='cursor-pointer'>
        <Link className='item-container' to="/dashboard/profile"><FontAwesomeIcon icon={faUser} color='#2E53DA' /> Profile</Link>
        <a className='cursor-pointer ml-4' onClick={handleLogout}> <FontAwesomeIcon icon={faSignOut} color='#2E53DA' /> </a>
      </div>
    </section>
  )
}

export default Topbar