import { handleQuestionError } from './handleQuestionError'
import { QUESTION_ERROR_TYPES } from './questionErrorTypes'

export function validateQuestion(question, setErrorOpen, dispatchQuestions) {
  if (question.questionText.trim() === '') {
    handleQuestionError(
      QUESTION_ERROR_TYPES.QUESTION_TEXT,
      'Question field is required',
      dispatchQuestions,
      setErrorOpen,
    )
    return false
  }

  if (!question.choices.find(choice => choice === '')) {
    handleQuestionError(
      QUESTION_ERROR_TYPES.CHOICES_TEXT,
      'Fill the choices',
      dispatchQuestions,
      setErrorOpen,
    )
    return false
  }

  return true
}
