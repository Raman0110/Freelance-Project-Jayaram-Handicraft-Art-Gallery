import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const UpdateProductCata = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({ name: '', slug: '', active: false, image: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_host}/api/category/${id}`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id])

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleUpdate = (e) => {
    setIsSubmitted(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name').trim();
    const slug = formData.get('slug').trim();

    if (!name || !slug) {
      toast.error("All fields are required", {
        closeButton: false,
        autoClose: 2000,
        position: "top-center"
      });
      setIsSubmitted(false);
      return;
    }
    const active = e.target.active.checked ? true : false;
    formData.set('active', active.toString());
    axios.put(`${import.meta.env.VITE_host}/api/category/update/${id}`, formData, { withCredentials: true })
      .then((res) => {
        navigate("/dashboard/product/category");
      })
      .catch((err) => {
        console.log(err);
        setIsSubmitted(false);
      })
  }
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name == "name") {
      const generatedSlug = value.trim().split(" ").join("-").toLowerCase();
      setCategory((prev) => ({
        ...prev,
        name: value,
        slug: generatedSlug,
      }));
    }
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
        <img src={`${import.meta.env.VITE_host}/${category.image}`} alt="unable to load image" width="250px" />
        <button className={`text-white mt-5 p-3 rounded-md ${isSubmitted ? 'bg-[#4a69b6]' : 'bg-[#0D276A]'}`} disabled={isSubmitted ? true : false} >
          Update Category
          {
            isSubmitted &&
            <FontAwesomeIcon icon={faSpinner} spin pulse className='ml-2' />
          }
        </button>
      </form>
    </section>
  )
}

export default UpdateProductCata