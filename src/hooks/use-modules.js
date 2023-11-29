import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getModules } from '../api/course'

const useModules = () => {
  const [modulesData, setModulesData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    getModules(id).then(data => {
      if (data.status !== 200 || !data.data) {
        if (data.status === 404) {
          setErrorMsg('Not Found!')
        }
        setErrorMsg(data.request.statusText || data.message)
      } else {
        setModulesData(data.data)
      }
      setLoading(false)
    })
  }, [id])

  return { modulesData, errorMsg, loading }
}

export default useModules
