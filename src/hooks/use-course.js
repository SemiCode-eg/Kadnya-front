import { useEffect, useState } from 'react';
import { getsingleCourse } from '../utils/ApiCalls';

const useCourse = (id) => {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setLoading(true);
    getsingleCourse(id).then((data) => {
      if (data.status !== 200 || !data.data) {
        setErrorMsg(data.request.statusText || data.message);
      } else {
        setCourseData(data.data);
      }
      setLoading(false);
    });
  }, [id]);

  return { courseData, errorMsg, loading };
};

export default useCourse;
