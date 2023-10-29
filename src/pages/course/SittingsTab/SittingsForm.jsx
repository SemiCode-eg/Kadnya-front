import MainButton from '../../../components/MainButton/MainButton';
import ImageField from '../../../components/imageField/ImageField';
import TextField from '../../../components/forms/TextField';
import { Typography } from '@mui/material';
import TextAriaField from '../../../components/forms/TextAriaField';

/* eslint-disable react/prop-types */
export default function SittingsForm({
  onSubmit,
  onImageUpload,
  title,
  onTitleInput,
  description,
  onDescriptionInput,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center sm:gap-0 gap-6"
    >
      <div className="flex sm:flex-row flex-col w-full mt-3">
        <div className="flex flex-col sm:w-1/2">
          <ImageField setImageAsset={onImageUpload} />
        </div>
        <div className="flex flex-col sm:w-1/2">
          <div className="flex flex-col gap-1 items-start">
            <Typography variant="subtitle1" component="label">
              Title
            </Typography>
            <TextField
              placeholder="Title"
              value={title}
              handleChange={onTitleInput}
            />
          </div>
          <div className="flex flex-col gap-1 items-start">
            <Typography variant="subtitle1" component="label">
              Description
            </Typography>
            <TextAriaField
              placeholder="Description"
              value={description}
              handleChange={onDescriptionInput}
            />
          </div>
        </div>
      </div>

      <MainButton type="submit" text="Save" handleClick={onSubmit} />
    </form>
  );
}
