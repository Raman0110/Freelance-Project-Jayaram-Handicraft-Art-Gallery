import { faEye, faRemove, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
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
const customStyles2 = {
  content: {
    height: 'fit-content',
    width: '40%',
    left: '50%',
    top: '10%',
    transform: 'translate(-50%)'
  },
};


const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState(null);
  const [viewIsOpen, setViewOpen] = useState(false);
  const [messageToView, setMessageToView] = useState({});

  function openModal(message) {
    setIsOpen(true);
    setMessageToDelete(message);
  }
  function closeModal() {
    setIsOpen(false);
    setMessageToDelete(null);
  }
  function openViewModal(message) {
    setViewOpen(true);
    setMessageToView(message)
  }
  function closeViewModal() {
    setViewOpen(false);
  }
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_host}/api/message`)
      .then((res) => {
        setMessages(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [messages]);

  const handleDelete = () => {
    axios.delete(`${import.meta.env.VITE_host}/api/message/delete/${messageToDelete.id}`)
      .then((res) => {
        setMessages(messages.filter((message) => message.id !== messageToDelete.id));
        closeModal();
        toast.success("Message deleted successfully", {
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
      <h2 className='text-center font-bold text-2xl py-6'>Messages</h2>
      <table className='w-[100%] list-table'>
        <tr>
          <th>S.N</th>
          <th>Name</th>
          <th>Message</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
        {messages.map((message, index) => (
          <tr className='text-center' key={index}>
            <td>{index + 1}</td>
            <td>{message.name}</td>
            <td>{message.message}</td>
            <td>{message.createdAt}</td>
            <td>
              <FontAwesomeIcon icon={faEye} color='#2F52DA' className='cursor-pointer mr-2' onClick={() => openViewModal(message)} />
              <FontAwesomeIcon icon={faRemove} className='icon' onClick={() => openModal(message)} />
            </td>
          </tr>
        ))}
      </table>
    </section>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Delete Modal"
      style={customStyles}
    >
      <h2>Do you want to delete this message?</h2>
      <div className="flex gap-10 mt-6 justify-end">
        <button className='py-1 px-4 bg-red-600 text-white rounded-md' onClick={handleDelete}>Yes</button>
        <button className='py-1 px-4 bg-green-600 text-white rounded-md' onClick={closeModal}>No</button>
      </div>
    </Modal>
    <Modal
      isOpen={viewIsOpen}
      onRequestClose={closeViewModal}
      contentLabel="Message Modal"
      style={customStyles2}
    >
      <h2 className='text-center font-medium text-xl text-[#2F52DA]'>Message From {messageToView.name}</h2>
      <div className="mt-6">
        <p>
          <span className='text-[#2F52DA] font-medium'>Email:</span>  {messageToView.email}
        </p>
        <p className='py-4'>
          <span className='text-[#2F52DA] font-medium'>Message:</span> {messageToView.message}
        </p>
      </div>
    </Modal>
  </>
  )
}

export default Messages