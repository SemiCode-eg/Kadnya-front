import { Alert, Snackbar } from '@mui/material'
import Loader from './Loader'

const RESET_TIME = 5000

export default function HandleErrorLoad({
  children,
  loading = false,
  errorMsg = '',
  setErrorMsg = () => {},
  successMsg = '',
  setSuccessMsg = () => {},
  closeByClickAway = true,
}) {
  const isError = Boolean(errorMsg)
  const isSuccess = Boolean(successMsg)

  const handleCloseError = () => {
    setErrorMsg('')
  }

  const handleSuccessClose = () => {
    setSuccessMsg('')
  }

  if (loading) return <Loader />

  return (
    <>
      {isError && (
        <Snackbar
          open={isError}
          autoHideDuration={RESET_TIME}
          ClickAwayListenerProps={
            !closeByClickAway && { onClickAway: () => null }
          }
          onClose={handleCloseError}>
          <Alert
            severity="error"
            sx={{ width: '100%' }}
            onClose={handleCloseError}>
            {errorMsg}
          </Alert>
        </Snackbar>
      )}

      {isSuccess && (
        <Snackbar
          open={isSuccess}
          autoHideDuration={RESET_TIME}
          onClose={handleSuccessClose}>
          <Alert
            severity="success"
            sx={{ width: '100%' }}
            onClose={handleSuccessClose}>
            {successMsg}
          </Alert>
        </Snackbar>
      )}

      {children}
    </>
  )
}
