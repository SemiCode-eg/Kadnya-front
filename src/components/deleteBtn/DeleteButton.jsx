import { IconButton } from '@mui/material'
import { Minus } from '@phosphor-icons/react'

export default function DeleteButton({ className = '', onDelete = () => {} }) {
  return (
    <IconButton className={className} color="error" onClick={onDelete}>
      <Minus weight="bold" />
    </IconButton>
  )
}
