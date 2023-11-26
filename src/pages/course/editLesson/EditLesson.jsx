import CustomCard from '../../../components/customCard/CustomCard';
import { useRef, useState } from 'react';
import EditLessonHeader from '../../../components/editLesson/editLessonHeader/EditLessonHeader';
import EditLessonBody from '../../../components/editLesson/editLessonBody/EditLessonBody';

function EditLesson() {
  const [isDraft, setIsDraft] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const formRef = useRef(null);

  // TODO Lesson Enhancements: useReducer instead of useState - make the component much smaller

  return (
    <CustomCard>
      <div className="flex flex-col gap-10 mt-5">
        <EditLessonHeader
          isDraft={isDraft}
          setIsDraft={setIsDraft}
          formRef={formRef}
          submitError={submitError}
          setSubmitError={setSubmitError}
          submitLoading={submitLoading}
        />
        <EditLessonBody
          isDraft={isDraft}
          formRef={formRef}
          setIsDraft={setIsDraft}
          setSubmitError={setSubmitError}
          setSubmitLoading={setSubmitLoading}
        />
      </div>
    </CustomCard>
  );
}

export default EditLesson;
