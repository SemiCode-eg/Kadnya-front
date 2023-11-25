import { useReducer, useState } from 'react';
import CustomModal from '../../../customModal';
import MainButton from '../../../mainButton/MainButton';
import AddCoursePreview from '../../../../pages/products/courses/AddCourseForm/Preview';
import {
  ProgramFormInitialState,
  createProgramReducer,
  formReducerKeys,
} from './CreateProgramReducer';
import SessionType from './SessionType';
import HandleErrorLoad from '../../../../components/handleErrorLoad/index';
import ProgramInfoForm from './ProgramInfoForm';
import ProgramTimeLocationForm from './ProgramTimeLocationForm';
import ProgramPaidMethod from './ProgramPaidMethod';

const maxSteps = 4;

const validateStep = (step, formData) => {
  switch (step) {
    case 2:
      if (isEmpty(formData.title)) {
        return 'Title is required';
      } else if (isEmpty(formData.description)) {
        return 'Description is required';
      } else if (!formData.image) {
        return 'Image is required';
      }
      break;
    case 3:
      if (formData.scheduleType === 'WEBSITE' && isEmpty(formData.location)) {
        return 'Location is required';
      }
      if (formData.scheduleType === 'LINK') {
        if (isEmpty(formData.scheduleURL)) {
          return 'Schedule URL is required';
        } else if (!isValidUrl(formData.scheduleURL)) {
          return 'Enter a valid URL';
        }
      }
      break;
    default:
      break;
  }
  return null;
};

const isEmpty = (target) => {
  return target === '';
};

function isValidUrl(url) {
  const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;

  return urlRegex.test(url);
}

/* eslint-disable react/prop-types */
function CreateCoachProgramForm({ onClose, open, targetRefetch = () => {} }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorReopen, setErrorReopen] = useState(false);
  const [formData, dispatchFormData] = useReducer(
    createProgramReducer,
    ProgramFormInitialState
  );

  const handleGoBack = () => {
    setStep((step) => --step);
  };

  const handleContinue = () => {
    dispatchFormData({ type: formReducerKeys.setError, payload: '' });
    setErrorReopen((prev) => !prev);

    const validationError = validateStep(step, formData);
    if (validationError) {
      dispatchFormData({
        type: formReducerKeys.setError,
        payload: validationError,
      });
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  const resetForm = () => {
    dispatchFormData({ type: formReducerKeys.reset });
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Form Data:", formData);

    resetForm();
    setLoading(false);
    onClose();
    targetRefetch();
  };

  const renderStepContent = () => {
    switch (step) {
      case 2:
        return (
          <ProgramInfoForm
            titleValue={formData.title}
            descriptionValue={formData.description}
            coachNameValue={formData.coachName}
            sessionsCountValue={formData.sessionsCount}
            dispatchFormData={dispatchFormData}
            isPackage={formData.sessionType === 'SINGLE' ? false : true}
          />
        );
      case 3:
        return (
          <ProgramTimeLocationForm
            dispatchFormData={dispatchFormData}
            scheduleTypeValue={formData.scheduleType}
            scheduleURLValue={formData.scheduleURL}
            durationValue={formData.duration}
            locationValue={formData.location}
          />
        );
      case 4:
        return (
          <ProgramPaidMethod
            dispatchFormData={dispatchFormData}
            priceValue={formData.price}
            pricingTypeValue={formData.pricingType}
          />
        );
      default:
        return null;
    }
  };

  return (
    <CustomModal
      title="Create New Coaching Program"
      open={open}
      onClose={handleClose}
      onGoBack={handleGoBack}
      fullWidth
      maxWidth="md"
      step={step}
    >
      <HandleErrorLoad
        loading={loading}
        errorMsg={formData.error}
        errorReopen={errorReopen}
      >
        <form
          className="flex flex-col gap-6 items-center sm:px-28"
          onSubmit={handleSubmit}
        >
          {step > 1 && (
            <>
              <AddCoursePreview
                title={formData.title}
                description={formData.description}
                backgroundColor="#F66A82"
              />
              {renderStepContent()}
            </>
          )}

          {step === 1 && (
            <>
              <SessionType
                selectedValue={formData.sessionType}
                reducerType={formReducerKeys.setSessionType}
                dispatchFormData={dispatchFormData}
              />

              <AddCoursePreview
                title={formData.title}
                description={formData.description}
                backgroundColor="#F66A82"
              />
            </>
          )}

          <MainButton
            text={
              step === maxSteps
                ? loading
                  ? 'Submitting...'
                  : 'Finish'
                : 'Continue'
            }
            className="sm:!px-28 !px-16"
            handleClick={step === maxSteps ? handleSubmit : handleContinue}
          />
        </form>
      </HandleErrorLoad>
    </CustomModal>
  );
}

export default CreateCoachProgramForm;
