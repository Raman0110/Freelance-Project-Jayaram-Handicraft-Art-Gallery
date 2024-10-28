import React from 'react'

const AddProductCata = () => {
  return (
    <section className='px-14'>

      <h2 className='py-8 text-2xl font-bold text-center'>Add Product Category</h2>
      <form action="" className='flex flex-col gap-4 text-lg font-medium'>
        <label htmlFor="name">Category Name</label>
        <input type="text" name='name' id='name' className='p-1 outline-none text-black rounded-md' />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" className='outline-none'></textarea>
        <button className='bg-[#0D276A] text-white mt-5 p-3 rounded-md'>Add Category</button>
      </form>
    </section>
  )
}

export default AddProductCata