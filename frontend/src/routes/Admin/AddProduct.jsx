import React from 'react'

const AddProduct = () => {
  return (
    <section className='px-14'>
      <h2 className='py-8 text-2xl font-bold text-center'>Add Product</h2>
      <form action="" className='flex flex-col gap-4 text-lg font-medium'>
        <label htmlFor="name">Product Name</label>
        <input type="text" name='name' id='name' className='p-1 outline-none text-black rounded-md' />
        <label htmlFor="size">Size</label>
        <input type="text" name='size' id='size' className='p-1 outline-none text-black rounded-md' />
        <label htmlFor="description">Description</label>
        <input type="text" name='description' id='description' className='p-1 outline-none text-black rounded-md' />
        <label htmlFor="stock">Availability</label>
        <input type="text" name='stock' id='stock' className='p-1 outline-none text-black rounded-md' />
        <label htmlFor="image">Upload Image</label>
        <input type="file" name="image" id="image" />
        <button className='bg-[#0D276A] text-white mt-5 p-3 rounded-md'>Add Product</button>
      </form>
    </section>
  )
}

export default AddProduct