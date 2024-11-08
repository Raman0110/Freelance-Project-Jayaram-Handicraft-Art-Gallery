import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
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


const ViewBlog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  function openModal(blog) {
    setIsOpen(true);
    setBlogToDelete(blog);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/blog/delete/${blogToDelete._id}`)
      .then((res) => {
        closeModal();
        toast.success("Blog deleted successfully", {
          autoClose: 2000,
          position: "top-right",
          closeButton: false
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    axios.get("http://localhost:8000/api/blog")
      .then((res) => {
        setBlogs(res.data)
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [blogs])
  return (
    <>
      <section className='px-4'>
        <ToastContainer />
        <h2 className='text-center font-bold text-2xl py-6'>BLog List</h2>
        <table className='w-[100%] list-table'>
          <tr>
            <th>S.N</th>
            <th>Title</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          {blogs.map((blog, index) => (
            <tr className='text-center' key={index}>
              <td>{index + 1}</td>
              <td>{blog.name}</td>
              <td>{blog.createdAt}</td>
              <td>
                <Link to={`update/${blog._id}`}>
                  <FontAwesomeIcon icon={faEdit} className='icon edit-icon' />
                </Link>
                <FontAwesomeIcon icon={faRemove} className='icon' onClick={() => openModal(blog)} /></td>
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
        <h2>Do you want to delete this blog?</h2>
        <div className="flex gap-10 mt-6 justify-end">
          <button className='py-1 px-4 bg-red-600 text-white rounded-md' onClick={handleDelete}>Yes</button>
          <button className='py-1 px-4 bg-green-600 text-white rounded-md' onClick={closeModal}>No</button>
        </div>
      </Modal>
    </>
  )
}

export default ViewBlog