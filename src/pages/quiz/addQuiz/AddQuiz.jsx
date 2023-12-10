import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import useQuestionsReducer from '../../../hooks/use-questions-reducer'
import HandleErrorLoad from '../../../components/handleErrorLoad'
import Question from '../../../components/quiz/questions/Question'
import MainButton from '../../../components/mainButton/MainButton'
import { PlusCircle } from '@phosphor-icons/react'

const errorTypes = {
  question: 'question',
  choices: 'choices',
}

function AddQuiz() {
  const [errorReopen, setErrorOpen] = useState(false)
  const { quizData, loading, errorMsg, refreshData } = useOutletContext()
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
    setExpanded(prevState => (panel !== prevState ? panel : null))
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

  const handleAddQuestion = () => {
    dispatchQuestions({ type: questionsKeys.ADD })
  }

  return (
    <HandleErrorLoad
      errorMsg={errorMsg}
      loading={loading}
      errorReopen={errorReopen}>
      <Typography variant="h4" textAlign="start" marginTop={5} gutterBottom>
        Questions
      </Typography>

      {questions.length !== 0 &&
        questions.map((question, index) => (
          <Question
            key={`Q${question?.id || index}`}
            index={index}
            question={question}
            dispatchQuestions={dispatchQuestions}
            titlePrefix={
              index + 1 !== questions.length ? `${index + 1}.` : 'New'
            }
            expanded={expanded}
            panel={index + 1 !== questions.length ? `Q${index}` : 'NEW'}
            toggleExpand={() =>
              handleQuestionExpand(
                index + 1 !== questions.length ? `Q${index}` : 'NEW',
              )
            }
          />
        ))}

      <div className="w-full flex justify-center items-center gap-5 mt-9">
        <Button
          variant="outlined"
          className="!px-8 !py-3 !normal-case !text-lg"
          startIcon={<PlusCircle />}
          onClick={handleAddQuestion}>
          Add Question
        </Button>
        <MainButton text="Save" className="text-lg" handleClick={handleSave} />
      </div>
    </HandleErrorLoad>
  )
}

export default AddQuiz
