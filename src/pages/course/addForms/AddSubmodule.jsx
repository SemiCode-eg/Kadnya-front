/* eslint-disable react/prop-types */
import { FormLabel } from '@mui/material'
import TextAriaField from '../../../components/customFields/TextAriaField'
import ImageField from '../../../components/imageField/ImageField'
import MainButton from '../../../components/mainButton/MainButton'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import TextField from '../../../components/customFields/TextField'
import SortSelect from '../../../components/SortSelect'
import CustomModal from '../../../components/customModal'
import { sendSubmodule } from '../../../utils/ApiCalls'

function AddSubmodule({
  open,
  onClose,
  modules,
  setRefetch = () => {},
  setSuccessSubmit = () => {},
}) {
  const [title, setTitle] = useState('')
  const [titleErrorMsg, setTitleErrorMsg] = useState('')
  const [description, setDescription] = useState('')
  const [descriptionErrorMsg, setDescriptionErrorMsg] = useState('')
  const [imageAsset, setImageAsset] = useState(null)
  const [imageAssetErrorMsg, setImageAssetErrorMsg] = useState('')

  const [submitLoading, setSubmitLoading] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const { id } = useParams()

  const setModulesSelectOption = () => {
    return modules?.map(module => ({
      value: module.id,
      label: module.title,
    }))
  }

  const [sortKey, setSortKey] = useState(setModulesSelectOption()[0].value)

  const handleSubmit = e => {
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

    const submoduleData = {
      title,
      description,
      imageAsset,
      id,
      module: sortKey,
    }

    setSubmitLoading(true)
    setSubmitError(false)

    sendSubmodule(submoduleData)
      .then(data => {
        setSubmitLoading(false)
        if (
          !data.request ||
          data.request.status === 200 ||
          data.request.status === 201
        ) {
          setSubmitError(false)
          setRefetch(prev => !prev)
          setSuccessSubmit('Submodule')
          onClose()
        } else {
          setSubmitError(true)
        }
      })
      .catch(() => setSubmitError(true))
  }

  return (
    <CustomModal
      title="New Submodule"
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
        <div>
          <SortSelect
            label="Select Top-level Module"
            className="!w-full"
            options={setModulesSelectOption()}
            sortKey={sortKey}
            onSelect={e => setSortKey(e.target.value)}
            selectClasses="!rounded-xl"
            sx={{
              '& .MuiSelect-select ': {
                paddingTop: '0.7rem',
                paddingBottom: '0.7rem',
              },
            }}
          />
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
          <ImageField setImageAsset={setImageAsset} />
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
            text={submitLoading ? 'Submitting...' : 'Create Module'}
            isForm={true}
            type="submit"
          />
        </div>
      </form>
    </CustomModal>
  )
}

export default AddSubmodule
