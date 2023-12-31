import { useEffect, useState } from 'react'
import { getCoachProgram } from '../api/coach'

const useCoachProgram = id => {
  const [programData, setProgramData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [refetch, setRefetch] = useState(false)

  useEffect(() => {
    if (id) {
      setLoading(true)
      getCoachProgram(id).then(data => {
        if (data.status !== 200 || !data.data) {
          if (data.status === 404) {
            setErrorMsg('Not Found!')
          }
          setErrorMsg(data.request.statusText || data.message)
        } else {
          setProgramData(data.data)
        }
        setLoading(false)
      })
    }
  }, [id, refetch])

  return { programData, errorMsg, loading, setRefetch }
}

export default useCoachProgram
