import { useEffect, useState } from 'react'
import { getCoachSettings } from '../api/coach'

const useCoachSettings = id => {
  const [coachSettings, setCoachSettings] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [refetch, setRefetch] = useState(false)

  useEffect(() => {
    setLoading(true)
    getCoachSettings(id).then(data => {
      if (data.status !== 200 || !data.data) {
        if (data.status === 404) {
          setErrorMsg('Not Found!')
        }
        setErrorMsg(data.request.statusText || data.message)
      } else {
        setCoachSettings(data.data)
      }
      setLoading(false)
    })
  }, [id, refetch])

  return { coachSettings, errorMsg, loading, setRefetch }
}

export default useCoachSettings
