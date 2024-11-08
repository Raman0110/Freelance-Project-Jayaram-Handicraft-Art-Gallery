import React, { useEffect, useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBLog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({ name: '', slug: '', description: '', image: '' });
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:8000/api/blog/${id}`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios.put(`http://localhost:8000/api/blog/update/${id}`, formData)
      .then((res) => {
        navigate("/dashboard/blog");
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <section className='px-14'>
      <ToastContainer />
      <h2 className='py-8 text-2xl font-bold text-center'>Update Blog</h2>
      <form className='flex flex-col gap-4 text-lg font-medium' encType="multipart/form-data" onSubmit={handleSubmit}>
        <label htmlFor="name">Title</label>
        <input type="text" name='name' id='name' className='p-1 outline-none text-black rounded-md' value={blog.name} onChange={handleChange} />

        <label htmlFor="slug">Slug</label>
        <input type="text" name='slug' id='slug' className='p-1 outline-none text-black rounded-md' value={blog.slug} onChange={handleChange} />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" className='outline-none' value={blog.description} onChange={handleChange} />

        <label htmlFor="image">Upload Image</label>
        <input type="file" name="image" id="image" />

        <img src={`http://localhost:8000/${blog.image}`} alt="unable to load image" width="250px" />
        <button className='bg-[#0D276A] text-white mt-5 p-3 rounded-md'>Update Blog</button>
      </form>
    </section>
  )
}

export default UpdateBLog