/* eslint-disable react/prop-types */
import { Button } from '@mui/material'
import { Trash } from '@phosphor-icons/react'
import MainButton from '../../mainButton/MainButton'
import { useNavigate } from 'react-router-dom'
import { deleteCoachProgram } from '../../../api/coach'
import useProgramReducer from '../../../hooks/use-program-reducer'
import { useState } from 'react'

function ProgramSettingsFooter({
  programId,
  SubmitLoading,
  dispatchFormData,
  setErrorReopen,
  setSuccessMsg,
}) {
  const [deleteLoading, setDeleteLoading] = useState(false)
  const navigate = useNavigate()
  const { formReducerKeys } = useProgramReducer()

  const handleDelete = () => {
    dispatchFormData({ type: formReducerKeys.SET_ERROR, payload: '' })
    setErrorReopen(prev => !prev)
    setDeleteLoading(true)

    deleteCoachProgram(programId)
      .then(data => {
        setDeleteLoading(false)
        if (data.status === 204) {
          setSuccessMsg('Program deleted successfully.')
          setTimeout(() => navigate('/products/coaching/programs'), 400)
        } else {
          dispatchFormData({
            type: formReducerKeys.SET_ERROR,
            payload: 'Error occurred, please try again later.',
          })
          setErrorReopen(prev => !prev)
        }
      })
      .catch(() => {
        dispatchFormData({
          type: formReducerKeys.SET_ERROR,
          payload: 'Server Error, please try again later.',
        })
        setErrorReopen(prev => !prev)
      })
  }

  return (
    <div className="w-full flex justify-between gap-5">
      <Button
        className="!capitalize !gap-0 !text-red-500 hover:!bg-red-500/5"
        variant="text"
        startIcon={<Trash weight="bold" />}
        onClick={handleDelete}>
        {deleteLoading ? 'Deleting...' : 'Delete program'}
      </Button>

      <MainButton text={SubmitLoading ? 'Saving...' : 'Save'} type="submit" />
    </div>
  )
}

export default ProgramSettingsFooter
