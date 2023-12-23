import { Eye } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import MainButton from '../../mainButton/MainButton'
import { useState } from 'react'
import CustomModal from '../../customModal'
import AddSessionForm from './addSessionForm/AddSessionForm'

function ProgramOutlineHeader({ setRefetch }) {
  const [openForm, setOpenForm] = useState(false)

  const handleClose = () => {
    setOpenForm(false)
  }

  return (
    <div className="flex gap-5 items-center justify-end w-full">
      {/* TODO preview link */}
      <Link to="" title="Preview">
        <Eye size={25} />
      </Link>

      <MainButton
        text="Add session"
        className="!px-4"
        handleClick={() => setOpenForm(true)}
      />

      <CustomModal
        open={openForm}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        title="Add new session">
        <AddSessionForm onClose={handleClose} setRefetch={setRefetch} />
      </CustomModal>
    </div>
  )
}

export default ProgramOutlineHeader
