import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getsingleCourse } from '../utils/ApiCalls';

const useCourse = () => {
  const [courseData, setCourseData] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getsingleCourse(id).then((data) => {
      if (data.response.status === 404) {
        setErrorMsg(data.message);
      } else {
        setCourseData(data);
      }
    });
  }, [courseData, id]);

  return { courseData, errorMsg };
};

export default useCourse;
