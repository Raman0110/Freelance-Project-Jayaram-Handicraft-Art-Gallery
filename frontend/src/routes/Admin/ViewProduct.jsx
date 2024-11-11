import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:8000/api/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [products]);
  function openModal(product) {
    setIsOpen(true);
    setProductToDelete(product);
  }
  function closeModal() {
    setIsOpen(false);
    setProductToDelete(null);
  }
  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/product/delete/${productToDelete._id}`, { withCredentials: true })
      .then((res) => {
        closeModal();
        navigate("/dashboard/product");
        toast.success("Product deleted successfully", {
          autoClose: 2000,
          position: "top-center",
          closeButton: false
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <>
      <section className='px-4'>
        <ToastContainer />
        <h2 className='text-center font-bold text-2xl py-6'>Product List</h2>
        <table className='w-[100%] list-table'>
          <tr>
            <th>S.N</th>
            <th>Product Name</th>
            <th>Size</th>
            <th>Category</th>
            <th>Date Added</th>
            <th>Action</th>
          </tr>
          {products.map((product, index) => (
            <tr className='text-center' key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.size}</td>
              <td>{product.category.name}</td>
              <td>{product.createdAt}</td>
              <td>
                <Link to={`update/${product._id}`}>
                  <FontAwesomeIcon icon={faEdit} className='icon edit-icon' />
                </Link>
                <FontAwesomeIcon icon={faRemove} className='icon' onClick={() => openModal(product)} />
              </td>
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
        <h2>Do you want to delete this product?</h2>
        <div className="flex gap-10 mt-6 justify-end">
          <button onClick={handleDelete} className='py-1 px-4 bg-red-600 text-white rounded-md'>Yes</button>
          <button className='py-1 px-4 bg-green-600 text-white rounded-md' onClick={closeModal}>No</button>
        </div>
      </Modal>
    </>
  )
}

export default ViewProduct