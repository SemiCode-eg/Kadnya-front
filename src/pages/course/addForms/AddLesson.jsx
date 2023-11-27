/* eslint-disable react/prop-types */
import { FormLabel } from '@mui/material'
import MainButton from '../../../components/mainButton/MainButton'
import { useState } from 'react'
import TextField from '../../../components/customFields/TextField'
import SortSelect from '../../../components/SortSelect'
import CustomModal from '../../../components/customModal'
import useModule from '../../../hooks/use-module'
import { sendLesson } from '../../../utils/ApiCalls'
import HandleErrorLoad from '../../../components/handleErrorLoad'

function AddLesson({
  open,
  onClose,
  modules,
  submodules = [],
  isMainBtn = true,
  setRefetch = () => {},
  setSuccessSubmit = () => {},
}) {
  const [title, setTitle] = useState('')
  const [titleErrorMsg, setTitleErrorMsg] = useState('')

  const [submitLoading, setSubmitLoading] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const [submodulesSortKey, setSubmodulesSortKey] = useState(
    submodules.length > 0 ? submodules[0].value : 'NONE',
  )

  const setModulesSelectOption = () => {
    return modules?.map(module => ({
      value: module.id,
      label: module.title,
    }))
  }

  const [modulesSortKey, setModulesSortKey] = useState(
    setModulesSelectOption()[0].value,
  )

  const {
    moduleData,
    errorMsg: moduleErrorMsg,
    loading: moduleLoading,
  } = useModule(modulesSortKey)

  const setSubmodulesSelectOption = () => {
    if (!isMainBtn) {
      return submodules.length === 0 ? [] : submodules
    } else {
      return moduleData?.submodules?.map(submodule => ({
        value: submodule.id,
        label: submodule.title,
      }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (title === '') {
      setTitleErrorMsg('This field is required!')
      return
    }

    const formData = new FormData()
    formData.append('title', title)

    if (submodulesSortKey === 'NONE') {
      formData.append('module', modulesSortKey)
    } else {
      formData.append('sub_module', submodulesSortKey)
    }

    setSubmitLoading(true)
    setSubmitError(false)

    sendLesson(formData)
      .then(data => {
        setSubmitLoading(false)
        if (
          !data.request ||
          data.request.status === 200 ||
          data.request.status === 201
        ) {
          setSubmitError(false)
          setRefetch(prev => !prev)
          setSuccessSubmit('Lesson')
          onClose()
        } else {
          setSubmitError(true)
        }
      })
      .catch(() => setSubmitError(true))
  }

  return (
    <CustomModal
      title="New Lesson"
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md">
      <HandleErrorLoad loading={moduleLoading} errorMsg={moduleErrorMsg}>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
            <div className="text-red-500">{titleErrorMsg}</div>
          </div>
          <div>
            <SortSelect
              label="Select Top-level Module"
              className="!w-full"
              options={setModulesSelectOption()}
              sortKey={modulesSortKey}
              onSelect={e => setModulesSortKey(e.target.value)}
              selectClasses="!rounded-xl"
              sx={{
                '& .MuiSelect-select ': {
                  paddingTop: '0.7rem',
                  paddingBottom: '0.7rem',
                },
              }}
            />
          </div>
          <div>
            {setSubmodulesSelectOption()?.length > 0 && (
              <SortSelect
                label="Select Submodule"
                className="!w-full"
                options={
                  submodules.length > 0
                    ? [...setSubmodulesSelectOption()]
                    : [
                        { value: 'NONE', label: 'None' },
                        ...setSubmodulesSelectOption(),
                      ]
                }
                sortKey={submodulesSortKey}
                onSelect={e => setSubmodulesSortKey(e.target.value)}
                selectClasses="!rounded-xl"
                sx={{
                  '& .MuiSelect-select ': {
                    paddingTop: '0.7rem',
                    paddingBottom: '0.7rem',
                  },
                }}
              />
            )}
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
              text={submitLoading ? 'Submitting...' : 'Create Lesson'}
              isForm={true}
              type="submit"
            />
          </div>
        </form>
      </HandleErrorLoad>
    </CustomModal>
  )
}

export default AddLesson
