import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/category")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name').trim();
    const slug = formData.get('slug').trim();
    const category = formData.get('category');
    const size = formData.get('size').trim();
    const description = formData.get('description').trim();
    const availability = formData.get('availability').trim();
    const featured = formData.get('featured');
    const mostPopular = formData.get('mostPopular');

    if (!name || !slug || !category || !size || !description || !availability || !featured || !mostPopular) {
      toast.error("All fields are required", {
        autoClose: 2000,
        position: "top-center",
        closeButton: false
      });
      return;
    }
    axios.put(`http://localhost:8000/api/product/update/${id}`, formData, { withCredentials: true })
      .then((res) => {
        navigate("/dashboard/product");
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name == "name") {
      const generatedSlug = value.trim().split(" ").join("-").toLowerCase();
      setProduct((prev) => ({
        ...prev,
        name: value,
        slug: generatedSlug,
      }));
    }
    setProduct((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <section className='px-14'>
      <h2 className='py-8 text-2xl font-bold text-center'>Update Product</h2>
      <form className='flex flex-col gap-4 text-lg font-medium' enctype="multipart/form-data" onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name</label>
        <input type="text" onChange={handleChange} name='name' id='name' value={product.name} className='p-1 outline-none text-black rounded-md' />

        <label htmlFor="slug">Slug</label>
        <input type="text" name='slug' id='slug' onChange={handleChange} value={product.slug} className='p-1 outline-none text-black rounded-md' />

        <label htmlFor="category">Category</label>
        <select name="category" id="category" className='outline-none'>
          {categories.map((category, index) => (
            <option value={`${category._id}`} key={index}>{category.name}</option>
          ))}
        </select>

        <label htmlFor="size">Size</label>
        <input type="text" name='size' id='size' value={product.size} onChange={handleChange} className='p-1 outline-none text-black rounded-md' />

        <label htmlFor="description">Description</label>
        <input type="text" name='description' id='description' value={product.description} onChange={handleChange} className='p-1 outline-none text-black rounded-md' />

        <label htmlFor="availability">Availability</label>
        <input type="text" name='availability' id='availability' value={product.availability} onChange={handleChange} className='p-1 outline-none text-black rounded-md' />

        <label htmlFor="image">Upload Image</label>
        <input type="file" name="image" id="image" />
        <img src={`http://localhost:8000/${product.image}`} alt="unable to load image" width="250px" />

        <label htmlFor="thumbnails">Upload Thumbnails</label>
        <input type="file" name="thumbnails" id="thumbnails" multiple />
        <div className="flex gap-4">
          {product.thumbnails && product.thumbnails.map((thumbnail, index) => (
            <img src={`http://localhost:8000/${thumbnail}`} key={index} alt="unable to load image" width="250px" />
          ))}
        </div>
        <label htmlFor="featured">Featured</label>
        <select name="featured" id="featured" className='outline-none'>
          <option value="">Choose</option>
          <option value={true} selected={product.featured}>Yes</option>
          <option value={false} selected={!product.featured}>No</option>
        </select>

        <label htmlFor="mostPopular">Most Popular</label>
        <select name="mostPopular" id="mostPopular" className='outline-none'>
          <option value="">Choose</option>
          <option value={true} selected={product.mostPopular}>Yes</option>
          <option value={false} selected={!product.mostPopular}>No</option>
        </select>

        <button className='bg-[#0D276A] text-white mt-5 p-3 rounded-md' type='submit'>Update Product</button>
      </form>
    </section>
  )
}

export default UpdateProduct