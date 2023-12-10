import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { prepareFetchedQuestion, validateQuestion } from '../../../utils/quiz'
import { Typography } from '@mui/material'
import useQuestionsReducer from '../../../hooks/use-questions-reducer'
import HandleErrorLoad from '../../../components/handleErrorLoad'
import Questions from '../../../components/quiz/questions'
import SaveAddButtonsGroup from '../../../components/quiz/questions/SaveAddButtonsGroup'

export default function AddQuiz() {
  const [errorReopen, setErrorOpen] = useState(false)
  const { quizData, loading, errorMsg, refreshData } = useOutletContext()
  const [expanded, setExpanded] = useState('NEW')
  const { questionsKeys, questions, dispatchQuestions } = useQuestionsReducer()

  useEffect(() => {
    if (!quizData?.questions?.length) return

    const preparedQuestions = prepareFetchedQuestion(quizData.questions)

    dispatchQuestions({ type: questionsKeys.SET, payload: preparedQuestions })
  }, [quizData, dispatchQuestions, questionsKeys.SET])

  const resetQuiz = () => {
    refreshData()
    setExpanded('NEW')
  }

  const handleAddQuestion = () => {
    dispatchQuestions({ type: questionsKeys.ADD })
  }

  const handleSave = () => {
    const isValid = validateQuestion(questions, setErrorOpen, dispatchQuestions)
    if (!isValid) return

    // TODO handle send question data to API

    resetQuiz()
  }

  return (
    <HandleErrorLoad
      errorMsg={errorMsg}
      loading={loading}
      errorReopen={errorReopen}>
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
