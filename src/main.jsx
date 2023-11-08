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
import SittingsTab from './pages/course/sittingsTab/SittingsTab';
import Questions from './pages/course/questions/Questions';
import Results from './pages/course/results/Results';
import Quiz from './pages/quiz/Quiz.jsx';
import AddQuiz from './pages/quiz/addQuiz/AddQuiz.jsx';
import QuizSittings from './pages/quiz/quizSittings/QuizSittings.jsx';
import QuizResults from './pages/quiz/quizResults/QuizResults.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <div className="text-teal-500 font-bold text-3xl flex justify-center">
            Comming Soon
          </div>
        ),
      }, // Temporary, it will be dashboard component
      {
        path: 'products',
        element: <Products />,
        children: [
          { path: 'all', element: <AllProducts /> },
          { path: 'courses', element: <Courses /> },
          { path: 'coaching', element: <h1>Caoching</h1> },
        ],
      },
      {
        path: 'products/courses/:id',
        element: <SingleCourse />,
        children: [
          { path: 'outline', element: <Outline /> },
          { path: 'certificate', element: <CertificateTab /> },
          { path: 'sittings', element: <SittingsTab /> },
          { path: 'questions', element: <Questions /> },
          { path: 'results', element: <Results /> },
        ],
      },
      {
        path: 'products/courses/:id/edit-lesson/:lessonID',
        element: <EditLesson />,
      },
      {
        path: 'products/courses/:id/quiz',
        element: <Quiz />,
        children: [
          {
            path: 'add',
            element: <AddQuiz />,
          },
          {
            path: 'settings',
            element: <QuizSittings />,
          },
          {
            path: 'results',
            element: <QuizResults />,
          },
        ],
      },
      { path: 'website', element: <Website /> },
      {
        path: 'sales',
        element: (
          <div className="text-teal-500 font-bold text-3xl flex justify-center">
            Comming Soon
          </div>
        ),
      },
      {
        path: 'contacts',
        element: (
          <div className="text-teal-500 font-bold text-3xl flex justify-center">
            Comming Soon
          </div>
        ),
      },
      {
        path: 'setting',
        element: (
          <div className="text-teal-500 font-bold text-3xl flex justify-center">
            Comming Soon
          </div>
        ),
      },
      {
        path: 'login',
        element: (
          <div className="text-teal-500 font-bold text-3xl flex justify-center">
            Comming Soon
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
