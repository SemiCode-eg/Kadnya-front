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
          initialAvailability(action.payload.day, action.payload.id),
        ],
      }
    case settingsReducerKey.DELETE_AVAILABILITY:
      return {
        ...state,
        availability: availabilityAfterDelete(
          state.availability,
          action.payload,
        ),
      }
    case settingsReducerKey.SET_START_TIME:
      return {
        ...state,
        availability: updateState(state.availability, action.payload.id, {
          startTime: action.payload.value,
        }),
      }
    case settingsReducerKey.SET_END_TIME:
      return {
        ...state,
        availability: updateState(state.availability, action.payload.id, {
          endTime: action.payload.value,
        }),
      }
    case settingsReducerKey.SET_BOOK_VALUE:
      return {
        ...state,
        availability: updateState(state.availability, action.payload.id, {
          bookingWindow: action.payload.newValue,
        }),
      }
    case settingsReducerKey.SET_BOOK_UNIT:
      return {
        ...state,
        availability: updateState(state.availability, action.payload.id, {
          bookingWindow: action.payload.newValue,
        }),
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

const initialAvailability = (day, id) => {
  return {
    id,
    day,
    startTime: defaultStartTime,
    endTime: defaultEndTime,
    bookingWindow: { value: 4, unit: 'WEEK' },
  }
}

const availabilityAfterDelete = (availability, targetId) => {
  return availability.filter(option => option.id !== targetId)
}

const updateState = (availability, newValueId, newValue) => {
  return availability.map(option =>
    option.id === newValueId ? { ...option, ...newValue } : option,
  )
}
