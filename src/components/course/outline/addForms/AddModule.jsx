import { FormLabel } from '@mui/material'
import ImageField from '../../../imageField/ImageField'
import { useState } from 'react'
import MainButton from '../../../mainButton/MainButton'
import TextField from '../../../customFields/TextField'
import TextAriaField from '../../../customFields/TextAriaField'
import CustomModal from '../../../customModal'
import { useParams } from 'react-router-dom'
import {
  sendModule,
  updateModule,
  updateSubmodule,
} from '../../../../api/course'

function AddModule({
  open,
  onClose,
  moduleID,
  moduleTitle = '',
  moduleDescription = '',
  moduleImage = null,
  isEdit = false,
  popupTitle = 'New Module',
  submitBtnTitle = 'Create Module',
  isSubmodule = false,
  parentModuleID,
  setRefetch = () => {},
  setSuccessSubmit = () => {},
}) {
  const [title, setTitle] = useState(moduleTitle)
  const [titleErrorMsg, setTitleErrorMsg] = useState('')
  const [description, setDescription] = useState(moduleDescription)
  const [descriptionErrorMsg, setDescriptionErrorMsg] = useState('')
  const [imageAsset, setImageAsset] = useState(moduleImage || null)
  const [imageAssetErrorMsg, setImageAssetErrorMsg] = useState('')

  const [submitLoading, setSubmitLoading] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const { id } = useParams()

  function handleSubmit(e) {
    e.preventDefault()

    if (title === '') {
      setTitleErrorMsg('This field is required!')
      return
    }

    if (description === '') {
      setDescriptionErrorMsg('This field is required!')
      return
    }

    if (imageAsset === null) {
      setImageAssetErrorMsg('This field is required!')
      return
    }

    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('course', id)

    if (isSubmodule) {
      formData.append('module', parentModuleID)
    }

    if (imageAsset !== moduleImage) {
      formData.append('image', imageAsset)
    }

    setSubmitError(false)
    setSubmitLoading(true)

    if (isEdit) {
      if (isSubmodule) {
        updateSubmodule(formData, moduleID)
          .then(data => {
            setSubmitLoading(false)

            if (data.status === 200) {
              setSubmitError(false)
              setRefetch(prev => !prev)
              setSuccessSubmit('Module added successfully!')
              onClose()
            } else {
              setSubmitError(true)
            }
          })
          .catch(() => setSubmitError(true))
      } else {
        updateModule(formData, moduleID)
          .then(data => {
            setSubmitLoading(false)

            if (data.status === 200) {
              setSubmitError(false)
              setRefetch(prev => !prev)
              setSuccessSubmit('Module added successfully!')
              onClose()
            } else {
              setSubmitError(true)
            }
          })
          .catch(() => setSubmitError(true))
      }
    } else {
      sendModule(formData)
        .then(data => {
          setSubmitLoading(false)

          if (data.status === 201) {
            setSubmitError(false)
            setRefetch(prev => !prev)
            setSuccessSubmit('Module added successfully!')
            onClose()
          } else {
            setSubmitError(true)
          }
        })
        .catch(() => setSubmitError(true))
    }
  }

  return (
    <CustomModal
      title={popupTitle}
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[7px] items-start w-full">
          <FormLabel className="!text-black !font-[400] !text-md">
            Title
          </FormLabel>
          <TextField
            placeholder="Text"
            value={title}
            handleChange={e => {
              setTitle(e.target.value)
              setTitleErrorMsg('')
            }}
          />
          <p className="text-red-500">{titleErrorMsg}</p>
        </div>
        <div className="flex flex-col gap-[7px] items-start w-full">
          <FormLabel className="!text-black !font-[400] !text-md">
            Description
          </FormLabel>
          <TextAriaField
            value={description}
            placeholder="Add a description..."
            handleChange={e => {
              setDescription(e.target.value)
              setDescriptionErrorMsg('')
            }}
          />

          <p className="text-red-500">{descriptionErrorMsg}</p>
        </div>
        <div>
          <ImageField setImageAsset={setImageAsset} imageURL={moduleImage} />
          <p className="text-red-500">{imageAssetErrorMsg}</p>
        </div>
        {submitError && (
          <p className="text-red-500 font-bold text-lg">
            Server Error, please try again later!
          </p>
        )}
        <div className="self-end flex mt-5">
          <MainButton
            text="Cancel"
            className="text-teal-500 text-[17px] font-[500] border-[1px] border-teal-500 duration-150 hover:text-white hover:bg-teal-500"
            handleClick={onClose}
            isPrimary={false}
          />
          <MainButton
            text={submitLoading ? 'Submitting...' : submitBtnTitle}
            isForm={true}
            type="submit"
          />
        </div>
      </form>
    </CustomModal>
  )
}

export default AddModule
