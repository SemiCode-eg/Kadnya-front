/* eslint-disable react/prop-types */
import { Typography } from '@mui/material'
import MainButton from '../../mainButton/MainButton'
import { Plus } from '@phosphor-icons/react'
import { useState } from 'react'
import CreateCoachProgramForm from './createCoachProgramForm/CreateCoachProgramForm'

function ProgramsHead({ count, setRefetch = () => {} }) {
  const [openCreateForm, setOpenCreateForm] = useState(false)

  const handleOpen = () => {
    setOpenCreateForm(true)
  }

  const handleClose = () => {
    setOpenCreateForm(false)
  }

  return (
    <>
      <CreateCoachProgramForm
        open={openCreateForm}
        onClose={handleClose}
        setRefetch={setRefetch}
      />

      <div className="flex sm:flex-row flex-col justify-between items-center w-full gap-5 my-8">
        <Typography
          variant="h5"
          component="h3"
          classes={{ root: 'w-full sm:text-start' }}>
          <span className="font-bold">{count}</span> Programs
        </Typography>
        <MainButton
          text="New Coaching Program"
          icon={<Plus size={25} />}
          className="whitespace-nowrap"
          handleClick={handleOpen}
        />
      </div>
    </>
  )
}

export default ProgramsHead
