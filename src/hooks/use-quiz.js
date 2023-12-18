import { useEffect, useState } from 'react'
import { getQuiz } from '../api/course'

export default function useQuiz(id) {
  const [quizData, setQuizData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [refresh, setRefresh] = useState(false)

  const refreshData = () => {
    setRefresh(state => !state)
  }

  useEffect(() => {
    const getQuizData = async () => {
      setLoading(true)

      const res = await getQuiz(id)

      if (res.status !== 200 || !res.data) {
        if (res.status === 404) {
          setErrorMsg('Not Found!')
        }
        setErrorMsg(res.request.statusText || res.message)
      } else {
        setQuizData(res.data)
      }

      setLoading(false)
    }

    getQuizData()
  }, [id, refresh])

  return { quizData, loading, errorMsg, refreshData }
}
