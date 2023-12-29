import { IconButton, TextField } from '@mui/material'
import { Minus } from '@phosphor-icons/react'

export default function LinkResource({
  index,
  linkResource,
  deleteLinkResource,
  editLinkResource,
}) {
  return (
    <li className="flex gap-2">
      <TextField
        variant="standard"
        placeholder="Link Resource"
        fullWidth
        value={linkResource}
        onChange={event => editLinkResource(index, event.target.value)}
      />
      <IconButton
        onClick={() => deleteLinkResource(index)}
        className="!text-red-500">
        <Minus />
      </IconButton>
    </li>
  )
}
