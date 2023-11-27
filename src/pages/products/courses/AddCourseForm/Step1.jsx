import { Typography } from '@mui/material'
import TextField from '../../../../components/customFields/TextField'
import TextAriaField from '../../../../components/customFields/TextAriaField'

/* eslint-disable react/prop-types */
export default function Step1({
  step = 1,
  title = '',
  onTitleInput = () => {},
  description = '',
  onDescInput = () => {},
}) {
  return (
    step === 1 && (
      <>
        <div className="flex flex-col gap-1 w-full">
          <Typography variant="h5" component="h3">
            Courses Cetails
          </Typography>
          <Typography variant="body" component="p" className=" text-gray-700">
            We&apos;ll use your title and description to generate a sample
            course outline:
          </Typography>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <Typography
              id="add-course-form-title"
              component="label"
              variant="subtitle1">
              Title
            </Typography>
            <TextField
              placeholder="Examples: Public Speaking 101, Learning piano, ..."
              value={title}
              handleChange={onTitleInput}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Typography
              id="add-course-form-description"
              component="label"
              variant="subtitle1">
              Brief Description
            </Typography>
            <TextAriaField
              placeholder="Example: Learn the skills required to ..."
              value={description}
              handleChange={onDescInput}
            />
          </div>
        </div>
      </>
    )
  )
}
