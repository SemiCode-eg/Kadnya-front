import { useState } from 'react'
import CustomModal from '../../../customModal'
import MainButton from '../../../mainButton/MainButton'
import AddCoursePreview from '../../../../pages/products/courses/AddCourseForm/Preview'
import SessionType from './SessionType'
import HandleErrorLoad from '../../../../components/handleErrorLoad/index'
import ProgramInfoForm from './ProgramInfoForm'
import ProgramTimeLocationForm from './ProgramTimeLocationForm'
import ProgramPaidMethod from './ProgramPaidMethod'
import useProgramReducer from '../../../../hooks/use-program-reducer'
import { createCoachProgram } from '../../../../api/coach/program'
import { isEmpty, isValidUrl } from '../../../../utils/validations'

const maxSteps = 4

const validateStep = (step, formData) => {
  switch (step) {
    case 2:
      if (isEmpty(formData.title)) {
        return 'Title is required'
      } else if (isEmpty(formData.description)) {
        return 'Description is required'
      } else if (!formData.image) {
        return 'Image is required'
      }
      break
    case 3:
      if (formData.scheduleType === 'WEBSITE' && isEmpty(formData.location)) {
        return 'Location is required'
      }
      if (formData.scheduleType === 'LINK') {
        if (isEmpty(formData.scheduleURL)) {
          return 'Schedule URL is required'
        } else if (!isValidUrl(formData.scheduleURL)) {
          return 'Enter a valid URL'
        }
      }
      break
    default:
      break
  }
  return null
}

function CreateCoachProgramForm({ onClose, open, setRefetch = () => {} }) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const { programData, dispatchFormData, formReducerKeys } = useProgramReducer()

  const handleGoBack = () => {
    setStep(step => --step)
  }

  const handleContinue = () => {
    dispatchFormData({ type: formReducerKeys.SET_ERROR, payload: '' })

    const validationError = validateStep(step, programData)
    if (validationError) {
      dispatchFormData({
        type: formReducerKeys.SET_ERROR,
        payload: validationError,
      })
    } else {
      setStep(prevStep => prevStep + 1)
    }
  }

  const handleClose = () => {
    onClose()
    resetForm()
  }

  const resetForm = () => {
    dispatchFormData({ type: formReducerKeys.RESET })
    setStep(1)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatchFormData({ type: formReducerKeys.SET_ERROR, payload: '' })

    const formData = new FormData()
    formData.append('title', programData.title)
    formData.append('coach_name', programData.coachName)
    formData.append('description', programData.description)
    formData.append('image', programData.image)
    formData.append('session_count', programData.sessionsCount)
    // TODO send coach ID with the data
    formData.append('coach', 1)

    if (programData.sessionType === 'PACKAGE') {
      formData.append('session_type', 'package')
    } else {
      formData.append('session_type', 'single')
    }

    if (programData.scheduleType === 'WEBSITE') {
      formData.append('scheduling_preference', 'websitebook')
      formData.append('location', programData.location)
      formData.append('session_duration', programData.duration)
    } else {
      formData.append('scheduling_preference', 'custom')
      formData.append('schedule_url', programData.scheduleURL)
    }

    if (programData.pricingType === 'FREE') {
      formData.append('price', 0)
    } else {
      formData.append('price', programData.price)
    }

    setLoading(true)
    createCoachProgram(formData)
      .then(data => {
        setLoading(false)
        if (data.status === 201) {
          setSuccessMsg('Program created successfully.')
          setRefetch(prev => !prev)
          handleClose()
        } else {
          dispatchFormData({
            type: formReducerKeys.SET_ERROR,
            payload: 'Error occurred, please try again later.',
          })
        }
      })
      .catch(() => {
        dispatchFormData({
          type: formReducerKeys.SET_ERROR,
          payload: 'Server Error, please try again later.',
        })
      })
  }

  const renderStepContent = () => {
    switch (step) {
      case 2:
        return (
          <ProgramInfoForm
            titleValue={programData.title}
            descriptionValue={programData.description}
            coachNameValue={programData.coachName}
            sessionsCountValue={programData.sessionsCount}
            dispatchFormData={dispatchFormData}
          />
        )
      case 3:
        return (
          <ProgramTimeLocationForm
            dispatchFormData={dispatchFormData}
            scheduleTypeValue={programData.scheduleType}
            scheduleURLValue={programData.scheduleURL}
            durationValue={programData.duration}
            locationValue={programData.location}
          />
        )
      case 4:
        return (
          <ProgramPaidMethod
            dispatchFormData={dispatchFormData}
            priceValue={programData.price}
            pricingTypeValue={programData.pricingType}
          />
        )
    }
  }

  return (
    <HandleErrorLoad successMsg={successMsg} setSuccessMsg={setSuccessMsg}>
      <CustomModal
        title="Create New Coaching Program"
        open={open}
        onClose={handleClose}
        onGoBack={handleGoBack}
        fullWidth
        maxWidth="md"
        step={step}>
        <HandleErrorLoad
          loading={loading}
          errorMsg={programData.error}
          setErrorMsg={value =>
            dispatchFormData({
              type: formReducerKeys.SET_ERROR,
              payload: value,
            })
          }>
          <form
            className="flex flex-col gap-6 items-center sm:px-28"
            onSubmit={handleSubmit}>
            {step > 1 && (
              <>
                <AddCoursePreview
                  title={programData.title}
                  description={programData.description}
                  backgroundColor="#F66A82"
                />
                {renderStepContent()}
              </>
            )}

            {step === 1 && (
              <>
                <SessionType
                  selectedValue={programData.sessionType}
                  reducerType={formReducerKeys.SET_SESSION_TYPE}
                  dispatchFormData={dispatchFormData}
                />

                <AddCoursePreview
                  title={programData.title}
                  description={programData.description}
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
    </HandleErrorLoad>
  )
}

export default CreateCoachProgramForm
