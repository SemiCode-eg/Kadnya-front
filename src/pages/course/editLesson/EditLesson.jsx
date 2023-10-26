import { useParams } from 'react-router-dom';

function EditLesson() {
  const { id } = useParams();

  return <div>Edit Lesson: {id}</div>;
}

export default EditLesson;
