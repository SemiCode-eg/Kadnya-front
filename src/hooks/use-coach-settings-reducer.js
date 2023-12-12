import { useReducer } from 'react'

export default function useProgramReducer() {
  const [settingsData, dispatchSettingsData] = useReducer(
    settingsReducer,
    settingsInitialState,
  )

  return { settingsReducerKey, settingsData, dispatchSettingsData }
}

const initialAvailability = [
  {
    day: 'Sun',
    timing: [
      {
        start: { hour: '9', min: '0' },
        end: { hour: '5', min: '0' },
        bookingWindow: { value: 4, unit: 'WEEK' },
      },
    ],
  },
]

const settingsInitialState = {
  noticePeriod: { value: 15, unit: 'MIN' },
  availability: initialAvailability,
  error: '',
}

const settingsReducer = (state, action) => {
  switch (action.type) {
    case settingsReducerKey.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case settingsReducerKey.RESET:
      return settingsInitialState
    default:
      return state
  }
}

const settingsReducerKey = {
  SET_NOTICE_PERIOD_VALUE: 'SET_NOTICE_PERIOD_VALUE',
  SET_NOTICE_PERIOD_UNIT: 'SET_NOTICE_PERIOD_UNIT',
  ADD_AVAILABILITY: 'ADD_AVAILABILITY',
  SET_ERROR: 'ERROR',
}
