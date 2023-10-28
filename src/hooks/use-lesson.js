import { useEffect, useState } from 'react';
import { getSingleLesson } from '../utils/ApiCalls';

const useLesson = (id) => {
  const [lessonData, setLessonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setLoading(true);
    getSingleLesson(id).then((data) => {
      if (data.status !== 200 || !data.data) {
        setErrorMsg(data.request.statusText || data.message);
      } else {
        setLessonData(data.data);
      }
      setLoading(false);
    });
  }, [id]);

  return { lessonData, errorMsg, loading };
};

export default useLesson;
