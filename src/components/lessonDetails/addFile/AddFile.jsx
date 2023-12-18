import { useState, useRef } from 'react'
import CustomModal from '../../customModal'
import { FormLabel } from '@mui/material'
import { CancelToken, isCancel } from 'axios'
import api from '../../../api/api'
import Progress from './Progress'
import AddFileButton from './AddFileButton'

function AddFile({ open, onClose, setFileName, endPointUrl }) {
  const [error, setError] = useState('')
  const [showProgress, setShowProgress] = useState(false)
  const [uploadedFile, setUploadedFile] = useState(null)

  const requestCancelRef = useRef(null)

  const uploadFile = e => {
    setError('')
    const file = e.target.files[0]

    if (!file) return

    if (file.type !== 'application/pdf') {
      setError('Wrong file type. Please select a PDF file.')
      return
    }

    // Check file size (in bytes)
    if (file.size > 20 * 1024 * 1024) {
      // 5 MB
      setError('File is too large. Please select a smaller file.')
      return
    }

    // Check file size (in bytes)
    if (file.name.length > 100) {
      setError('Maximum file name characters is 100.')
      return
    }

    const fileName =
      file.name.length > 12
        ? `${file.name.substring(0, 13)}... .${file.name.split('.')[1]}`
        : file.name

    setUploadedFile({ name: fileName, loading: 0 })

    const formData = new FormData()
    formData.append('file', file)

    setShowProgress(true)

    api
      .patch(endPointUrl, formData, {
        onUploadProgress: ({ loaded, total }) => {
          const loading = Math.floor((loaded / total) * 100)
          setUploadedFile(prev => ({
            ...prev,
            loading: loading,
          }))

          if (loaded === total) {
            setFileName(fileName)
          }
        },
        cancelToken: new CancelToken(
          cancel => (requestCancelRef.current = cancel),
        ),
        headers: { 'Content-Type': 'application/pdf' },
      })
      .then(() => {
        onClose()
      })
      .catch(error => {
        setUploadedFile(null)
        setFileName('')
        setShowProgress(false)

        if (isCancel(error)) {
          setError('Upload canceled.')
        } else {
          setError(
            error.response?.statusText ||
              'Please, check your network and try again later',
          )
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
            <AddFileButton error={error} uploadFile={uploadFile} />
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
