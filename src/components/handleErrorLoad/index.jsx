import { Alert, Snackbar } from '@mui/material'
import { useEffect, useState } from 'react'
import Loader from './Loader'

/* eslint-disable react/prop-types */
export default function HandleErrorLoad({
  loading,
  errorMsg,
  children,
  errorReopen = false,
}) {
  const [errorOpen, setErrorOpen] = useState(false)

  useEffect(() => {
    setErrorOpen(errorMsg === '' ? false : true)
  }, [errorMsg, errorReopen])

  const handleClose = () => {
    setErrorOpen(false)
  }

  if (loading) return <Loader />

  return (
    <>
      {!!errorMsg && (
        <Snackbar
          open={errorOpen}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert severity="error" sx={{ width: '100%' }} onClose={handleClose}>
            {errorMsg}
          </Alert>
        </Snackbar>
      )}
      {children}
    </>
  )
}
