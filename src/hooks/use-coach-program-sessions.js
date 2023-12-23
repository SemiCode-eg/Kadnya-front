import { useEffect, useState } from 'react'
import { getCoachProgramSessions } from '../api/coachProgram'

const useCoachProgramSessions = id => {
  const [sessionsData, setSessionsData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [refetch, setRefetch] = useState(false)

  useEffect(() => {
    if (id) {
      setLoading(true)
      getCoachProgramSessions(id).then(data => {
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
    }
  }, [id, refetch])

  return { sessionsData, errorMsg, loading, setRefetch }
}

export default useCoachProgramSessions
