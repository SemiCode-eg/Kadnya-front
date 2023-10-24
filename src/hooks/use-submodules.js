import { useEffect, useState } from 'react';
import { getSubmodules } from '../utils/ApiCalls';

const useSubmodules = (id) => {
  const [submodulesData, setSubmodulesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    getSubmodules(id).then((data) => {
      setLoading(true);
      if (data.status === 404) {
        setErrorMsg(data.message);
      } else {
        setSubmodulesData(data.data);
      }
      setLoading(false);
    });
  }, [id]);

  return { submodulesData, errorMsg, loading };
};

export default useSubmodules;
