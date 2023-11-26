import { useEffect, useState } from 'react'
import { getSingleLesson } from '../utils/ApiCalls'

const useLesson = id => {
  const [lessonData, setLessonData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (id) {
      setLoading(true)
      getSingleLesson(id).then(data => {
        if (data.status !== 200 || !data.data) {
          if (data.status === 404) {
            setErrorMsg('Not Found!')
          }
          setErrorMsg(data.request.statusText || data.message)
        } else {
          setLessonData(data.data)
        }
        setLoading(false)
      })
    }
  }, [id])

  return { lessonData, errorMsg, loading }
}

export default useLesson
