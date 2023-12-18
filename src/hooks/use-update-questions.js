import { useState } from 'react'
import { updateQuestions as updateQuizQuestions } from '../api/course'

export default function useUpdateQuestion(
  quizId,
  questions,
  setQuestionsError,
) {
  const [loading, setLoading] = useState(false)

  const updateQuestions = async () => {
    setLoading(true)

    const res = await updateQuizQuestions(quizId, questions)

    if (res.status !== 200 || res.status !== 201)
      setQuestionsError('Some thing went wrong. Please, try again later')

    setLoading(false)
  }

  return { updateQuestions, loading }
}
