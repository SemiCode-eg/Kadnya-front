import { useReducer } from 'react'

export default function useProgramReducer() {
  const [programData, dispatchFormData] = useReducer(
    createProgramReducer,
    ProgramFormInitialState,
  )

  return { formReducerKeys, programData, dispatchFormData }
}

const formReducerKeys = {
  SET_SESSION_TYPE: 'SET_SESSION_TYPE',
  SET_TITLE: 'TITLE',
  SET_DESCRIPTION: 'DESCRIPTION',
  SET_COACH_NAME: 'SET_COACH_NAME',
  SET_COACH_EMAIL: 'SET_COACH_EMAIL',
  SET_SESSIONS_COUNT: 'SET_SESSIONS_COUNT',
  SET_SCHEDULE_TYPE: 'SET_SCHEDULE_TYPE',
  SET_SCHEDULE_URL: 'SET_SCHEDULE_URL',
  SET_LOCATION: 'LOCATION',
  SET_DURATION: 'DURATION',
  SET_IMAGE: 'IMAGE',
  SET_PRICE: 'PRICE',
  SET_PRICING_TYPE: 'SET_PRICING_TYPE',
  SET_ERROR: 'ERROR',
  RESET: 'RESET',
}

const createProgramReducer = (state, action) => {
  switch (action.type) {
    case formReducerKeys.SET_SESSION_TYPE:
      return {
        ...state,
        sessionType: action.payload,
      }
    case formReducerKeys.SET_TITLE:
      return {
        ...state,
        title: action.payload,
      }
    case formReducerKeys.SET_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      }
    case formReducerKeys.SET_COACH_NAME:
      return {
        ...state,
        coachName: action.payload,
      }
    case formReducerKeys.SET_COACH_EMAIL:
      return {
        ...state,
        coachEmail: action.payload,
      }
    case formReducerKeys.SET_SESSIONS_COUNT:
      return {
        ...state,
        sessionsCount: action.payload,
      }
    case formReducerKeys.SET_SCHEDULE_TYPE:
      return {
        ...state,
        scheduleType: action.payload,
      }
    case formReducerKeys.SET_SCHEDULE_URL:
      return {
        ...state,
        scheduleURL: action.payload,
      }
    case formReducerKeys.SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      }
    case formReducerKeys.SET_DURATION:
      return {
        ...state,
        duration: action.payload,
      }
    case formReducerKeys.SET_IMAGE:
      return {
        ...state,
        image: action.payload,
      }
    case formReducerKeys.SET_PRICE:
      return {
        ...state,
        price: action.payload,
      }
    case formReducerKeys.SET_PRICING_TYPE:
      return {
        ...state,
        pricingType: action.payload,
      }
    case formReducerKeys.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case formReducerKeys.RESET:
      return ProgramFormInitialState
    default:
      return state
  }
}

const ProgramFormInitialState = {
  sessionType: 'SINGLE',
  title: '',
  description: '',
  coachName: '',
  coachEmail: '',
  sessionsCount: 1,
  scheduleType: 'WEBSITE',
  scheduleURL: '',
  location: '',
  duration: 15,
  image: null,
  price: 0,
  pricingType: 'FREE',
  error: '',
}
