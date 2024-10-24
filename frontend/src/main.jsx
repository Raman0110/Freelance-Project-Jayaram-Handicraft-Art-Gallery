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
      { path: "/product/:id", element: <SinglePage /> }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
