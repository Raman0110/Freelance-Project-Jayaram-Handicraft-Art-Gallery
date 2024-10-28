import { faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Messages = () => {
  return (
    <section className='px-4'>
      <h2 className='text-center font-bold text-2xl py-6'>Messages</h2>
      <table className='w-[100%] list-table'>
        <tr>
          <th>S.N</th>
          <th>Name</th>
          <th>Message</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
        <tr className='text-center'>
          <td>1</td>
          <td>Buddha Life Thangka</td>
          <td></td>
          <td>2024/10/22</td>
          <td><FontAwesomeIcon /> <FontAwesomeIcon icon={faRemove} className='icon' /></td>
        </tr>
        <tr className='text-center'>
          <td>1</td>
          <td>Buddha Life Thangka</td>
          <td></td>
          <td>2024/10/22</td>
          <td><FontAwesomeIcon /> <FontAwesomeIcon icon={faRemove} className='icon' /></td>
        </tr>
        <tr className='text-center'>
          <td>1</td>
          <td>Buddha Life Thangka</td>
          <td></td>
          <td>2024/10/22</td>
          <td><FontAwesomeIcon /> <FontAwesomeIcon icon={faRemove} className='icon' /></td>
        </tr>
      </table>
    </section>
  )
}

export default Messages