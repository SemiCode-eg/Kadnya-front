import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getsingleCourse } from '../utils/ApiCalls';

const useCourse = () => {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getsingleCourse(id).then((data) => {
      setLoading(true);
      if (data.status === 404) {
        setErrorMsg(data.message);
      } else {
        setCourseData(data.data);
      }
      setLoading(false);
    });
  }, [id]);

  return { courseData, errorMsg,loading };
};

export default useCourse;
