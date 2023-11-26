/* eslint-disable react/prop-types */
import { useState, useRef } from 'react'
import CustomModal from '../../customModal'
import { FormLabel } from '@mui/material'
import api from '../../../utils/ApiUrl'
import { FolderOpen } from '@phosphor-icons/react'
import MainButton from '../../mainButton/MainButton'
import { CancelToken, isCancel } from 'axios'

function AddFile({ open, onClose, setFileName, lessonID }) {
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
      setError('Maximum file name charachters is 100.')
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
      .patch(`lessons/${lessonID}/`, formData, {
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
      .then(data => {
        console.log(data)
        close()
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

  const cancelUpload = () => {
    if (requestCancelRef.current) {
      requestCancelRef.current('Upload canceled.')
    }
  }

  return (
    <CustomModal
      title="Upload file"
      open={open}
      onClose={() => {
        setShowProgress(false)
        setError('')
        if (requestCancelRef.current) {
          requestCancelRef.current('Upload canceled.')
        }
        onClose()
      }}
      fullWidth
      maxWidth="md"
    >
      <div className="flex justify-center items-center flex-col p-20 border-[2px] border-dashed border-black/50 h-full rounded-2xl">
        <FormLabel className="flex flex-col items-center justify-center gap-5 w-full">
          {!showProgress ? (
            <>
              <p className="text-center font-[600] text-xl text-black">
                Drop files here, browse files or import from
              </p>
              <form>
                <input
                  type="file"
                  name="upload-file"
                  onChange={uploadFile}
                  className="w-0 h-0"
                />
                <div
                  className="border-[1.5px] border-sky-950 rounded-[8px] p-3 flex justify-center items-center flex-col gap-3"
                  role="button"
                >
                  <div className="flex items-center justify-center self-center bg-sky-950 rounded-full w-[42px] h-[42px]">
                    <FolderOpen size={32} className="text-white" />
                  </div>
                  <p className="font-[600] text-lg text-sky-950">My Device</p>
                </div>
                {error.length > 0 && (
                  <p className="text-red-500 text-lg mt-5">{error}</p>
                )}
              </form>
            </>
          ) : (
            <div className="flex flex-col gap-10 justify-center items-center w-full">
              {error.length > 0 ? (
                <p className="text-red-500 text-lg">{error}</p>
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 w-full">
                  <p className="text-center font-[600] text-xl text-black">
                    Uploading: {uploadedFile?.name}
                  </p>
                  <p className="text-teal-500 text-lg">
                    {uploadedFile?.loading}%
                  </p>
                  <div className="relative w-full h-2.5 bg-gray-400 rounded-xl">
                    <span
                      className="absolute top-0 left-0 h-full w-auto rounded-lg bg-teal-500"
                      style={{ width: `${uploadedFile?.loading}%` }}
                    ></span>
                  </div>
                </div>
              )}
              <MainButton
                text="Cancel Upload"
                className="text-teal-500 text-[17px] !px-5 !mr-0 font-[500] border-[1px] border-teal-500 duration-150 hover:text-white hover:bg-teal-500"
                isPrimary={false}
                handleClick={e => {
                  e.preventDefault()
                  cancelUpload()
                }}
              />
            </div>
          )}
        </FormLabel>
      </div>
    </CustomModal>
  )
}

export default AddFile
