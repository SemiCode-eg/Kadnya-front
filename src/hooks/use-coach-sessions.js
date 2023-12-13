import { useEffect, useState } from 'react'
import { getSessions } from '../api/coach/dashboard'

const useCoachSessions = sessionType => {
  const [sessionsData, setSessionsData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    setLoading(true)
    getSessions(sessionType).then(data => {
      if (data.status !== 200 || !data.data) {
        if (data.status === 404) {
          setErrorMsg('Not Found!')
        }
        setErrorMsg(data.request.statusText || data.message)
      } else {
        setSessionsData(data.data)
      }
      setLoading(false)
    })
  }, [sessionType])

  return { sessionsData, errorMsg, loading }
}

export default useCoachSessions
