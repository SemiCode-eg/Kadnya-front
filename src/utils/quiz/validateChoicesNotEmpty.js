import { ERROR_MESSAGES } from './ERROR_MESSAGES'

export function validateChoiceNotEmpty(choices, setQuestionsError) {
  if (choices.find(choice => choice.text === '')) {
    setQuestionsError(ERROR_MESSAGES.CHOICES_TEXT_EMPTY)
    return false
  }

  return true
}
