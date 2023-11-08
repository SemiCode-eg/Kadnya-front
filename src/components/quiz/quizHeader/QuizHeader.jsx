/* eslint-disable react/prop-types */
import { Alert, Snackbar } from '@mui/material';
import imageSquare from '../../../assets/images/courses/ImageSquare.png';
import DraftBtn from '../../draftBtn/DraftBtn';
import { Link } from 'react-router-dom';
import { Eye } from '@phosphor-icons/react';
import MainButton from '../../mainButton/MainButton';

function QuizHeader({
  quizData,
  isDraft,
  setIsDraft,
  formRef,
  submitErrorMsg,
  submitLoading,
  successSubmitMsg,
}) {
  return (
    <>
      <div className="mb-5 flex gap-5 flex-col lg:flex-row">
        <div className="flex justify-between items-center gap-[35px] flex-1 flex-col sm:flex-row flex-wrap">
          <div className="flex items-center flex-col sm:flex-row gap-[20px] flex-1">
            <div className="w-[140px] h-[114px] bg-white rounded-[10px] shadow-1">
              <img
                src={quizData?.image ? quizData?.image : imageSquare}
                alt="Quiz image"
                className={`w-full h-full italic ${
                  quizData?.image ? 'object-cover' : 'object-contain'
                } rounded-[10px]`}
              />
            </div>
            <div className="text-gray-950 capitalize text-[20px]">
              <p>{quizData?.title || 'Title'}</p>
            </div>
          </div>
          <div className="flex items-center gap-[20px] flex-1 sm:justify-end flex-wrap-reverse sm:flex-nowrap">
            <DraftBtn setDraftState={setIsDraft} draftState={isDraft} />
            <Link title="Preview" to="/">
              <Eye size={30} className="text-gray-400" />
            </Link>
            <MainButton
              type="submit"
              text={submitLoading ? 'Saving...' : 'Save'}
              isForm={true}
              className="!py-2.5 md:!px-8"
              handleClick={() => {
                formRef.current.click();
              }}
            />
          </div>
        </div>
      </div>
      {!!submitErrorMsg && (
        <p className="text-red-500 font-bold text-lg mb-3">{submitErrorMsg}</p>
      )}
      {!!successSubmitMsg && (
        <Snackbar open={!!successSubmitMsg} autoHideDuration={6000}>
          <Alert severity="success" sx={{ width: '100%' }}>
            {successSubmitMsg}
          </Alert>
        </Snackbar>
      )}
    </>
  );
}

export default QuizHeader;
