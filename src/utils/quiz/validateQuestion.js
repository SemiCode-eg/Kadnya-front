import { handleQuestionError } from './handleQuestionError'
import { QUESTION_ERROR_TYPES } from './questionErrorTypes'

export function validateQuestion(
  questionData,
  setErrorOpen,
  dispatchQuestions,
) {
  if (questionData.question.trim() === '')
    return handleQuestionError(
      QUESTION_ERROR_TYPES.QUESTION_TEXT,
      'Question field is required',
      dispatchQuestions,
      setErrorOpen,
    )
  if (!questionData.choices.find(choice => choice === ''))
    return handleQuestionError(
      QUESTION_ERROR_TYPES.CHOICES_TEXT,
      'Fill the choices',
      dispatchQuestions,
      setErrorOpen,
    )
}
