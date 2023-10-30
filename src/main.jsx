import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import RootLayout from './RootLayout.jsx';
import Products from './pages/products/Products.jsx';
import Website from './pages/website/Website.jsx';
import Courses from './pages/products/courses/Courses';
import AllProducts from './pages/products/allProducts/AllProducts';
import SingleCourse from './pages/course/SingleCourse';
import Outline from './pages/course/outline/Outline';
import EditLesson from './pages/course/editLesson/EditLesson';
import CertificateTab from './pages/course/certificateTab/CertificateTab';
import SittingsTab from './pages/course/hittingsTab/SittingsTab';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Products /> }, // Temporary, it will be dashboard component
      {
        path: 'products',
        element: <Products />,
        children: [
          { path: 'all', element: <AllProducts /> },
          { path: 'courses', element: <Courses /> },
        ],
      },
      { path: 'website', element: <Website /> },
      {
        path: 'products/courses/:id',
        element: <SingleCourse />,
        children: [
          { path: 'outline', element: <Outline /> },
          { path: 'certificate', element: <CertificateTab /> },
          { path: 'sittings', element: <SittingsTab /> },
        ],
      },
      {
        path: 'products/courses/:id/edit-lesson/:lessonID',
        element: <EditLesson />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
