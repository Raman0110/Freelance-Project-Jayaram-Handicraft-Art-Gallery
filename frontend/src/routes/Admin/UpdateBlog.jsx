import React, { useEffect, useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const UpdateBLog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({ name: '', slug: '', description: '', image: '' });
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_host}/api/blog/${id}`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "name") {
      const generatedSlug = value.trim().split(" ").join("-").toLowerCase();
      setBlog((prev) => ({
        ...prev,
        name: value,
        slug: generatedSlug,
      }));
    }
    setBlog((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    setIsSubmitted(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name").trim();
    const slug = formData.get("slug").trim();
    const description = formData.get("description").trim();

    if (!name || !slug || !description) {
      toast.error("All fields are required", {
        autoClose: 2000,
        position: "top-center",
        closeButton: false
      });
      setIsSubmitted(false);
      return;
    }
    axios.put(`${import.meta.env.VITE_host}/api/blog/update/${id}`, formData, { withCredentials: true })
      .then((res) => {
        navigate("/dashboard/blog");
      })
      .catch((err) => {
        console.log(err);
        setIsSubmitted(false);
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

        <img src={`${import.meta.env.VITE_host}/${blog.image}`} alt="unable to load image" width="250px" />
        <button className={`text-white mt-5 p-3 rounded-md ${isSubmitted ? 'bg-[#4a69b6]' : 'bg-[#0D276A]'}`} disabled={isSubmitted ? true : false} >
          Update Blog
          {
            isSubmitted &&
            <FontAwesomeIcon icon={faSpinner} spin pulse className='ml-2' />
          }
        </button>
      </form>
    </section>
  )
}

export default UpdateBLog