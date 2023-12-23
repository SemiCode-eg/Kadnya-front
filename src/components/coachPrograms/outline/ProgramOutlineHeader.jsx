import { Eye } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import MainButton from '../../mainButton/MainButton'

function ProgramOutlineHeader() {
  return (
    <div className="flex gap-5 items-center justify-end w-full">
      {/* TODO preview link */}
      <Link to="" title='Preview'>
        <Eye size={25}/>
      </Link>

      <MainButton text='Add session' className='!px-4' />
    </div>
  )
}

export default ProgramOutlineHeader
