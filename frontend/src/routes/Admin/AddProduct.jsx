import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddProduct = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission
  const handleAddProduct = async (e) => {
    setIsSubmitted(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name').trim();
    const slug = formData.get('slug').trim();
    const categoryId = parseInt(formData.get('category'));
    const size = formData.get('size').trim();
    const description = formData.get('description').trim();
    const availability = formData.get('availability').trim();
    const image = formData.get('image');
    const featured = formData.get('featured');
    const mostPopular = formData.get('mostPopular');
    if (!name || !slug || !categoryId || !size || !description || !availability || !image || featured == "" || mostPopular == "") {
      toast.error("All fields are required, including the image upload", {
        autoClose: 2000,
        position: "top-center",
        closeButton: false
      });
      setIsSubmitted(false);
      return;
    }
    formData.append('categoryId', categoryId);
    try {
      await axios.post(`${import.meta.env.VITE_host}/api/product/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      });
      toast.success("Product added successfully", {
        autoClose: 2000,
        position: "top-center",
        closeButton: false
      });
      setTimeout(() => {
        navigate('/dashboard/product');
      }, 2500);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong", {
        autoClose: 2000,
        position: "top-center",
        closeButton: false
      });
      setIsSubmitted(false);
    }
  }

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_host}/api/category`)
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
    setSlug(e.target.value.split(" ").join("-").toLowerCase());
  }

  return (
    <section className='px-14'>
      <ToastContainer />
      <h2 className='py-8 text-2xl font-bold text-center'>Add Product</h2>
      <form className='flex flex-col gap-4 text-lg font-medium' encType="multipart/form-data" onSubmit={handleAddProduct}>

        <label htmlFor="name">Product Name</label>
        <input type="text" name='name' id='name' className='p-1 outline-none text-black rounded-md' value={name} onChange={handleChange} />

        <label htmlFor="slug">Slug</label>
        <input type="text" name='slug' id='slug' className='p-1 outline-none text-black rounded-md' value={slug} />

        <label htmlFor="category">Category</label>
        <select name="category" id="category" className='outline-none'>
          {categories.map((category, index) => (
            <option value={category.id} key={index}>{category.name}</option>
          ))}
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
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <label htmlFor="mostPopular">Most Popular</label>
        <select name="mostPopular" id="mostPopular" className='outline-none'>
          <option value="">Choose</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <button className={`text-white mt-5 p-3 rounded-md ${isSubmitted ? 'bg-[#4a69b6]' : 'bg-[#0D276A]'}`} disabled={isSubmitted ? true : false} >
          Add Product
          {
            isSubmitted &&
            <FontAwesomeIcon icon={faSpinner} spin pulse className='ml-2' />
          }
        </button>
      </form>
    </section>
  )
}

export default AddProduct;
