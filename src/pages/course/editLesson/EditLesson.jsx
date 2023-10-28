import CustomCard from '../../../components/customCard/CustomCard';
import { useRef, useState } from 'react';
import EditLessonHeader from '../../../components/editLesson/editLessonHeader/EditLessonHeader';
import EditLessonBody from '../../../components/editLesson/editLessonBody/EditLessonBody';

function EditLesson() {
  const [isDraft, setIsDraft] = useState(true);
  const formRef = useRef(null);

  return (
    <CustomCard>
      <div className="flex flex-col gap-10 mt-5">
        <EditLessonHeader
          isDraft={isDraft}
          setIsDraft={setIsDraft}
          formRef={formRef}
        />
        <EditLessonBody
          isDraft={isDraft}
          formRef={formRef}
          setIsDraft={setIsDraft}
        />
      </div>
    </CustomCard>
  );
}

export default EditLesson;
