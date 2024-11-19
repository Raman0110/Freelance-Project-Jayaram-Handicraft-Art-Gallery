import React, { useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleAddBlog = async (e) => {
    setIsSubmitted(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name").trim();
    const slug = formData.get("slug").trim();
    const description = formData.get("description").trim();
    const image = formData.get("image");

    if (!name || !slug || !description || !image) {
      toast.error("All fields are required, including the image upload", {
        autoClose: 2000,
        position: "top-center",
        closeButton: false
      });
      setIsSubmitted(false);
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_host}/api/blog/add`, formData, { withCredentials: true });
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

      setIsSubmitted(false);
    }
  }
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const handleChange = (e) => {
    setName(e.target.value)
    setSlug(e.target.value.split(" ").join("-").toLowerCase());
  }
  return (
    <section className='px-14'>
      <ToastContainer />
      <h2 className='py-8 text-2xl font-bold text-center'>Add Blog</h2>
      <form onSubmit={handleAddBlog} className='flex flex-col gap-4 text-lg font-medium' encType="multipart/form-data">
        <label htmlFor="name">Title</label>
        <input type="text" name='name' id='name' className='p-1 outline-none text-black rounded-md' value={name} onChange={handleChange} />
        <label htmlFor="slug">Slug</label>
        <input type="text" name='slug' id='slug' className='p-1 outline-none text-black rounded-md' value={slug} />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" className='outline-none'></textarea>
        <label htmlFor="image">Upload Image</label>
        <input type="file" name="image" id="image" />
        <button className={`text-white mt-5 p-3 rounded-md ${isSubmitted ? 'bg-[#4a69b6]' : 'bg-[#0D276A]'}`} disabled={isSubmitted ? true : false} >
          Add Blog
          {
            isSubmitted &&
            <FontAwesomeIcon icon={faSpinner} spin pulse className='ml-2' />
          }
        </button>
      </form>
    </section>
  )
}

export default AddBlog