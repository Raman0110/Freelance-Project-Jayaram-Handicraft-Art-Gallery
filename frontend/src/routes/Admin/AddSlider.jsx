import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSlider = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    setIsSubmitted(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name").trim();
    const image = formData.get("image");

    if (!name || !image) {
      toast.error("All fields are required, including the image upload", {
        autoClose: 2000,
        position: "top-center",
        closeButton: false
      });
      setIsSubmitted(false);
      return;
    }

    try {
      axios.post(`${import.meta.env.VITE_host}/api/slider/add`, formData, { withCredentials: true });
      toast.success("Slider Image added successfully", {
        position: "top-center",
        autoClose: 2000,
        closeButton: false
      });
      setTimeout(() => {
        navigate("/dashboard/slider");
      }, 2500);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        closeButton: false
      })
      setIsSubmitted(false);
    }
  }

  return (
    <section className='px-14'>
      <ToastContainer />
      <h2 className='py-8 text-2xl font-bold text-center'>Add Slider Image</h2>
      <form className='flex flex-col gap-4 text-lg font-medium' enctype="multipart/form-data" onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name</label>
        <input type="text" name='name' id='name' className='p-1 outline-none text-black rounded-md' />

        <label htmlFor="image">Upload Image</label>
        <input type="file" name="image" id="image" />
        <button className={`text-white mt-5 p-3 rounded-md ${isSubmitted ? 'bg-[#4a69b6]' : 'bg-[#0D276A]'}`} disabled={isSubmitted ? true : false} >
          Add Slider
          {
            isSubmitted &&
            <FontAwesomeIcon icon={faSpinner} spin pulse className='ml-2' />
          }
        </button>
      </form>
    </section>
  )
}

export default AddSlider