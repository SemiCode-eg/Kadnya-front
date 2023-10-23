/* eslint-disable react/prop-types */
import { FormLabel } from '@mui/material';
import TextAriaField from '../../../components/forms/TextAriaField';
import ImageField from '../../../components/imageField/imageField';
import MainButton from '../../../components/MainButton/MainButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TextField from '../../../components/forms/TextField';
import SortSelect from '../../../components/SortSelect';

function AddSubmodule({ courseID }) {
  const [title, setTitle] = useState('');
  const [titleErrorMsg, setTitleErrorMsg] = useState('');

  const [description, setDescription] = useState('');
  const [descriptionErrorMsg, setDescriptionErrorMsg] = useState('');

  const [imageAsset, setImageAsset] = useState(null);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (title === '') {
      setTitleErrorMsg('This field is required!');
      return;
    }

    if (description === '') {
      setDescriptionErrorMsg('This field is required!');
      return;
    }

    const moduleData = {
      title,
      description,
      imageAsset,
      courseID,
    };

    // sendModule(moduleData);
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-[7px] items-start w-full">
        <FormLabel className="!text-black !font-[400] !text-xl">
          Title
        </FormLabel>
        <TextField
          placeholder="Text"
          value={title}
          handleChange={(e) => {
            setTitle(e.target.value);
            setTitleErrorMsg('');
          }}
        />
        <div className="text-red-500">{titleErrorMsg}</div>
      </div>
      <div>
        <SortSelect label='Select Top-level Module' className='!w-full '/>
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

        <div className="text-red-500">{descriptionErrorMsg}</div>
      </div>
      <ImageField setImageAsset={setImageAsset} />
      <div className="self-end flex mt-5">
        <MainButton
          text="Cancel"
          className="text-teal-500 text-[17px] font-[500] border-[1px] border-teal-500 duration-150 hover:text-white hover:bg-teal-500"
          handleClick={() => navigate(-1)}
          isPrimary={false}
        />
        <MainButton text="Create Module" isForm={true} type="submit" />
      </div>
    </form>
  );
}

export default AddSubmodule;
