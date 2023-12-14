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
    console.log(res)

    if (res.error) setQuestionsError(res.error.message)

    setLoading(false)
  }

  return { updateQuestions, loading }
}
