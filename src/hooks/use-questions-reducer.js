import { useReducer } from 'react'

export default function useQuestionsReducer() {
  const [questions, dispatchQuestions] = useReducer(questionsReducer, [])

  return { questionsKeys, questions, dispatchQuestions }
}

const initialChoice = [{ text: '', image: null, isTrue: false }]

const initialQuestion = [
  {
    questionText: '',
    questionType: 'MCQ',
    isGraded: false,
    image: null,
    choices: initialChoice,
  },
]

export const questionsKeys = {
  SET_QUESTION_TEXT: 'SET_QUESTION_TEXT',
  SET_QUESTION_TYPE: 'SET_QUESTION_TYPE',
  TOGGLE_IS_GRADED: 'TOGGLE_IS_GRADED',
  SET_IMAGE: 'SET_IMAGE',
  DELETE_IMAGE: 'DELETE_IMAGE',
  ADD_CHOICE: 'ADD_CHOICE',
  EDIT_CHOICE_TEXT: 'EDIT_CHOICE_TEXT',
  EDIT_CHOICE_IMAGE: 'EDIT_CHOICE_IMAGE',
  EDIT_CHOICE_IS_TRUE: 'EDIT_CHOICE_IS_TRUE',
  DELETE_CHOICE: 'DELETE_CHOICE',
  SET_ERROR: 'SET_ERROR',
  INIT: 'INIT',
  SET: 'SET',
  ADD: 'ADD',
  DELETE: 'DELETE',
}

const updateState = (state, newValueIndex, newValue) => {
  return state.map((question, index) =>
    index === newValueIndex ? { ...question, ...newValue } : question,
  )
}

const questionsReducer = (state, action) => {
  const questionIndex = action.payload?.index
  const choiceIndex = action.payload?.choiceIndex
  const value = action.payload?.value

  switch (action.type) {
    case questionsKeys.SET_QUESTION_TEXT:
      return updateState(state, questionIndex, {
        questionText: value,
      })

    case questionsKeys.SET_QUESTION_TYPE:
      return updateState(state, questionIndex, {
        questionType: value,
        choices: initialChoice,
      })

    case questionsKeys.TOGGLE_IS_GRADED:
      return updateState(state, questionIndex, {
        isGraded: !state.at(questionIndex).isGraded,
      })

    case questionsKeys.SET_IMAGE:
      return updateState(state, questionIndex, {
        image: value,
      })

    case questionsKeys.DELETE_IMAGE:
      return updateState(state, questionIndex, {
        image: null,
      })

    case questionsKeys.ADD_CHOICE:
      return updateState(state, questionIndex, {
        choices: [...state.at(questionIndex).choices, ...initialChoice],
      })

    case questionsKeys.EDIT_CHOICE_TEXT:
      return updateState(state, questionIndex, {
        choices: state
          .at(questionIndex)
          .choices.map((choice, index) =>
            index === choiceIndex ? { ...choice, text: value } : choice,
          ),
      })

    case questionsKeys.EDIT_CHOICE_IMAGE:
      return updateState(state, questionIndex, {
        choices: state
          .at(questionIndex)
          .choices.map((choice, index) =>
            index === choiceIndex ? { ...choice, image: value } : choice,
          ),
      })

    case questionsKeys.EDIT_CHOICE_IS_TRUE:
      return updateState(state, questionIndex, {
        choices: state.at(questionIndex).choices.map((choice, index) => {
          const questionType = action.payload.questionType

          if (questionType === 'MCQ' && index === choiceIndex)
            return { ...choice, isTrue: !choice.isTrue }
          if (questionType === 'MCQ' && index !== choiceIndex) return choice

          if (questionType === 'TF' && index === choiceIndex)
            return { ...choice, isTrue: true }
          if (questionType === 'TF' && index !== choiceIndex)
            return { ...choice, isTrue: false }
        }),
      })

    case questionsKeys.DELETE_CHOICE:
      return updateState(state, questionIndex, {
        choices: state
          .at(questionIndex)
          .choices.filter((_, index) => index !== choiceIndex),
      })

    case questionsKeys.SET_ERROR:
      return updateState(state, questionIndex, {
        error: value,
      })

    case questionsKeys.INIT:
      return initialQuestion

    case questionsKeys.SET:
      return value

    case questionsKeys.ADD:
      return [...state, ...initialQuestion]

    case questionsKeys.DELETE:
      return state.filter((_, index) => index !== questionIndex)

    default:
      return state
  }
}
