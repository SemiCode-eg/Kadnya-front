import dayjs from 'dayjs'
import { useReducer } from 'react'

export default function useCoachSettingReducer() {
  const [settingsData, dispatchSettingsData] = useReducer(
    settingsReducer,
    settingsInitialState,
  )

  return { settingsReducerKey, settingsData, dispatchSettingsData }
}

const defaultStartTime = dayjs().set('hour', 9).set('minute', 0)
const defaultEndTime = dayjs().set('hour', 17).set('minute', 0)

const settingsInitialState = {
  noticePeriod: { value: 15, unit: 'MIN' },
  availability: [],
  error: '',
}

const settingsReducer = (state, action) => {
  switch (action.type) {
    case settingsReducerKey.ADD_AVAILABILITY:
      return {
        ...state,
        availability: [
          ...state.availability,
          initialAvailability(action.payload),
        ],
      }
    case settingsReducerKey.SET_NOTICE_PERIOD_VALUE:
      return {
        ...state,
        noticePeriod: { ...state.noticePeriod, value: action.payload },
      }
    case settingsReducerKey.SET_NOTICE_PERIOD_UNIT:
      return {
        ...state,
        noticePeriod: { ...state.noticePeriod, unit: action.payload },
      }
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

export const settingsReducerKey = {
  ADD_AVAILABILITY: 'ADD_AVAILABILITY',
  DELETE_AVAILABILITY: 'DELETE_AVAILABILITY',
  SET_START_TIME: 'SET_START_TIME',
  SET_END_TIME: 'SET_END_TIME',
  SET_BOOK_VALUE: 'SET_BOOK_VALUE',
  SET_BOOK_UNIT: 'SET_BOOK_UNIT',
  SET_NOTICE_PERIOD_VALUE: 'SET_NOTICE_PERIOD_VALUE',
  SET_NOTICE_PERIOD_UNIT: 'SET_NOTICE_PERIOD_UNIT',
  SET_ERROR: 'ERROR',
}

const initialAvailability = day => {
  return {
    day: day,
    timing: {
      start: defaultStartTime,
      end: defaultEndTime,
      bookingWindow: { value: 4, unit: 'WEEK' },
    },
  }
}
