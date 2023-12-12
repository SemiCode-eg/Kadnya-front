import { questionsKeys } from '../../hooks/use-questions-reducer'
import { QUESTION_ERROR_TYPES } from './questionErrorTypes'

export function handleQuestionError(
  errorType,
  questionErrorMessage,
  dispatchQuestions,
  setErrorOpen,
) {
  setErrorOpen(prev => !prev)

  switch (errorType) {
    case QUESTION_ERROR_TYPES.QUESTION_TEXT:
      dispatchQuestions({
        type: questionsKeys.SET_ERROR,
        payload: questionErrorMessage,
      })
      break

    case QUESTION_ERROR_TYPES.CHOICES_TEXT:
      dispatchQuestions({
        type: questionsKeys.SET_ERROR,
        payload: questionErrorMessage,
      })
      break

    default:
      throw new Error('Unknown question error type')
  }
}
