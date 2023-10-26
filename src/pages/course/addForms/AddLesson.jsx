/* eslint-disable react/prop-types */
import { FormLabel } from '@mui/material';
import MainButton from '../../../components/MainButton/MainButton';
import { useState } from 'react';
import TextField from '../../../components/Forms/TextField';
import SortSelect from '../../../components/SortSelect';
import CustomModal from '../../../components/CustomModal';
import useModule from '../../../hooks/use-module';
import { sendModuleLesson, sendSubmoduleLesson } from '../../../utils/ApiCalls';

function AddLesson({
  open,
  onClose,
  modules,
  submodules = [],
  isMainBtn = true,
}) {
  const [title, setTitle] = useState('');
  const [titleErrorMsg, setTitleErrorMsg] = useState('');
  const [submodulesSortKey, setSubmodulesSortKey] = useState(
    submodules.length > 0 ? submodules[0].value : 'NONE'
  );

  const setModulesSelectOption = () => {
    return modules?.map((module) => ({
      value: module.id,
      label: module.title,
    }));
  };

  const [modulesSortKey, setModulesSortKey] = useState(
    setModulesSelectOption()[0].value
  );

  const {
    moduleData,
    errorMsg: moduleErrorMsg,
    loading: moduleLoading,
  } = useModule(modulesSortKey);

  const setSubmodulesSelectOption = () => {
    if (!isMainBtn) {
      return submodules.length === 0 ? [] : submodules;
    } else {
      return moduleData?.submodules?.map((submodule) => ({
        value: submodule.id,
        label: submodule.title,
      }));
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (title === '') {
      setTitleErrorMsg('This field is required!');
      return;
    }

    const lessonData = {
      title,
      module: submodulesSortKey !== 'NONE' ? submodulesSortKey : modulesSortKey,
    };

    if (submodulesSortKey !== 'NONE') {
      sendSubmoduleLesson(lessonData)
        .then(() => {
          onClose();
        })
        .catch((err) => console.log(err));
    } else {
      sendModuleLesson(lessonData)
        .then(() => {
          onClose();
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <CustomModal
      title="New Lesson"
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    >
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
            selectClasses="!rounded-xl"
          />
        </div>
        <div>
          {setSubmodulesSelectOption()?.length > 0 && (
            <SortSelect
              label="Select Submodule"
              className="!w-full"
              options={
                submodules.length > 0
                  ? [...setSubmodulesSelectOption()]
                  : [
                      { value: 'NONE', label: 'None' },
                      ...setSubmodulesSelectOption(),
                    ]
              }
              sortKey={submodulesSortKey}
              onSelect={(e) => setSubmodulesSortKey(e.target.value)}
              selectClasses="!rounded-xl"
            />
          )}
        </div>
        <div className="self-end flex mt-5">
          <MainButton
            text="Cancel"
            className="text-teal-500 text-[17px] font-[500] border-[1px] border-teal-500 duration-150 hover:text-white hover:bg-teal-500"
            handleClick={onClose}
            isPrimary={false}
          />
          <MainButton text="Create Lesson" isForm={true} type="submit" />
        </div>
      </form>
    </CustomModal>
  );
}

export default AddLesson;
