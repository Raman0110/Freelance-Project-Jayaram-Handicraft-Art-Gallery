import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateSlider = () => {
  const { id } = useParams();
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_host}/api/slider/${id}`)
      .then((res) => {
        setSlider(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSlider((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name").trim();

    if (!name || !slug) {
      toast.error("All fields are required", {
        autoClose: 2000,
        position: "top-center",
        closeButton: false
      });
      return;
    }


    axios.put(`${import.meta.env.VITE_host}/api/slider/update/${id}`, formData, { withCredentials: true })
      .then((res) => {
        navigate("/dashboard/slider");
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <section className='px-14'>
      <h2 className='py-8 text-2xl font-bold text-center'>Update Slider Image</h2>
      <form className='flex flex-col gap-4 text-lg font-medium' enctype="multipart/form-data" onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name</label>
        <input type="text" name='name' id='name' className='p-1 outline-none text-black rounded-md' value={slider.name} onChange={handleChange} />

        <label htmlFor="image">Upload Image</label>
        <input type="file" name="image" id="image" />

        <img src={`${import.meta.env.VITE_host}/${slider.image}`} alt="unable to load image" width="250px" />
        <button className='bg-[#0D276A] text-white mt-5 p-3 rounded-md' type='submit' >Update Product</button>
      </form>
    </section>
  )
}

export default UpdateSlider