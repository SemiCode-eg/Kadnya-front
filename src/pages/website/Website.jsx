import { Link } from 'react-router-dom'

const Website = () => {
  return (
    <div className="flex justify-end">
      <Link
        to={'/customize'}
        className="border text-gray-100 bg-slate-800
        font-medium p-3 rounded-md mr-6 sm:mr-16 ease-in-out duration-200
        hover:bg-slate-200 hover:text-gray-800"
      >
        Customize
      </Link>
    </div>
  )
}

export default Website
