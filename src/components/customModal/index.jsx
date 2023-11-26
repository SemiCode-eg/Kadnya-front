import { forwardRef } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { CaretLeft, X } from '@phosphor-icons/react'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

/* eslint-disable react/prop-types */
export default function CustomModal({
  title,
  open,
  onClose,
  onGoBack,
  fullWidth,
  maxWidth,
  children,
  step,
}) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="dialog-title"
      TransitionComponent={Transition}
      classes={{
        container: 'relative',
        paper: '!rounded-3xl py-1',
      }}
      fullWidth={fullWidth}
      fullScreen={fullScreen}
      maxWidth={maxWidth}
    >
      {!!onGoBack && step > 1 && (
        <IconButton
          aria-label="back"
          onClick={onGoBack}
          sx={{
            position: 'absolute',
            left: 15,
            top: 10,
          }}
        >
          <CaretLeft size={32} />
        </IconButton>
      )}
      <DialogTitle
        id="dialog-title"
        className={`${!!onGoBack && ' text-center w-full'} !text-2xl`}
      >
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 15,
          top: 10,
        }}
      >
        <X size={32} />
      </IconButton>

      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}
