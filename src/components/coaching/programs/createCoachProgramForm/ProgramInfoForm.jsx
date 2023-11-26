import { FormLabel } from '@mui/material'
import TextField from '../../../forms/TextField'
import TextAriaField from '../../../forms/TextAriaField'
import ImageField from '../../../imageField/ImageField'
import useProgramReducer from '../../../../hooks/use-program-reducer'

/* eslint-disable react/prop-types */
function ProgramInfoForm({
  titleValue,
  descriptionValue,
  coachNameValue,
  sessionsCountValue,
  dispatchFormData,
  isPackage = false,
}) {
  const { formReducerKeys } = useProgramReducer()

  const handleTitleChange = value => {
    dispatchFormData({
      type: formReducerKeys.SET_TITLE,
      payload: value,
    })
  }

  const handleSessionsCountChange = value => {
    dispatchFormData({
      type: formReducerKeys.SET_SESSIONS_COUNT,
      payload: value,
    })
  }

  const handleCoachNameChange = value => {
    dispatchFormData({
      type: formReducerKeys.SET_COACH_NAME,
      payload: value,
    })
  }

  const handleDescriptionChange = value => {
    dispatchFormData({
      type: formReducerKeys.SET_DESCRIPTION,
      payload: value,
    })
  }

  const handleImageChange = image => {
    dispatchFormData({
      type: formReducerKeys.SET_IMAGE,
      payload: image,
    })
  }

  return (
    <>
      <div className="flex gap-5 items-end w-full">
        <div className="flex flex-col gap-[7px] items-start w-full">
          <FormLabel className="!text-sky-950 !font-[400] !text-md">
            Title
          </FormLabel>
          <TextField
            placeholder="Title"
            value={titleValue}
            handleChange={e => handleTitleChange(e.target.value)}
          />
        </div>

        {isPackage && (
          <div className="flex flex-col gap-[7px] items-start w-full">
            <FormLabel className="!text-sky-950 !font-[400] !text-md">
              How many sessions are included?
            </FormLabel>
            <TextField
              placeholder="How many sessions are included?"
              value={sessionsCountValue}
              handleChange={e => handleSessionsCountChange(e.target.value)}
              type="number"
              min={1}
              max={100}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-[7px] items-start w-full">
        <FormLabel className="!text-sky-950 !font-[400] !text-md">
          Coach name
        </FormLabel>
        <TextField
          placeholder="Coach name (optional)"
          value={coachNameValue}
          handleChange={e => handleCoachNameChange(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-[7px] items-start w-full">
        <FormLabel className="!text-sky-950 !font-[400] !text-md">
          Description
        </FormLabel>
        <TextAriaField
          value={descriptionValue}
          placeholder="Enter a program description..."
          handleChange={e => handleDescriptionChange(e.target.value)}
        />
      </div>

      <div className="w-full">
        <ImageField isVertical={false} setImageAsset={handleImageChange} />
      </div>
    </>
  )
}

export default ProgramInfoForm
