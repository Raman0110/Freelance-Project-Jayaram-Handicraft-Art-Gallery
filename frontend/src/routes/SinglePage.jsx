import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breedcrum/Breadcrumb';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import ProductCard from '../components/ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
  content: {
    height: 'fit-content',
    width: '40%',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
  },
  overlay: {
    zIndex: 9998,
  },
};

const SinglePage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    productName: ''
  });

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/get/${slug}`)
      .then((res) => {
        setProduct(res.data);
        setFormData((prevData) => ({
          ...prevData,
          productName: res.data.name  // Update productName when product data is fetched
        }));
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(`http://localhost:8000/api/product`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slug]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    try {
      closeModal();
      toast.success("Message Received! We will Contact You Soon Thank You", {
        autoClose: 2000,
        closeButton: false,
        position: "top-center"
      });
      await axios.post("http://localhost:8000/api/product/message", formData);
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 2000,
        closeButton: false,
        position: "top-center"
      });
      console.log('Error sending message:', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>; // Show loading state while product data is being fetched
  }

  return (
    <>
      <section>
        <ToastContainer />
        <Breadcrumb location="product" />
        <div className="container mx-auto my-4 px-2">
          <div className="flex max-md:flex-col">
            <div className="imgSection w-full md:w-3/5">
              <div className="flex flex-col-reverse lg:flex-row max-md:items-center">
                <div className="w-full product-thumb max-lg:mt-4">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    className="mySwiper"
                    modules={[FreeMode, Navigation, Thumbs]}
                    breakpoints={{
                      1024: {
                        direction: 'vertical',
                        spaceBetween: 120,
                      }
                    }}
                  >
                    <SwiperSlide>
                      <div className="product-thumbnail-image">
                        <img src={`http://localhost:8000/${product.image}`} className='cursor-pointer product-thumbnail' />
                      </div>
                    </SwiperSlide>
                    {product.thumbnails.map((thumbnail, index) => (
                      <SwiperSlide key={index}>
                        <div className="product-thumbnail-image">
                          <img src={`http://localhost:8000/${thumbnail}`} className='cursor-pointer product-thumbnail' />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="w-full lg:w-4/5 swiper-product-img">
                  <Swiper
                    modules={[FreeMode, Navigation, Thumbs]}
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <div className="img-container max-w-[450px] h-[450px] mx-auto">
                        <img src={`http://localhost:8000/${product.image}`} className='w-full h-full object-contain' />
                      </div>
                    </SwiperSlide>
                    {product.thumbnails.map((thumbnail, index) => (
                      <SwiperSlide key={index}>
                        <div className="img-container max-w-[450px] h-[450px] mx-auto">
                          <img src={`http://localhost:8000/${thumbnail}`} className='w-full h-full object-contain' />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="descSection w-full md:w-2/5 px-4 max-md:mt-6">
              <h4 className='text-3xl font-bold'>{product.name}</h4>
              <p className='inline-block px-3 rounded-md bg-[#0D276A] text-white mt-2 mb-4'>{product.category.name}</p>
              <p className='font-medium'>Size:  {product.size} inches </p>
              <p className='font-medium mt-4'>Stock: <span className='text-[#008A00]'>{product.availability}</span></p>
              <div className="flex gap-6 mt-4 text-white">
                <button className='bg-[#0D276A] hover:bg-[#49619c] py-2 px-4 rounded-md font-medium' onClick={openModal}>Get Thangka</button>
              </div>
              <h4 className='my-2 text-xl font-medium'>Description</h4>
              <p className='text-justify'>{product.description}</p>
            </div>
          </div>
          <div className='my-14 text-center'>
            <h2 className='text-2xl font-bold mt-4'>Similar Thangka</h2>
            <Swiper className='mt-8'
              modules={[Navigation]}
              navigation
              spaceBetween={10}
              slidesPerView={2}
              breakpoints={{
                768: {
                  slidesPerView: 3
                },
                1024: {
                  slidesPerView: 4
                }
              }}
            >
              {products.map((product, index) => (
                <SwiperSlide className='mb-4' key={index}>
                  <div>
                    <ProductCard product={product} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Order Modal"
        style={customStyles}
      >
        <div className='p-4 font-medium'>
          <h2 className='text-center mb-8 text-2xl text-[#49619C]'>Send Message</h2>
          <form className="flex flex-col gap-4 text-lg" onSubmit={handleMessageSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="p-1 outline-none border border-gray-500 rounded-md"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="p-1 outline-none border border-gray-500 rounded-md"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-1 outline-none border border-gray-500 rounded-md"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            {/* Hidden productName */}
            <input
              type="hidden"
              name="productName"
              value={formData.productName}  // Ensures productName is controlled
            />

            <button
              type="submit"
              className="bg-[#0D276A] hover:bg-[#49619c] py-2 px-4 rounded-md font-medium text-white"
            >
              Send
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default SinglePage;
