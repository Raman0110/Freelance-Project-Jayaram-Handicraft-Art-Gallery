import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const customStyles = {
  content: {
    height: '20%',
    width: '30%',
    left: '50%',
    transform: 'translate(-50%)'
  },
};

const ViewProductCata = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  function openModal(category) {
    setIsOpen(true);
    setCategoryToDelete(category);
  }
  function closeModal() {
    setIsOpen(false);
    setCategoryToDelete(null);
  }
  useEffect(() => {
    axios.get("http://localhost:8000/api/category")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [categories]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/category/delete/${categoryToDelete._id}`, { withCredentials: true })
      .then((res) => {
        closeModal();
        toast.success("Category deleted successfully", {
          autoClose: 2000,
          position: "top-center",
          closeButton: false
        })
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message, {
          autoClose: 2000,
          position: "top-center",
          closeButton: false
        })
      })
  }

  return (<>
    <section className='px-4'>
      <ToastContainer />
      <h2 className='text-center font-bold text-2xl py-6'>Product Categories</h2>
      <table className='w-[100%] list-table text-center'>
        <tr>
          <th>S.N</th>
          <th>Product Name</th>
          <th>Date</th>
          <th>Active</th>
          <th>Action</th>
        </tr>
        {categories.map((category, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{category.name}</td>
            <td>{category.createdAt}</td>
            <td>{category.active ? "Yes" : "No"}</td>
            <td>
              <Link to={`update/${category._id}`}>
                <FontAwesomeIcon icon={faEdit} className='icon edit-icon' />
              </Link>
              <FontAwesomeIcon icon={faRemove} className='icon' onClick={() => openModal(category)} /></td>
          </tr>
        ))}
      </table>
    </section>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <h2>Do you want to delete this category?</h2>
      <div className="flex gap-10 mt-6 justify-end">
        <button onClick={handleDelete} className='py-1 px-4 bg-red-600 text-white rounded-md'>Yes</button>
        <button className='py-1 px-4 bg-green-600 text-white rounded-md' onClick={closeModal}>No</button>
      </div>
    </Modal>
  </>
  )
}

export default ViewProductCata