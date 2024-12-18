import React, { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const AddProductCata = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    setIsSubmitted(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name').trim();
    const slug = formData.get('slug').trim();
    const image = formData.get('image');
    const active = e.target.active.checked ? true : false;
    if (!name || !slug || !image) {
      toast.error("All fields are required, including the image", {
        closeButton: false,
        autoClose: 2000,
        position: "top-center"
      });
      setIsSubmitted(false);
      return;
    }

    formData.set('active', active.toString());

    try {
      await axios.post(`${import.meta.env.VITE_host}/api/category/add`, formData, { withCredentials: true });
      toast.success("Category added successfully", {
        closeButton: false,
        autoClose: 2000,
        position: "top-center"
      });
      setTimeout(() => {
        navigate("/dashboard/product/category");
      }, 2500);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred", {
        closeButton: false,
        autoClose: 2000,
        position: "top-center"
      });

      setIsSubmitted(false);
    }
  };
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const handleChange = (e) => {
    setName(e.target.value)
    setSlug(e.target.value.split(" ").join("-").toLowerCase());
  }
  return (
    <section className='px-14'>
      <ToastContainer />
      <h2 className='py-8 text-2xl font-bold text-center'>Add Product Category</h2>
      <form onSubmit={handleSubmit} className='text-lg font-medium' encType="multipart/form-data">

        <label htmlFor="name">Category Name</label>
        <input
          type="text"
          name='name'
          id='name'
          className='w-full p-1 outline-none text-black rounded-md mb-4'
          value={name}
          onChange={handleChange}
        />

        <label htmlFor="slug">Slug</label>
        <input
          type="text"
          name='slug'
          id='slug'
          value={slug}
          className='w-full p-1 outline-none text-black rounded-md mb-4'
        />

        <label htmlFor="image">Upload Image</label>
        <input
          type="file"
          name="image"
          id="image"
          className='w-full mb-4'
        />

        <label htmlFor="active">Active</label>
        <input
          type="checkbox"
          name="active"
          id="active"
          className='ml-2'
        />

        <button className={`text-white mt-5 p-3 rounded-md ${isSubmitted ? 'bg-[#4a69b6]' : 'bg-[#0D276A]'}`} disabled={isSubmitted ? true : false} >
          Add Category
          {
            isSubmitted &&
            <FontAwesomeIcon icon={faSpinner} spin pulse className='ml-2' />
          }
        </button>
      </form>
    </section>
  );
};

export default AddProductCata;
