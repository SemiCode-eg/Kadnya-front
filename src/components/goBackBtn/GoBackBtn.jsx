/* eslint-disable react/prop-types */
import { ArrowLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function GoBackBtn({ path = '/products/courses' }) {
  return (
    <Link
      to={path}
      className="w-[50px] h-[50px] self-start text-white rounded-full flex items-center justify-center duration-100 ease-out bg-gradient-to-r from-violet-300 to-teal-300 hover:from-transparent hover:to-transparent hover:text-sky-950 hover:border-[2px] hover:border-teal-300"
    >
      <ArrowLeft size={35} />
    </Link>
  )
}

export default GoBackBtn
