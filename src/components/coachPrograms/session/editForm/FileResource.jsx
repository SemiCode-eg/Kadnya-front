import { IconButton, Typography } from '@mui/material'
import { Minus } from '@phosphor-icons/react'

export default function FileResource({
  index,
  fileResource,
  deleteFileResource,
}) {
  const fileName =
    fileResource?.name.length > 12
      ? `${fileResource?.name.substring(0, 50)}... .${
          fileResource?.name.split('.')[1]
        }`
      : fileResource?.name
  return (
    <li className="flex gap-2">
      <Typography width="100%">{fileName}</Typography>
      <IconButton
        onClick={() => deleteFileResource(index)}
        className="!text-red-500">
        <Minus />
      </IconButton>
    </li>
  )
}
