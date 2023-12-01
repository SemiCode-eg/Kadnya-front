import { useNavigate, useRouteError } from 'react-router-dom'
import MainButton from '../../components/mainButton/MainButton'

function ErrorPage() {
  const error = useRouteError()
  const navigate = useNavigate()

  return (
    <div className="text-center mt-5">
      <h1 className="text-red-500 text-8xl tracking-widest">{error.status}</h1>
      <p className='text-xl my-5'>
        <i>{error.statusText || error.message}</i>
      </p>

      <MainButton
        handleClick={() => navigate('/', { replace: true })}
        text="Home"
        className="mx-auto !mr-auto !py-2"
      />
    </div>
  )
}

export default ErrorPage
