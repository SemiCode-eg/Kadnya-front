import { useState } from 'react'
import { addQuestion } from '../api/course'

export default function useAddQuestion(quizId, data) {
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const addNewQuestion = async () => {
    setLoading(true)

    const res = await addQuestion(quizId, data)

    setLoading(false)
  }

  return { addNewQuestion, loading, errorMsg }
}
