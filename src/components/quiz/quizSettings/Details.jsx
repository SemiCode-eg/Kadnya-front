/* eslint-disable react/prop-types */
import { FormLabel } from '@mui/material'
import TextField from '../../customFields/TextField'
import TextAriaField from '../../customFields/TextAriaField'
import ImageField from '../../imageField/ImageField'

function Details({
  title,
  setTitle,
  setTitleErrorMsg,
  titleErrorMsg,
  description,
  setDescription,
  descriptionErrorMsg,
  setDescriptionErrorMsg,
  imageAsset,
  setImageAsset,
}) {
  console.log(imageAsset)
  return (
    <div className="border-[1.5px] border-[#ddd] rounded-[10px] p-6">
      <p className="w-full mx-auto text-sky-950 font-[600] text-xl tracking-[-0.25px] mb-8">
        Details
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-[7px] items-start w-full">
          <FormLabel className="!text-sky-950 !font-[400] !text-md">
            Title
          </FormLabel>
          <TextField
            placeholder="Title"
            value={title}
            handleChange={e => {
              setTitle(e.target.value)
              setTitleErrorMsg('')
            }}
            className="!text-sm"
          />
          {titleErrorMsg && <div className="text-red-500">{titleErrorMsg}</div>}
        </div>
        <div className="flex flex-col gap-[7px] items-start w-full">
          <FormLabel className="!text-sky-950 !font-[400] !text-md">
            Description
          </FormLabel>
          <TextAriaField
            value={description}
            placeholder="Add a description..."
            handleChange={e => {
              setDescription(e.target.value)
              setDescriptionErrorMsg('')
            }}
            className="!text-sm"
          />
          {descriptionErrorMsg && (
            <p className="text-red-500">{descriptionErrorMsg}</p>
          )}
        </div>
        <div>
          <ImageField setImageAsset={setImageAsset} isVertical={false} imageURL={imageAsset}/>
        </div>
      </div>
    </div>
  )
}

export default Details
