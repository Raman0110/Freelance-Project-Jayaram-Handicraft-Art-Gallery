import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import axios from "axios";

const UpdateProductCata = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({ name: '', slug: '', active: false, image: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/category/${id}`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id])
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const active = e.target.active.checked ? true : false;
    formData.set('active', active.toString());
    axios.put(`http://localhost:8000/api/category/update/${id}`, formData)
      .then((res) => {
        navigate("/dashboard/product/category");
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCategory((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  return (
    <section className='px-14'>
      <ToastContainer />
      <h2 className='py-8 text-2xl font-bold text-center'>Update Product Category</h2>
      <form className='text-lg font-medium' enctype="multipart/form-data" onSubmit={handleUpdate}>

        <label htmlFor="name">Category Name</label>
        <input type="text" name='name' id='name' onChange={handleChange} className='w-full p-1 outline-none text-black rounded-md mb-4' value={category.name} />

        <label htmlFor="slug">Slug</label>
        <input type="text" name='slug' id='slug' className='w-full p-1 outline-none text-black rounded-md mb-4' onChange={handleChange} value={category.slug} />

        <label htmlFor="image">Upload Image</label>
        <input type="file" name="image" id="image" className='w-full mb-4' />

        <label htmlFor="active">Active</label>
        <input type="checkbox" onChange={handleChange} name="active" id="active" className='ml-2' checked={category.active} />
        <img src={`http://localhost:8000/${category.image}`} alt="unable to load image" width="250px" />
        <button className='bg-[#0D276A] text-white mt-5 p-3 rounded-md w-full'>Update Category</button>
      </form>
    </section>
  )
}

export default UpdateProductCata