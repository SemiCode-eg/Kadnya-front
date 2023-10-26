import { useParams } from 'react-router-dom';
import CustomCard from '../../../components/customCard/CustomCard';
import { useState } from 'react';
import EditLessonHeader from '../../../components/editLessonHeader/EditLessonHeader';

function EditLesson() {
  const [isDraft, setIsDraft] = useState(true);
  const { id } = useParams();

  return (
    <CustomCard>
      <div className="flex flex-col gap-10 mt-5">
        <EditLessonHeader isDraft={isDraft} setIsDraft={setIsDraft} />
        Edit Lesson: {id}
      </div>
    </CustomCard>
  );
}

export default EditLesson;
