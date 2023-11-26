import { useEffect, useState } from 'react'
import { addQuestion } from '../utils/ApiCalls'

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
