/* eslint-disable react/prop-types */
import { Eye } from '@phosphor-icons/react';
import MainButton from '../MainButton/MainButton';
import GoBackBtn from '../goBackBtn/GoBackBtn';
import { Link } from 'react-router-dom';
import DraftBtn from '../draftBtn/DraftBtn';

function EditLessonHeader({ isDraft, setIsDraft }) {
  return (
    <div className="flex items-end justify-between gap-10 ">
      <GoBackBtn />
      <div className="self-end flex gap-3 justify-between items-center">
        <DraftBtn setDraftState={setIsDraft} draftState={isDraft} />
        <Link title="Preview" to="/">
          <Eye size={30} className="text-gray-400" />
        </Link>
        <MainButton
          text="Delete"
          className="border-[1px] !py-2.5 mr-0 text-white bg-red-500 hover:!border-red-600 hover:bg-white hover:text-red-500"
          isPrimary={false}
        />
        <MainButton text="Save" isForm={true} className="!py-2.5" />
      </div>
    </div>
  );
}

export default EditLessonHeader;
