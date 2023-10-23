import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getModule } from '../utils/ApiCalls';

const useModules = () => {
  const [modulesData, setModulesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getModule(id).then((data) => {
      setLoading(true);
      if (data.status === 404) {
        setErrorMsg(data.message);
      } else {
        setModulesData(data.data);
      }
      setLoading(false);
    });
  }, [id]);

  return { modulesData, errorMsg, loading };
};

export default useModules;
