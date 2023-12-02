import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import RootLayout from './RootLayout.jsx'
import Products from './pages/products/Products.jsx'
import Website from './pages/website/Website.jsx'
import Courses from './pages/products/courses/Courses'
import AllProducts from './pages/products/allProducts/AllProducts'
import SingleCourse from './pages/course/SingleCourse'
import Outline from './pages/course/outline/Outline'
import LessonDetails from './pages/course/lessonDetails/LessonDetails.jsx'
import CertificateTab from './pages/course/certificateTab/CertificateTab'
import SittingsTab from './pages/course/sittingsTab/SittingsTab'
import Quiz from './pages/quiz/Quiz.jsx'
import AddQuiz from './pages/quiz/addQuiz/AddQuiz.jsx'
import QuizSettings from './pages/quiz/quizSettings/QuizSettings.jsx'
import QuizResults from './pages/quiz/quizResults/QuizResults.jsx'
import EmptyQuizMsg from './pages/quiz/EmptyQuizMsg.jsx'
import Coaching from './pages/coaching/Coaching.jsx'
import CoachingDashboard from './pages/coaching/coachingDashboard/CoachingDashboard.jsx'
import CoachingPrograms from './pages/coaching/coachingPrograms/CoachingPrograms.jsx'
import CoachingSittings from './pages/coaching/coachingSittings/CoachingSittings.jsx'
import CoachPrograms from './pages/coachPrograms/CoachPrograms.jsx'
import ProgramClients from './pages/coachPrograms/programClients/ProgramClients.jsx'
import ProgramSettings from './pages/coachPrograms/programsSettings/ProgramSettings.jsx'
import CustomMuiThemeProvider from './theme/CustomMuiThemeProvider.jsx'
import ErrorPage from './pages/errorPage/ErrorPage.jsx'

const quizParamHandler = ({ params }) => {
  if (isNaN(params.quizID)) {
    throw new Response('Bad Request', {
      statusText: 'Quiz not found!',
      status: 404,
    })
  }
  return null
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
          { path: 'sittings', element: <SittingsTab /> },
        ],
      },
      {
        path: 'products/courses/:id/edit-lesson/:lessonID',
        element: <LessonDetails />,
      },
      {
        path: 'products/courses/:id/quiz',
        element: <Quiz />,
        children: [
          { index: true, element: <AddQuiz /> },
          { path: 'add', element: <AddQuiz /> },
          {
            path: ':quizID',
            errorElement: <ErrorPage />,
            loader: quizParamHandler,
            children: [
              { index: true, element: <AddQuiz /> },
              { path: 'edit', element: <AddQuiz /> },
              { path: 'settings', element: <QuizSettings /> },
              { path: 'results', element: <QuizResults /> },
            ],
          },
          { path: 'settings', element: <EmptyQuizMsg /> },
          { path: 'results', element: <EmptyQuizMsg /> },
        ],
      },
      {
        path: 'products/coaching',
        element: <Coaching />,
        children: [
          { path: 'dashboard', element: <CoachingDashboard /> },
          { path: 'programs', element: <CoachingPrograms /> },
          { path: 'sittings', element: <CoachingSittings /> },
        ],
      },
      {
        path: 'products/coaching_programs/:programID',
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <CustomMuiThemeProvider>
    <RouterProvider router={router} />
  </CustomMuiThemeProvider>,
)
