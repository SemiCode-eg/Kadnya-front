import RootLayout from '../RootLayout.jsx'
import Products from '../pages/products/Products.jsx'
import Website from '../pages/website/Website.jsx'
import Courses from '../pages/products/courses/Courses.jsx'
import AllProducts from '../pages/products/allProducts/AllProducts.jsx'
import SingleCourse from '../pages/course/SingleCourse.jsx'
import Outline from '../pages/course/outline/Outline.jsx'
import LessonDetails from '../pages/course/lessonDetails/LessonDetails.jsx'
import CertificateTab from '../pages/course/certificateTab/CertificateTab.jsx'
import SittingsTab from '../pages/course/sittingsTab/SittingsTab.jsx'
import Quiz from '../pages/quiz/Quiz.jsx'
import AddQuiz from '../pages/quiz/addQuiz/AddQuiz.jsx'
import QuizSettings from '../pages/quiz/quizSettings/QuizSettings.jsx'
import QuizResults from '../pages/quiz/quizResults/QuizResults.jsx'
import Coaching from '../pages/coaching/Coaching.jsx'
import CoachingDashboard from '../pages/coaching/coachingDashboard/CoachingDashboard.jsx'
import CoachingPrograms from '../pages/coaching/coachingPrograms/CoachingPrograms.jsx'
import CoachingSittings from '../pages/coaching/coachingSittings/CoachingSittings.jsx'
import CoachPrograms from '../pages/coachPrograms/CoachPrograms.jsx'
import ProgramClients from '../pages/coachPrograms/programClients/ProgramClients.jsx'
import ProgramSettings from '../pages/coachPrograms/programsSettings/ProgramSettings.jsx'
import ErrorPage from '../pages/errorPage/ErrorPage.jsx'
import { createBrowserRouter } from 'react-router-dom'

const quizParamHandler = ({ params }) => {
  if (isNaN(params.quizId)) {
    throw new Response('Bad Request', {
      statusText: 'Quiz not found!',
      status: 404,
    })
  }
  return null
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <p className="text-teal-500 font-bold text-3xl flex justify-center">
            Coming Soon
          </p>
        ),
      }, // Temporary, it will be dashboard component
      {
        path: 'products',
        element: <Products />,
        children: [
          { path: 'all', element: <AllProducts /> },
          { path: 'courses', element: <Courses /> },
        ],
      },
      {
        path: 'products/courses/:id',
        element: <SingleCourse />,
        children: [
          { path: 'outline', element: <Outline /> },
          { path: 'certificate', element: <CertificateTab /> },
          { path: 'settings', element: <SittingsTab /> },
        ],
      },
      {
        path: 'products/courses/:id/edit-lesson/:lessonID',
        element: <LessonDetails />,
      },
      {
        path: 'products/courses/:id/quiz/:quizId',
        element: <Quiz />,
        errorElement: <ErrorPage />,
        loader: quizParamHandler,
        children: [
          { index: true, element: <AddQuiz /> },
          { path: 'edit', element: <AddQuiz /> },
          { path: 'settings', element: <QuizSettings /> },
          { path: 'results', element: <QuizResults /> },
        ],
      },
      {
        path: 'products/coaching',
        element: <Coaching />,
        children: [
          { path: 'dashboard', element: <CoachingDashboard /> },
          { path: 'programs', element: <CoachingPrograms /> },
          { path: 'settings', element: <CoachingSittings /> },
        ],
      },
      {
        path: 'products/coaching_programs/:programId',
        element: <CoachPrograms />,
        children: [
          { index: true, element: <ProgramClients /> },
          { path: 'clients', element: <ProgramClients /> },
          { path: 'settings', element: <ProgramSettings /> },
        ],
      },
      { path: 'website', element: <Website /> },
      {
        path: 'sales',
        element: (
          <p className="text-teal-500 font-bold text-3xl flex justify-center">
            Coming Soon
          </p>
        ),
      },
      {
        path: 'contacts',
        element: (
          <p className="text-teal-500 font-bold text-3xl flex justify-center">
            Coming Soon
          </p>
        ),
      },
      {
        path: 'setting',
        element: (
          <p className="text-teal-500 font-bold text-3xl flex justify-center">
            Coming Soon
          </p>
        ),
      },
      {
        path: 'login',
        element: (
          <p className="text-teal-500 font-bold text-3xl flex justify-center">
            Coming Soon
          </p>
        ),
      },
    ],
  },
])
