import { useReducer } from 'react'

export default function useQuestionReducer() {
  const [newQuestion, dispatchNewQuestion] = useReducer(
    newQuestionReducer,
    initialQuestion,
  )

  return { newQuestionReducerKeys, newQuestion, dispatchNewQuestion }
}

const initialQuestion = {
  question: '',
  questionType: 'MCQ',
  isGraded: false,
  choices: [''],
  trueAnswer: 1,
  error: '',
}

export const newQuestionReducerKeys = {
  SET_QUESTION: 'SET_QUESTION',
  SET_QUESTION_TYPE: 'SET_QUESTION_TYPE',
  TOGGLE_IS_GRADED: 'TOGGLE_IS_GRADED',
  ADD_CHOICE: 'ADD_CHOICE',
  EDIT_CHOICE: 'EDIT_CHOICE',
  SET_TRUE_ANSWER: 'SET_TRUE_ANSWER',
  INIT: 'INIT',
  SET_ERROR: 'SET_ERROR',
}

const newQuestionReducer = (state, action) => {
  switch (action.type) {
    case newQuestionReducerKeys.SET_QUESTION:
      return { ...state, question: action.payload }

    case newQuestionReducerKeys.SET_QUESTION_TYPE:
      return { ...state, questionType: action.payload }

    case newQuestionReducerKeys.TOGGLE_IS_GRADED:
      return { ...state, isGraded: !state.isGraded }

    case newQuestionReducerKeys.ADD_CHOICE:
      return {
        ...state,
        choices: [...state.choices, ''],
      }

    case newQuestionReducerKeys.EDIT_CHOICE:
      return {
        ...state,
        choices: state.choices.map((choice, index) =>
          index === action.payload.index ? action.payload.choice : choice,
        ),
      }

    case newQuestionReducerKeys.SET_TRUE_ANSWER:
      return { ...state, trueAnswer: action.payload }

    case newQuestionReducerKeys.SET_ERROR:
      return { ...state, error: action.payload }

    case newQuestionReducerKeys.INIT:
      return initialQuestion

    default:
      return state
  }
}
