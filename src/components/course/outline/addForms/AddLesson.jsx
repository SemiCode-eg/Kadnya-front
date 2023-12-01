/* eslint-disable react/prop-types */
import { FormLabel } from '@mui/material'
import MainButton from '../../../mainButton/MainButton'
import { useEffect, useState } from 'react'
import TextField from '../../../customFields/TextField'
import SortSelect from '../../../SortSelect'
import CustomModal from '../../../customModal'
import useModule from '../../../../hooks/use-module'
import HandleErrorLoad from '../../../handleErrorLoad'
import { sendLesson } from '../../../../api/course'

const generateModuleOptions = modules => {
  return modules?.map(module => ({
    value: module.id,
    label: module.title,
  }))
}

const generateSubmoduleOptions = (isMainBtn, submodules, moduleData) => {
  if (!isMainBtn) {
    return submodules.length === 0 ? [] : submodules
  } else {
    return moduleData?.submodules?.map(submodule => ({
      value: submodule.id,
      label: submodule.title,
    }))
  }
}

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
    submodules[0]?.value || 'NONE',
  )
  const [modulesSortKey, setModulesSortKey] = useState(modules[0].id)
  const { moduleData, errorMsg, loading } = useModule(modulesSortKey)

  useEffect(() => {
    const submodulesOptions = generateSubmoduleOptions(
      isMainBtn,
      submodules,
      moduleData,
    )
    setSubmodulesSortKey(
      submodules.length > 0
        ? submodules[0].value
        : submodulesOptions && submodulesOptions.length > 0
          ? submodulesOptions[0].value
          : 'NONE',
    )
  }, [isMainBtn, moduleData, submodules])

  useEffect(() => {
    setModulesSortKey(generateModuleOptions(modules)[0].value)
  }, [modules])

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
          setSuccessSubmit('Lesson added successfully!')
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
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[7px] items-start w-full">
          <FormLabel className="!text-black !font-[400] !text-md">
            Title
          </FormLabel>
          <TextField
            id="title"
            placeholder="Text"
            value={title}
            handleChange={e => {
              setTitle(e.target.value)
              setTitleErrorMsg('')
            }}
          />
          <div className="text-red-500">{titleErrorMsg}</div>
        </div>
        <HandleErrorLoad loading={loading} errorMsg={errorMsg}>
          <SortSelect
            id="topLevelModule"
            label="Select Top-level Module"
            className="!w-full"
            options={generateModuleOptions(modules)}
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

          <div>
            {generateSubmoduleOptions(isMainBtn, submodules, moduleData)
              ?.length > 0 && (
              <SortSelect
                id="submodule"
                label="Select Submodule"
                className="!w-full"
                options={
                  submodules.length > 0
                    ? [
                        ...generateSubmoduleOptions(
                          isMainBtn,
                          submodules,
                          moduleData,
                        ),
                      ]
                    : [
                        { value: 'NONE', label: 'None' },
                        ...generateSubmoduleOptions(
                          isMainBtn,
                          submodules,
                          moduleData,
                        ),
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
        </HandleErrorLoad>
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
    </CustomModal>
  )
}

export default AddLesson
