import { useEffect, useState } from 'react'
import { prepareFetchedSession } from '../utils/coach/prepareFetchedSession'
import { getSession } from '../api/coachProgram'

export default function useCoachSession(id) {
  const [sessionData, setSessionData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const getCoachSession = async () => {
      setLoading(true)
      const res = await getSession(id)

      if (res.status === 404) setErrorMsg('Not Found!')

      if (!res.data) setErrorMsg(res.request.statusText || res.message)

      if (res.status === 200 && res.data)
        setSessionData(prepareFetchedSession(res.data))

      setLoading(false)
    }
    getCoachSession()
  }, [id])

  return { sessionData, errorMsg, loading }
}
