import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Contact from './routes/Contact.jsx';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import Shop from './routes/Shop.jsx';
import Blog from './routes/Blog.jsx';
import Layout from './routes/Layout/Layout.jsx';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Login from './routes/Login.jsx';
import SinglePage from './routes/SinglePage.jsx';
import BlogSinglePage from './routes/BlogSinglePage.jsx';
import CategoryPage from './routes/CategoryPage.jsx';
import CategorySinglePage from './routes/CategorySinglePage.jsx';
import Signup from './routes/Signup.jsx';
import Profile from './routes/Profile.jsx';
import UpdateProfile from './routes/UpdateProfile.jsx';
import ViewProduct from './routes/Admin/ViewProduct.jsx';
import DashboardLayout from './routes/Admin/DashboardLayout.jsx';
import Dashboard from './routes/Admin/Dashboard.jsx';
import AddProduct from './routes/Admin/AddProduct.jsx';
import AddBlog from './routes/Admin/AddBlog.jsx';
import AddProductCata from './routes/Admin/AddProductCata.jsx';
import ViewBlog from './routes/Admin/ViewBlog.jsx';
import ViewProductCata from './routes/Admin/ViewProductCata.jsx';
import ViewSlider from './routes/Admin/ViewSlider.jsx';
import AddSlider from './routes/Admin/AddSlider.jsx';
import Messages from './routes/Admin/Messages.jsx';
import Orders from './routes/Admin/Orders.jsx';
import UpdateProductCata from './routes/Admin/UpdateProductCata.jsx';
import UpdateBLog from './routes/Admin/UpdateBlog.jsx';
import UpdateProduct from './routes/Admin/UpdateProduct.jsx';
import UpdateSlider from './routes/Admin/UpdateSlider.jsx';
config.autoAddCss = false

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/shop", element: <Shop /> },
      { path: "/blogs", element: <Blog /> },
      { path: "/product/:slug", element: <SinglePage /> },
      { path: "/blog/:slug", element: <BlogSinglePage /> },
      { path: "/categories", element: <CategoryPage /> },
      { path: "/category/:id", element: <CategorySinglePage /> },
      { path: "/profile", element: <Profile /> },
      { path: "/profile/update", element: <UpdateProfile /> },
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "product", element: <ViewProduct /> },
      { path: "blog", element: <ViewBlog /> },
      { path: "slider", element: <ViewSlider /> },
      { path: "slider/add", element: <AddSlider /> },
      { path: "slider/update/:id", element: <UpdateSlider /> },
      { path: "product/category", element: <ViewProductCata /> },
      { path: "product/add", element: <AddProduct /> },
      { path: "product/update/:id", element: <UpdateProduct /> },
      { path: "blog/add", element: <AddBlog /> },
      { path: "blog/update/:id", element: <UpdateBLog /> },
      { path: "product/category/add", element: <AddProductCata /> },
      { path: "product/category/update/:id", element: <UpdateProductCata /> },
      { path: "messages", element: <Messages /> },
      { path: "orders", element: <Orders /> },
    ]
  }]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
