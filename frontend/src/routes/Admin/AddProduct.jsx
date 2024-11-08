import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const AddProduct = () => {
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      await axios.post("http://localhost:8000/api/product/add", formData);
      toast.success("Product added successfully", {
        autoClose: 2000,
        position: "top-center",
        closeButton: false
      })
    } catch (error) {
      console.log(error);
      toast.error(error, {
        autoClose: 2000,
        position: "top-center",
        closeButton: false
      })
    }
  }
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/category")
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <section className='px-14'>
      <ToastContainer />
      <h2 className='py-8 text-2xl font-bold text-center'>Add Product</h2>
      <form className='flex flex-col gap-4 text-lg font-medium' enctype="multipart/form-data" onSubmit={handleAddProduct}>
        <label htmlFor="name">Product Name</label>
        <input type="text" name='name' id='name' className='p-1 outline-none text-black rounded-md' />

        <label htmlFor="slug">Slug</label>
        <input type="text" name='slug' id='slug' className='p-1 outline-none text-black rounded-md' />

        <label htmlFor="category">Category</label>
        <select name="category" id="category" className='outline-none'>
          {
            categories.map((category, index) => (
              <option value={`${category._id}`} key={index}>{category.name}</option>
            ))
          }
        </select>

        <label htmlFor="size">Size</label>
        <input type="text" name='size' id='size' className='p-1 outline-none text-black rounded-md' />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" className='p-1 outline-none'></textarea>

        <label htmlFor="availability">Availability</label>
        <input type="text" name='availability' id='availability' className='p-1 outline-none text-black rounded-md' />

        <label htmlFor="image">Upload Main Image</label>
        <input type="file" name="image" id="image" />

        <label htmlFor="thumbnails">Upload Thumbnails</label>
        <input type="file" name="thumbnails" id="thumbnails" multiple />

        <label htmlFor="featured">Featured</label>
        <select name="featured" id="featured" className='outline-none'>
          <option value="">Choose</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <label htmlFor="mostPopular">Most Popular</label>
        <select name="mostPopular" id="mostPopular" className='outline-none'>
          <option value="">Choose</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <button className='bg-[#0D276A] text-white mt-5 p-3 rounded-md'>Add Product</button>
      </form>
    </section>
  )
}

export default AddProduct