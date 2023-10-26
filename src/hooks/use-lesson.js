import { useEffect, useState } from 'react';
import { getSingleLesson } from '../utils/ApiCalls';

const useLesson = (id) => {
  const [lessonData, setLessonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    getSingleLesson(id).then((data) => {
      setLoading(true);
      if (data.status === 404) {
        setErrorMsg(data.message);
      } else {
        setLessonData(data.data);
      }
      setLoading(false);
    });
  }, [id]);

  return { lessonData, errorMsg, loading };
};

export default useLesson;
