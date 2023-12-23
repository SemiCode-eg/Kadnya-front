import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loader from '../components/handleErrorLoad/Loader.jsx'
import ProgramOutline from '../pages/coachPrograms/outline/index.jsx'
const RootLayout = lazy(() => import('../RootLayout.jsx'))
const Products = lazy(() => import('../pages/products/Products.jsx'))
const Website = lazy(() => import('../pages/website/Website.jsx'))
const Courses = lazy(() => import('../pages/products/courses/Courses.jsx'))
const AllProducts = lazy(
  () => import('../pages/products/allProducts/AllProducts.jsx'),
)
const SingleCourse = lazy(() => import('../pages/course/SingleCourse.jsx'))
const Outline = lazy(() => import('../pages/course/outline/Outline.jsx'))
const LessonDetails = lazy(
  () => import('../pages/course/lessonDetails/LessonDetails.jsx'),
)
const CertificateTab = lazy(
  () => import('../pages/course/certificateTab/CertificateTab.jsx'),
)
const SittingsTab = lazy(
  () => import('../pages/course/sittingsTab/SittingsTab.jsx'),
)
const Quiz = lazy(() => import('../pages/quiz/Quiz.jsx'))
const AddQuiz = lazy(() => import('../pages/quiz/addQuiz/AddQuiz.jsx'))
const QuizSettings = lazy(
  () => import('../pages/quiz/quizSettings/QuizSettings.jsx'),
)
const QuizResults = lazy(
  () => import('../pages/quiz/quizResults/QuizResults.jsx'),
)
const Coaching = lazy(() => import('../pages/coaching/Coaching.jsx'))
const CoachingDashboard = lazy(
  () => import('../pages/coaching/coachingDashboard/CoachingDashboard.jsx'),
)
const CoachingPrograms = lazy(
  () => import('../pages/coaching/coachingPrograms/CoachingPrograms.jsx'),
)
const CoachingSettings = lazy(
  () => import('../pages/coaching/coachingSettings/CoachingSettings.jsx'),
)
const CoachPrograms = lazy(
  () => import('../pages/coachPrograms/CoachPrograms.jsx'),
)
const ProgramClients = lazy(
  () => import('../pages/coachPrograms/programClients/ProgramClients.jsx'),
)
const ProgramSettings = lazy(
  () => import('../pages/coachPrograms/programsSettings/ProgramSettings.jsx'),
)
const ErrorPage = lazy(() => import('../pages/errorPage/ErrorPage.jsx'))
const Session = lazy(() => import('../pages/coachPrograms/session'))

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
    element: (
      <Suspense fallback={<Loader />}>
        <RootLayout />
      </Suspense>
    ),
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
          { path: 'settings', element: <CoachingSettings /> },
        ],
      },
      {
        path: 'products/coaching_programs/:programId',
        element: <CoachPrograms />,
        children: [
          { index: true, element: <ProgramOutline /> },
          { path: 'clients', element: <ProgramClients /> },
          {
            path: 'outline',
            element: <ProgramOutline />,
            children: [{ path: 'session/:sessionId', element: <Session /> }],
          },
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
