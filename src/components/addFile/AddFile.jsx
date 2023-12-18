import { useState, useRef } from 'react'
import CustomModal from '../customModal'
import { FormLabel } from '@mui/material'
import { isCancel } from 'axios'
import Progress from './Progress'
import AddFileButton from './AddFileButton'
import { uploadFile } from '../../api/general'

function AddFile({
  open = false,
  endPointUrl = '',
  onClose = () => {},
  setFileName = () => {},
  setIsFileUploaded = () => {},
}) {
  const [error, setError] = useState('')
  const [showProgress, setShowProgress] = useState(false)
  const [uploadedFile, setUploadedFile] = useState(null)

  const requestCancelRef = useRef(null)

  const handleUploadFile = e => {
    setError('')
    const file = e.target.files[0]

    setShowProgress(true)

    uploadFile(
      endPointUrl,
      file,
      setUploadedFile,
      setFileName,
      setError,
      requestCancelRef,
    ).then(data => {
      if (data.status === 200 || data.status === 201) {
        setIsFileUploaded(true)
        onClose()
      } else {
        setIsFileUploaded(false)
        setUploadedFile(null)
        setFileName('')
        setShowProgress(false)

        if (isCancel(data)) {
          setError('Upload canceled.')
        } else {
          setError(
            data.response?.statusText
              ? 'Server error, please try again later'
              : 'Please, check your network and try again later',
          )
        }
      }
    })
  }

  const handleClose = () => {
    setShowProgress(false)
    setError('')
    if (requestCancelRef.current) {
      requestCancelRef.current('Upload canceled.')
    }
    onClose()
  }

  return (
    <CustomModal
      title="Upload file"
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md">
      <div className="flex justify-center items-center flex-col p-20 border-[2px] border-dashed border-black/50 h-full rounded-2xl">
        <FormLabel className="flex flex-col items-center justify-center gap-5 w-full">
          {!showProgress ? (
            <AddFileButton error={error} uploadFile={handleUploadFile} />
          ) : (
            <Progress
              error={error}
              uploadedFile={uploadedFile}
              requestCancelRef={requestCancelRef}
            />
          )}
        </FormLabel>
      </div>
    </CustomModal>
  )
}

export default AddFile
