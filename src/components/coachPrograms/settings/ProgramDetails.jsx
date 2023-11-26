/* eslint-disable react/prop-types */
import { FormLabel } from '@mui/material'
import useProgramReducer from '../../../hooks/use-program-reducer'
import TextField from '../../forms/TextField'
import TextAriaField from '../../forms/TextAriaField'
import ImageField from '../../imageField/ImageField'

function ProgramDetails({
  programData: { title, description, coachName, coachEmail },
}) {
  const { dispatchFormData, formReducerKeys } = useProgramReducer()

  const handleTitleChange = value => {
    dispatchFormData({
      type: formReducerKeys.SET_TITLE,
      payload: value,
    })
  }

  const handleCoachNameChange = value => {
    dispatchFormData({
      type: formReducerKeys.SET_COACH_NAME,
      payload: value,
    })
  }

  const handleCoachEmailChange = value => {
    dispatchFormData({
      type: formReducerKeys.SET_COACH_EMAIL,
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
    <div className="border-[1.5px] border-[#ddd] rounded-[10px] p-6">
      <div className="flex flex-col gap-5">
        <div className="w-full mx-auto mb-5">
          <p className="text-sky-950 font-[600] text-lg tracking-[-0.25px]">
            Program details
          </p>
          <p className="text-neutral-500 text-sm">
            Give your coaching product a title, description, and thumbnail
            image. These details will appear in your members&apos; library.
          </p>
        </div>

        <div className="flex flex-col gap-[7px] items-start w-full">
          <FormLabel className="!text-sky-950 !font-[400] !text-md">
            Title
          </FormLabel>
          <TextField
            placeholder="Title"
            value={title}
            handleChange={e => handleTitleChange(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-[7px] items-start w-full">
          <FormLabel className="!text-sky-950 !font-[400] !text-md">
            Coach name
          </FormLabel>
          <TextField
            placeholder="Coach name (optional)"
            value={coachName}
            handleChange={e => handleCoachNameChange(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-[7px] items-start w-full">
          <FormLabel className="!text-sky-950 !font-[400] !text-md">
            Coach email
          </FormLabel>
          <TextField
            placeholder="Coach email (optional)"
            value={coachEmail}
            handleChange={e => handleCoachEmailChange(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-[7px] items-start w-full">
          <FormLabel className="!text-sky-950 !font-[400] !text-md">
            Description
          </FormLabel>
          <TextAriaField
            value={description}
            placeholder="Enter a program description..."
            handleChange={e => handleDescriptionChange(e.target.value)}
          />
        </div>

        <div className="w-full">
          <ImageField isVertical={false} setImageAsset={handleImageChange} />
        </div>
      </div>
    </div>
  )
}

export default ProgramDetails
