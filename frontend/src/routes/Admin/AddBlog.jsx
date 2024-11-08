import React from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const navigate = useNavigate();
  const handleAddBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      await axios.post("http://localhost:8000/api/blog/add", formData);
      navigate("/dashboard/blog");
      toast.success("Blog added successfully", {
        autoClose: 2000,
        closeButton: false,
        position: "top-center"
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 2000,
        closeButton: false,
        position: "top-center"
      })
    }
  }
  return (
    <section className='px-14'>
      <ToastContainer />
      <h2 className='py-8 text-2xl font-bold text-center'>Add Blog</h2>
      <form onSubmit={handleAddBlog} className='flex flex-col gap-4 text-lg font-medium' encType="multipart/form-data">
        <label htmlFor="name">Title</label>
        <input type="text" name='name' id='name' className='p-1 outline-none text-black rounded-md' />
        <label htmlFor="slug">Slug</label>
        <input type="text" name='slug' id='slug' className='p-1 outline-none text-black rounded-md' />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" className='outline-none'></textarea>
        <label htmlFor="image">Upload Image</label>
        <input type="file" name="image" id="image" />
        <button className='bg-[#0D276A] text-white mt-5 p-3 rounded-md'>Add Blog</button>
      </form>
    </section>
  )
}

export default AddBlog