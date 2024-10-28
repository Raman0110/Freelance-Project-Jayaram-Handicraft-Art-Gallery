import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ViewProduct = () => {
  return (
    <section className='px-4'>
      <h2 className='text-center font-bold text-2xl py-6'>Product List</h2>
      <table className='w-[100%] list-table'>
        <tr>
          <th>S.N</th>
          <th>Product Name</th>
          <th>Size</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
        <tr className='text-center'>
          <td>1</td>
          <td>Buddha Life Thangka</td>
          <td>10*12</td>
          <td>2024/10/22</td>
          <td><FontAwesomeIcon icon={faEdit} className='icon edit-icon' /> <FontAwesomeIcon icon={faRemove} className='icon' /></td>
        </tr>
        <tr className='text-center'>
          <td>1</td>
          <td>Buddha Life Thangka</td>
          <td>10*12</td>
          <td>2024/10/22</td>
          <td><FontAwesomeIcon icon={faEdit} className='icon edit-icon' /> <FontAwesomeIcon icon={faRemove} className='icon' /></td>
        </tr>
        <tr className='text-center'>
          <td>1</td>
          <td>Buddha Life Thangka</td>
          <td>10*12</td>
          <td>2024/10/22</td>
          <td><FontAwesomeIcon icon={faEdit} className='icon edit-icon' /> <FontAwesomeIcon icon={faRemove} className='icon' /></td>
        </tr>
      </table>
    </section>
  )
}

export default ViewProduct