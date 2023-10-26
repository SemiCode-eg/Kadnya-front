/* eslint-disable react/prop-types */
import { Eye } from '@phosphor-icons/react';
import MainButton from '../MainButton/MainButton';
import GoBackBtn from '../goBackBtn/GoBackBtn';
import { Link } from 'react-router-dom';
import DraftBtn from '../draftBtn/DraftBtn';

function EditLessonHeader({ isDraft, setIsDraft }) {
  return (
    <div className="flex flex-col md:flex-row items-end justify-between gap-10 ">
      <GoBackBtn />
      <div className="self-end flex gap-5 md:gap-3 justify-end items-center flex-wrap-reverse">
        <div className='flex gap-3 items-center flex-row-reverse md:flex-row'>
          <DraftBtn setDraftState={setIsDraft} draftState={isDraft} />
          <Link title="Preview" to="/">
            <Eye size={30} className="text-gray-400" />
          </Link>
        </div>
        <div className='flex gap-3 items-center'>
          <MainButton
            text="Delete"
            className="border-[1px] !py-2.5 !mr-0 text-white bg-red-500 hover:!border-red-600 hover:bg-white hover:text-red-500 !px-4 md:!px-8"
            isPrimary={false}
          />
          <MainButton text="Save" isForm={true} className="!py-2.5 !px-4 md:!px-8" />
        </div>
      </div>
    </div>
  );
}

export default EditLessonHeader;
