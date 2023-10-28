/* eslint-disable react/prop-types */
import { FormLabel } from '@mui/material';
import ImageField from '../../../components/imageField/ImageField';
import { useState } from 'react';
import {
  sendModule,
  updateModule,
  updateSubmodule,
} from '../../../utils/ApiCalls';
import MainButton from '../../../components/MainButton/MainButton';
import TextField from '../../../components/Forms/TextField';
import TextAriaField from '../../../components/Forms/TextAriaField';
import CustomModal from '../../../components/CustomModal';
import { useParams } from 'react-router-dom';

function AddModule({
  open,
  onClose,
  moduleID,
  moduleTitle = '',
  moduleDescription = '',
  moduleImage = null,
  isEdit = false,
  popupTitle = 'New Module',
  submitBtnTitle = 'Create Module',
  isSubmodule = false,
  parentModuleID,
}) {
  const [title, setTitle] = useState(moduleTitle);
  const [titleErrorMsg, setTitleErrorMsg] = useState('');

  const [description, setDescription] = useState(moduleDescription);
  const [descriptionErrorMsg, setDescriptionErrorMsg] = useState('');

  const [imageAsset, setImageAsset] = useState(moduleImage);

  const { id } = useParams();

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
      courseID: id,
    };

    if (isEdit) {
      if (isSubmodule) {
        updateSubmodule({ ...moduleData, module: parentModuleID }, moduleID)
          .then(() => {
            onClose();
            // window.location.reload();
          })
          .catch((err) => console.log(err));
      } else {
        updateModule(moduleData, moduleID)
          .then(() => {
            onClose();
            // window.location.reload();
          })
          .catch((err) => console.log(err));
      }
    } else {
      sendModule(moduleData)
        .then(() => {
          onClose();
          // window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <CustomModal
      title={popupTitle}
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
            handleClick={onClose}
            isPrimary={false}
          />
          <MainButton text={submitBtnTitle} isForm={true} type="submit" />
        </div>
      </form>
    </CustomModal>
  );
}

export default AddModule;
