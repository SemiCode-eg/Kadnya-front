import { useEffect, useState } from 'react'
import { getCoachPrograms } from '../api/coach'

const useCoachPrograms = refetch => {
  const [programsData, setProgramsData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    setLoading(true)
    getCoachPrograms().then(data => {
      if (data.status !== 200 || !data.data) {
        if (data.status === 404) {
          setErrorMsg('Not Found!')
        }
        setErrorMsg(data.request.statusText || data.message)
      } else {
        setProgramsData(data.data)
      }
      setLoading(false)
    })
  }, [refetch])

  return { programsData, errorMsg, loading }
}

export default useCoachPrograms
