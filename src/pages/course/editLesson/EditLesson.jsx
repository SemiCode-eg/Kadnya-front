import CustomCard from '../../../components/customCard/CustomCard';
import { useState } from 'react';
import EditLessonHeader from '../../../components/editLesson/editLessonHeader/EditLessonHeader';
import EditLessonBody from '../../../components/editLesson/editLessonBody/EditLessonBody';

function EditLesson() {
  const [isDraft, setIsDraft] = useState(true);

  return (
    <CustomCard>
      <div className="flex flex-col gap-10 mt-5">
        <EditLessonHeader isDraft={isDraft} setIsDraft={setIsDraft} />
        <EditLessonBody />
      </div>
    </CustomCard>
  );
}

export default EditLesson;
