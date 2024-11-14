import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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

const ViewSlider = () => {
  const [sliders, setSliders] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [sliderToDelete, setSliderToDelete] = useState(null);

  function openModal(slider) {
    setIsOpen(true);
    setSliderToDelete(slider);
  }

  function closeModal() {
    setIsOpen(false);
    setSliderToDelete(null);
  }

  useEffect(() => {
    axios.get("http://192.168.1.71:8000/api/slider")
      .then((res) => {
        setSliders(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [sliders]);
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://192.168.1.71:8000/api/slider/delete/${sliderToDelete._id}`, { withCredentials: true })
      .then((res) => {
        closeModal();
        navigate("/dashboard/slider");
        toast.success("Slider deleted successfully", {
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
  return (
    <>
      <section className='px-4'>
        <ToastContainer />
        <h2 className='text-center font-bold text-2xl py-6'>Slider Images</h2>
        <table className='w-[100%] list-table'>
          <tr>
            <th>S.N</th>
            <th>Product Name</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          {sliders.map((slider, index) => (
            <tr className='text-center' key={index}>
              <td>{index + 1}</td>
              <td>{slider.name}</td>
              <td>{slider.createdAt}</td>
              <td>
                <Link to={`/dashboard/slider/update/${slider._id}`}>
                  <FontAwesomeIcon icon={faEdit} className='icon edit-icon' />
                </Link>
                <FontAwesomeIcon icon={faRemove} className='icon' onClick={() => openModal(slider)} />
              </td>
            </tr>
          ))}
        </table>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Delete Slider Modal"
        style={customStyles}
      >
        <h2>Do you want to delete this slider?</h2>
        <div className="flex gap-10 mt-6 justify-end">
          <button className='py-1 px-4 bg-red-600 text-white rounded-md' onClick={handleDelete} >Yes</button>
          <button className='py-1 px-4 bg-green-600 text-white rounded-md' onClick={closeModal}>No</button>
        </div>
      </Modal>
    </>
  )
}

export default ViewSlider