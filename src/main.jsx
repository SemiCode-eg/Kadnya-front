import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import RootLayout from './RootLayout.jsx';
import Products from './pages/products/Products.jsx';
import Website from './pages/website/Website.jsx';
import Courses from './pages/products/courses/Courses';
import AllProducts from './pages/products/allProducts/AllProducts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Products /> },
      {
        path: 'products',
        element: <Products />,
        children: [
          { path: 'all', element: <AllProducts /> },
          { path: 'courses', element: <Courses /> },
        ],
      },
      { path: 'website', element: <Website /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
