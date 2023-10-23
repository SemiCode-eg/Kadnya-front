/* eslint-disable react/prop-types */
import { FormLabel } from '@mui/material';
import ImageField from '../../../components/imageField/ImageField';
import { useState } from 'react';
import { sendModule } from '../../../utils/ApiCalls';
import MainButton from '../../../components/MainButton/MainButton';
import { useNavigate } from 'react-router-dom';
import TextField from '../../../components/Forms/TextField';
import TextAriaField from '../../../components/Forms/TextAriaField';
import CustomModal from '../../../components/CustomModal';

function AddModule({ courseID = 1, open, onClose }) {
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

    sendModule(moduleData);
  }

  return (
    <CustomModal
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    >
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
    </CustomModal>
  );
}

export default AddModule;
