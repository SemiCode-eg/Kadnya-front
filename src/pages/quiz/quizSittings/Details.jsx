/* eslint-disable react/prop-types */
import { FormLabel } from '@mui/material';
import TextField from '../../../components/forms/TextField';
import TextAriaField from '../../../components/forms/TextAriaField';

function Details({
  title,
  setTitle,
  setTitleErrorMsg,
  titleErrorMsg,
  description,
  setDescription,
  descriptionErrorMsg,
  setDescriptionErrorMsg,
}) {
  return (
    <div className="border-[1.5px] border-[#ddd] rounded-[10px] p-6">
      <p className="w-full mx-auto text-sky-950 font-[600] text-xl tracking-[-0.25px] mb-8">
        Details
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-[7px] items-start w-full">
          <FormLabel className="!text-black !font-[400] !text-lg">
            Title
          </FormLabel>
          <TextField
            placeholder="Title"
            value={title}
            handleChange={(e) => {
              setTitle(e.target.value);
              setTitleErrorMsg('');
            }}
          />
          {titleErrorMsg && <div className="text-red-500">{titleErrorMsg}</div>}
        </div>
        <div className="flex flex-col gap-[7px] items-start w-full">
          <FormLabel className="!text-black !font-[400] !text-xl">
            Description
          </FormLabel>
          <TextAriaField
            value={description}
            placeholder="Add a description..."
            handleChange={(e) => {
              setDescription(e.target.value);
              setDescriptionErrorMsg('');
            }}
          />
          {descriptionErrorMsg && (
            <p className="text-red-500">{descriptionErrorMsg}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
