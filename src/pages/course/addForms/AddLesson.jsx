/* eslint-disable react/prop-types */
import { FormLabel } from '@mui/material';
import MainButton from '../../../components/MainButton/MainButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import TextField from '../../../components/Forms/TextField';
import SortSelect from '../../../components/SortSelect';
import CustomModal from '../../../components/CustomModal';
import useModules from '../../../hooks/use-modules';
import { sendModuleLesson, sendSubmoduleLesson } from '../../../utils/ApiCalls';
import useSubmodules from '../../../hooks/use-submodules';

function AddLesson({ open, onClose }) {
  const [title, setTitle] = useState('');
  const [titleErrorMsg, setTitleErrorMsg] = useState('');
  const [modulesSortKey, setModulesSortKey] = useState(1);
  const [submodulesSortKey, setSubmodulesSortKey] = useState('NONE');

  const { id } = useParams();
  const navigate = useNavigate();
  const {
    modulesData,
    errorMsg: moduleErrorMsg,
    loading: moduleLoading,
  } = useModules();
  const {
    submodulesData,
    errorMsg: submoduleErrorMsg,
    loading: submoduleLoading,
  } = useSubmodules(id);

  const setModulesSelectOption = () => {
    return modulesData?.map((module) => ({
      value: module.id,
      label: module.title,
    }));
  };

  const setSubmodulesSelectOption = () => {
    return submodulesData?.map((module) => ({
      value: module.id,
      label: module.title,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (title === '') {
      setTitleErrorMsg('This field is required!');
      return;
    }

    const LessonData = {
      title,
      module: id,
    };

    sendModuleLesson(LessonData);
  }

  return (
    <CustomModal
      title="New Lesson"
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
        <div>
          <SortSelect
            label="Select Top-level Module"
            className="!w-full"
            options={setModulesSelectOption()}
            sortKey={modulesSortKey}
            onSelect={(e) => setModulesSortKey(e.target.value)}
          />
          {submodulesData?.length > 0 && (
            <SortSelect
              label="Select Submodule"
              className="!w-full"
              options={[
                { value: 'NONE', label: 'None' },
                ...setSubmodulesSelectOption(),
              ]}
              sortKey={submodulesSortKey}
              onSelect={(e) => setSubmodulesSortKey(e.target.value)}
            />
          )}
        </div>
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

export default AddLesson;
