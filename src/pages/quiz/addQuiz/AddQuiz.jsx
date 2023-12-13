import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { prepareFetchedQuestion, validateQuestion } from '../../../utils/quiz'
import { Typography } from '@mui/material'
import useQuestionsReducer from '../../../hooks/use-questions-reducer'
import HandleErrorLoad from '../../../components/handleErrorLoad'
import Questions from '../../../components/quiz/questions'
import SaveAddButtonsGroup from '../../../components/quiz/questions/SaveAddButtonsGroup'

export default function AddQuiz() {
  const { quizData, loading, errorMsg, refreshData } = useOutletContext()
  const { questionsKeys, questions, dispatchQuestions } = useQuestionsReducer()
  const [expanded, setExpanded] = useState(null)
  const [questionError, setQuestionError] = useState(errorMsg)

  useEffect(() => {
    setQuestionError(errorMsg)
  }, [errorMsg])

  useEffect(() => {
    if (!quizData?.questions?.length) return

    const preparedQuestions = prepareFetchedQuestion(quizData.questions)

    dispatchQuestions({
      type: questionsKeys.SET,
      payload: { value: preparedQuestions },
    })
  }, [quizData, dispatchQuestions, questionsKeys.SET])

  const resetQuiz = () => {
    refreshData()
    setExpanded(null)
  }

  const handleAddQuestion = () => {
    dispatchQuestions({ type: questionsKeys.ADD })
  }

  const handleSave = () => {
    const isQuestionsValid = validateQuestion(questions, dispatchQuestions)
    if (!isQuestionsValid) return

    // TODO handle send question data to API

    resetQuiz()
  }

  return (
    <HandleErrorLoad
      loading={loading}
      errorMsg={questionError}
      setErrorMsg={setQuestionError}>
      <Typography variant="h4" textAlign="start" marginTop={5} gutterBottom>
        Questions
      </Typography>

      <Questions
        questions={questions}
        dispatchQuestions={dispatchQuestions}
        expanded={expanded}
        setExpanded={setExpanded}
      />

      <SaveAddButtonsGroup
        onAddQuestion={handleAddQuestion}
        onSave={handleSave}
      />
    </HandleErrorLoad>
  )
}
