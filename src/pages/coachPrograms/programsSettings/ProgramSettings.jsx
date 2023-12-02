import { useParams } from 'react-router-dom'
import ProgramDetails from '../../../components/coachPrograms/settings/ProgramDetails'
import HandleErrorLoad from '../../../components/handleErrorLoad'
import useCoachProgram from '../../../hooks/use-coach-program'
import Scheduling from '../../../components/coachPrograms/settings/Scheduling'
import useProgramReducer from '../../../hooks/use-program-reducer'
import ProgramSettingsFooter from '../../../components/coachPrograms/settings/ProgramSettingsFooter'
import { isEmpty, isValidUrl } from '../../../utils/validations'
import { useEffect, useState } from 'react'
import { updateCoachProgram } from '../../../api/coach'
import ProgramHeader from '../../../components/coachPrograms/ProgramHeader'

const validateFields = formData => {
  if (isEmpty(formData.title)) {
    return 'Title is required'
  } else if (isEmpty(formData.description)) {
    return 'Description is required'
  } else if (!formData.image) {
    return 'Image is required'
  }
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
}

function ProgramSettings() {
  const [submitLoading, setSubmitLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorReopen, setErrorReopen] = useState(false)
  const [refetch, setRefetch] = useState(false)
  const { programId } = useParams()
  const { programData, loading, errorMsg } = useCoachProgram(programId, refetch)
  const {
    dispatchFormData,
    formReducerKeys,
    programData: formData,
  } = useProgramReducer()

  const handleSubmit = e => {
    e.preventDefault()
    dispatchFormData({ type: formReducerKeys.SET_ERROR, payload: '' })
    setErrorReopen(prev => !prev)

    const validationError = validateFields(formData)
    if (validationError) {
      dispatchFormData({
        type: formReducerKeys.SET_ERROR,
        payload: validationError,
      })
      return
    }

    const updatedData = new FormData()
    updatedData.append('title', formData.title)
    updatedData.append('coach_name', formData.coachName)
    updatedData.append('coach_email', formData.coachEmail)
    updatedData.append('description', formData.description)
    updatedData.append('scheduling_preference', 'websitebook')
    updatedData.append('location', formData.location)
    updatedData.append('session_duration', formData.duration)
    if (formData.image !== programData.image) {
      updatedData.append('image', formData.image)
    }

    setSubmitLoading(true)
    updateCoachProgram(updatedData, programId)
      .then(data => {
        setSubmitLoading(false)
        if (data.status === 200) {
          setSuccessMsg('Program updated successfully.')
          setRefetch(prev => !prev)
        } else {
          dispatchFormData({
            type: formReducerKeys.SET_ERROR,
            payload: 'Error occurred, please try again later.',
          })
          setErrorReopen(prev => !prev)
        }
      })
      .catch(() => {
        dispatchFormData({
          type: formReducerKeys.SET_ERROR,
          payload: 'Server Error, please try again later.',
        })
        setErrorReopen(prev => !prev)
      })
  }

  useEffect(() => {
    if (programData) {
      dispatchFormData({
        type: formReducerKeys.SET_TITLE,
        payload: programData.title,
      })
      dispatchFormData({
        type: formReducerKeys.SET_DESCRIPTION,
        payload: programData.description,
      })
      dispatchFormData({
        type: formReducerKeys.SET_IMAGE,
        payload: programData.image,
      })
      dispatchFormData({
        type: formReducerKeys.SET_COACH_NAME,
        payload: programData.coach_name,
      })
      dispatchFormData({
        type: formReducerKeys.SET_COACH_EMAIL,
        payload: programData.coach_email,
      })
      dispatchFormData({
        type: formReducerKeys.SET_DURATION,
        payload: programData.session_duration,
      })
      dispatchFormData({
        type: formReducerKeys.SET_LOCATION,
        payload: programData.location,
      })
    } else {
      dispatchFormData({
        type: formReducerKeys.SET_ERROR,
        payload: errorMsg,
      })
    }
  }, [dispatchFormData, programData, formReducerKeys, errorMsg])

  return (
    <>
      <ProgramHeader
        title={programData?.title}
        ReleaseDate={programData?.ReleaseDate}
        image={programData?.image}
      />
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <HandleErrorLoad
          loading={loading}
          errorMsg={formData.error}
          errorReopen={errorReopen}
          successMsg={successMsg}
          setSuccessMsg={setSuccessMsg}>
          <ProgramDetails
            programData={formData}
            dispatchFormData={dispatchFormData}
          />
          <Scheduling
            programData={formData}
            dispatchFormData={dispatchFormData}
          />
          <ProgramSettingsFooter
            SubmitLoading={submitLoading}
            programId={programId}
            dispatchFormData={dispatchFormData}
            setErrorReopen={setErrorReopen}
            setSuccessMsg={setSuccessMsg}
          />
        </HandleErrorLoad>
      </form>
    </>
  )
}

export default ProgramSettings
