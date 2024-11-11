import React from 'react'
import Breadcrumb from '../components/Breedcrum/Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Contact = () => {
  const handleSendMessage = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    try {
      await axios.post("http://localhost:8000/api/message/add", { name, email, message });
      toast.success("Message Sent Successfully", {
        autoClose: 2000,
        position: "top-center",
        closeButton: false
      })
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className='max-sm'>
      <ToastContainer />
      <div className="container mx-auto">
        <Breadcrumb location='Contact' />
        <div className="flex items-center justify-between max-md:flex-col-reverse bg-white rounded-md">
          <div className="form-sec px-4 w-1/2 max-md:w-full">
            <h1 className='text-3xl font-bold mb-4 capitalize'>Contact us</h1>
            <form onSubmit={handleSendMessage} className='mb-4'>
              <div className="relative form-input w-full mb-2">
                <input type="text" name="name" id="name" className='w-full border-gray-400 border rounded-md outline-[#0D276A] p-2 ps-8' placeholder='Name' />
                <FontAwesomeIcon icon={faUser} className='absolute left-2 top-3 text-gray-400' />
              </div>
              <div className="relative form-input mb-2">
                <input type="email" name="email" id="email" className='w-full border-gray-400 border rounded-md outline-[#0D276A] p-2 ps-8' placeholder='Email' />
                <FontAwesomeIcon icon={faEnvelope} className='absolute left-2 top-3 text-gray-400' />
              </div>
              <textarea name="message" id="message" placeholder='Message' className='border-gray-400 border w-full outline-[#0D276A] p-2 rounded-md' rows='6' />
              <button className='transition-colors duration-300 ease-out bg-[#E64D3D] hover:bg-[#b23e31] p-2 text-white rounded-md w-full' >Send</button>
            </form>
          </div>
          <div className="img-sec w-1/2 max-sm:w-[350px] max-md:w-[400px]">
            <img src="/images/contact.jpg" alt="" />
          </div>
        </div>
        <div className="map mb-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28263.98120907261!2d85.3729688731201!3d27.686467476505875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aa2babeb1db%3A0x45c7ae5da09c972a!2sSainik%20Awasiya%20Mahavidyalaya%20-%20Bhaktapur!5e0!3m2!1sen!2snp!4v1728028767125!5m2!1sen!2snp" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full'></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact