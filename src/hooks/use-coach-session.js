import { useEffect, useState } from 'react'
import { getSession } from '../api/coach/dashboard'

export default function useCoachSession(id) {
  const [sessionData, setSessionData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const getCoachSession = async () => {
      setLoading(true)
      const res = await getSession(id)
      console.log(res.data)

      if (res.status === 404) setErrorMsg('Not Found!')

      if (!res.data) setErrorMsg(res.request.statusText || res.message)

      if (res.status === 200 && res.data) setSessionData(res.data)

      setLoading(false)
    }
    getCoachSession()
  }, [id])

  return { sessionData, errorMsg, loading }
}
