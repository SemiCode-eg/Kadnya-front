import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Typography } from '@mui/material'
import useQuiz from '../../../hooks/use-quiz'
import useQuestionsReducer from '../../../hooks/use-questions-reducer'
import HandleErrorLoad from '../../../components/handleErrorLoad'
import Question from '../../../components/quiz/questions/Question'
import MainButton from '../../../components/mainButton/MainButton'

const errorTypes = {
  question: 'question',
  choices: 'choices',
}

function AddQuiz() {
  const [errorReopen, setErrorOpen] = useState(false)
  const [
    // isDraft,
    // submitLoading,
    // setSubmitLoading,
    // formRef,
    quizData,
    loading,
    errorMsg,
    refreshData,
  ] = useOutletContext()
  const [expanded, setExpanded] = useState('NEW')
  const { questionsKeys, questions, dispatchQuestions } = useQuestionsReducer()

  useEffect(() => {
    if (!quizData?.questions?.length) return

    const preparedQuestions = quizData.questions.map(question => ({
      id: question.id,
      questionText: question.question_text,
      questionType: 'MCQ',
      isGraded: question.is_graded,
      image: question.question_image,
      choices: question.choices.map(choice => ({
        text: choice.choice_text,
        image: choice.choice_image,
        isTrue: choice.is_true,
      })),
      error: '',
    }))

    dispatchQuestions({ type: questionsKeys.SET, payload: preparedQuestions })
  }, [dispatchQuestions, questionsKeys.SET, quizData])

  const handleQuestionExpand = panel => {
    setExpanded(panel)
  }

  const handleQuestionError = (errorType, questionErrorMessage) => {
    if (errorType === errorTypes.question)
      dispatchQuestions({
        type: questionsKeys.SET_ERROR,
        payload: questionErrorMessage,
      })
    else if (errorType === errorTypes.choices)
      dispatchQuestions({
        type: questionsKeys.SET_ERROR,
        payload: questionErrorMessage,
      })

    return false
  }

  const validateQuestion = questionData => {
    setErrorOpen(prev => !prev)

    if (questionData.question.trim() === '')
      return handleQuestionError(
        errorTypes.question,
        'Question field is required',
      )
    if (!questionData.choices.find(choice => choice === ''))
      return handleQuestionError(errorTypes.choices, 'Fill the choices')
  }

  const resetQuiz = () => {
    dispatchQuestions({ type: questionsKeys.INIT })
    setExpanded('NEW')
    refreshData()
  }

  const handleSave = () => {
    const isValid = validateQuestion(questions)
    if (!isValid) return

    // TODO handle send question data to API

    resetQuiz()
  }
  console.log(questions)

  return (
    <HandleErrorLoad
      errorMsg={errorMsg}
      loading={loading}
      errorReopen={errorReopen}>
      <Typography variant="h4" textAlign="start" gutterBottom>
        Questions
      </Typography>

      {questions.length !== 0 &&
        questions.map((question, index) => (
          <Question
            key={question?.id || `Q${index}`}
            index={index}
            question={question}
            titlePrefix={question?.id ? `${index + 1}.` : 'New'}
            expanded={expanded}
            panel={question?.id ? `Q${index}` : 'NEW'}
            toggleExpand={() =>
              handleQuestionExpand(question?.id ? `Q${index}` : 'NEW')
            }
          />
        ))}

      <div className="w-full flex justify-center items-center">
        <MainButton text="Save" handleClick={handleSave} />
      </div>
    </HandleErrorLoad>
  )
}

export default AddQuiz
