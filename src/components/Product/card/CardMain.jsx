import { Typography } from '@mui/material'

/* eslint-disable react/prop-types */
export default function CardMain({ title, category }) {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <p
        className="bg-gradient-to-r from-violet-200 to-teal-300
            text-sky-950 text-opacity-80 px-2 py-1.5
            rounded-md font-semibold sm:text-base text-sm mt-1"
      >
        {category}
      </p>
    </>
  )
}
