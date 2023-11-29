import { useEffect, useState } from 'react'
import { getSingleCourse } from '../api/course'

const useCourse = (id, refetch) => {
  const [courseData, setCourseData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    setLoading(true)
    getSingleCourse(id).then(data => {
      if (data.status !== 200 || !data.data) {
        if (data.status === 404) {
          setErrorMsg('Not Found!')
        }
        setErrorMsg(data.request.statusText || data.message)
      } else {
        setCourseData(data.data)
      }
      setLoading(false)
    })
  }, [id, refetch])

  return { courseData, errorMsg, loading }
}

export default useCourse
