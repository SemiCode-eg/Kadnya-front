import CustomCard from '../../../components/customCard/CustomCard'
import { useRef, useState } from 'react'
import LessonDetailsHeader from '../../../components/lessonDetails/lessonDetailsHeader/LessonDetailsHeader'
import LessonDetailsBody from '../../../components/lessonDetails/lessonDetailsBody/LessonDetailsBody'

function LessonDetails() {
  const [isDraft, setIsDraft] = useState(true)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const formRef = useRef(null)

  // TODO Lesson Enhancements: useReducer instead of useState - make the component much smaller

  return (
    <CustomCard>
      <div className="flex flex-col gap-10 mt-5">
        <LessonDetailsHeader
          isDraft={isDraft}
          setIsDraft={setIsDraft}
          formRef={formRef}
          submitError={submitError}
          setSubmitError={setSubmitError}
          submitLoading={submitLoading}
        />
        <LessonDetailsBody
          isDraft={isDraft}
          formRef={formRef}
          setIsDraft={setIsDraft}
          setSubmitError={setSubmitError}
          setSubmitLoading={setSubmitLoading}
        />
      </div>
    </CustomCard>
  )
}

export default LessonDetails
