import { useEffect, useState } from 'react'
import { getCourses } from '../api/course'

const useCourse = refetch => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const handleCourses = async () => {
      setLoading(true)

      const response = await getCourses()

      if (response.status === 404 || !response.data)
        setErrorMsg(response.message)
      else setCourses(response.data)

      setLoading(false)
    }
    handleCourses()
  }, [refetch])

  return { courses, loading, errorMsg }
}

export default useCourse
