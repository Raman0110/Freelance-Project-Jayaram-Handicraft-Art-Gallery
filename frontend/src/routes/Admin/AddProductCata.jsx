import React from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddProductCata = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const active = e.target.active.checked ? true : false;
    formData.set('active', active.toString());
    try {
      await axios.post("http://localhost:8000/api/category/add", formData);
      toast.success("Category added successfully", {
        closeButton: false,
        autoClose: 2000,
        position: "top-center"
      });
      setTimeout(() => {
        navigate("/dashboard/product/category");
      }, 2500);
    } catch (error) {
      toast.error(error.response.data.message, {
        closeButton: false,
        autoClose: 2000,
        position: "top-center"
      })
    }
  }
  return (
    <section className='px-14'>
      <ToastContainer />
      <h2 className='py-8 text-2xl font-bold text-center'>Add Product Category</h2>
      <form onSubmit={handleSubmit} className='text-lg font-medium' enctype="multipart/form-data">
        <label htmlFor="name">Category Name</label>
        <input type="text" name='name' id='name' className='w-full p-1 outline-none text-black rounded-md mb-4' />

        <label htmlFor="slug">Slug</label>
        <input type="text" name='slug' id='slug' className='w-full p-1 outline-none text-black rounded-md mb-4' />

        <label htmlFor="image">Upload Image</label>
        <input type="file" name="image" id="image" className='w-full mb-4' />

        <label htmlFor="active">Active</label>
        <input type="checkbox" name="active" id="active" className='ml-2' />

        <button className='bg-[#0D276A] text-white mt-5 p-3 rounded-md w-full'>Add Category</button>
      </form>
    </section>
  )
}

export default AddProductCata