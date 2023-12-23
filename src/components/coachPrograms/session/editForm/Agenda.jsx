import { IconButton, TextField } from '@mui/material'
import { Minus } from '@phosphor-icons/react'

export default function Agenda({ index, agenda, editAgenda, deleteAgenda }) {
  return (
    <li className="flex gap-2">
      <TextField
        variant="standard"
        placeholder="Agenda"
        fullWidth
        value={agenda}
        onChange={event => editAgenda(index, event.target.value)}
      />
      <IconButton onClick={() => deleteAgenda(index)} className="!text-red-500">
        <Minus />
      </IconButton>
    </li>
  )
}
