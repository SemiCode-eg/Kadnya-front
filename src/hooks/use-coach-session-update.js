import { useState } from 'react'
import { updateSession } from '../api/coach'

export default function useCoachSessionUpdate(id, session) {
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const updateCoachSession = async () => {
    setLoading(true)
    const res = await updateSession(id, session)

    if (res.status === 404) setErrorMsg('Not Found!')

    if (!res.data?.length) setErrorMsg(res.request.statusText || res.message)

    setLoading(false)
  }

  return { updateCoachSession, errorMsg, loading }
}
