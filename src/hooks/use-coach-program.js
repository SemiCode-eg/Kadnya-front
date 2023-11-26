import { useEffect, useState } from 'react'
import { getCoachProgram } from '../utils/ApiCalls'

const useCoachProgram = id => {
  const [programData, setProgramData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

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
  }, [id])

  return { programData, errorMsg, loading }
}

export default useCoachProgram
