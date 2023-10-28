import { useEffect, useState } from 'react';
import { getSingleModule } from '../utils/ApiCalls';

const useModule = (id) => {
  const [moduleData, setModuleData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setLoading(true);
    getSingleModule(id).then((data) => {
      if (data.status !== 200 || !data.data) {
        setErrorMsg(data.request.statusText || data.message);
      } else {
        setModuleData(data.data);
      }
      setLoading(false);
    });
  }, [id]);

  return { moduleData, errorMsg, loading };
};

export default useModule;
