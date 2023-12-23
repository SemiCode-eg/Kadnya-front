import { Button } from '@mui/material'
import { Trash } from '@phosphor-icons/react'
import MainButton from '../../../mainButton/MainButton'

export default function ButtonGroup({ onSave, onDelete }) {
  return (
    <div className="flex justify-between">
      <Button
        className="!text-red-500 !capitalize !text-lg"
        startIcon={<Trash />}
        onClick={onDelete}>
        Delete session
      </Button>

      <MainButton text="Save" handleClick={onSave} />
    </div>
  )
}
