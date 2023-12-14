import { ERROR_MESSAGES } from './ERROR_MESSAGES'
import { validateChoiceNotEmpty } from './validateChoicesNotEmpty'

export function validateQuestion(question, setQuestionsError) {
  const { questionText, image, choices } = question

  if (questionText.trim() === '' && !image) {
    setQuestionsError(ERROR_MESSAGES.QUESTION_TEXT_OR_IMAGE_EMPTY)
    return false
  }

  if (!validateChoiceNotEmpty(choices, setQuestionsError)) return false

  if (!choices.find(choice => choice.isTrue)) {
    setQuestionsError(ERROR_MESSAGES.CHOICES_NO_TRUE_CHOICE)
    return false
  }

  return true
}
