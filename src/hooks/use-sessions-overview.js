import { useEffect, useState } from 'react'
import { getSessionsOverview } from '../api/coach/dashboard'

const useSessionsOverview = () => {
  const [overviewData, setOverviewData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    setLoading(true)
    getSessionsOverview().then(data => {
      if (data.status !== 200 || !data.data) {
        if (data.status === 404) {
          setErrorMsg('Not Found!')
        }
        setErrorMsg(data.request.statusText || data.message)
      } else {
        setOverviewData(data.data)
      }
      setLoading(false)
    })
  }, [])

  return { overviewData, errorMsg, loading }
}

export default useSessionsOverview
