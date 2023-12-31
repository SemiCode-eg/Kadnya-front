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
  availability: {
    Sun: [],
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
  },
  error: '',
}

const settingsReducer = (state, action) => {
  switch (action.type) {
    case settingsReducerKey.ADD_AVAILABILITY:
      return {
        ...state,
        availability: {
          ...state.availability,
          [action.payload.day]: [
            ...(state.availability[action.payload.day] || []),
            initialAvailability(action.payload.id),
          ],
        },
      }
    case settingsReducerKey.DELETE_AVAILABILITY:
      return {
        ...state,
        availability: {
          ...state.availability,
          [action.payload.day]: [
            ...availabilityAfterDelete(state.availability, action.payload),
          ],
        },
      }
    case settingsReducerKey.UPDATE_START_TIME:
      return {
        ...state,
        availability: {
          ...state.availability,
          [action.payload.day]: [
            ...updateState(state.availability, action.payload, {
              startTime: action.payload.value,
            }),
          ],
        },
      }
    case settingsReducerKey.UPDATE_END_TIME:
      return {
        ...state,
        availability: {
          ...state.availability,
          [action.payload.day]: [
            ...updateState(state.availability, action.payload, {
              endTime: action.payload.value,
            }),
          ],
        },
      }
    case settingsReducerKey.UPDATE_BOOK_VALUE:
      return {
        ...state,
        availability: {
          ...state.availability,
          [action.payload.day]: [
            ...updateState(state.availability, action.payload, {
              bookingWindow: action.payload.newValue,
            }),
          ],
        },
      }
    case settingsReducerKey.UPDATE_BOOK_UNIT:
      return {
        ...state,
        availability: {
          ...state.availability,
          [action.payload.day]: [
            ...updateState(state.availability, action.payload, {
              bookingWindow: action.payload.newValue,
            }),
          ],
        },
      }
    case settingsReducerKey.UPDATE_NOTICE_PERIOD_VALUE:
      return {
        ...state,
        noticePeriod: { ...state.noticePeriod, value: action.payload },
      }
    case settingsReducerKey.UPDATE_NOTICE_PERIOD_UNIT:
      return {
        ...state,
        noticePeriod: { ...state.noticePeriod, unit: action.payload },
      }
    case settingsReducerKey.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export const settingsReducerKey = {
  ADD_AVAILABILITY: 'ADD_AVAILABILITY',
  DELETE_AVAILABILITY: 'DELETE_AVAILABILITY',
  UPDATE_START_TIME: 'UPDATE_START_TIME',
  UPDATE_END_TIME: 'UPDATE_END_TIME',
  UPDATE_BOOK_VALUE: 'UPDATE_BOOK_VALUE',
  UPDATE_BOOK_UNIT: 'UPDATE_BOOK_UNIT',
  UPDATE_NOTICE_PERIOD_VALUE: 'UPDATE_NOTICE_PERIOD_VALUE',
  UPDATE_NOTICE_PERIOD_UNIT: 'UPDATE_NOTICE_PERIOD_UNIT',
  SET_ERROR: 'ERROR',
}

const initialAvailability = id => {
  return {
    id,
    startTime: defaultStartTime,
    endTime: defaultEndTime,
    bookingWindow: { value: 4, unit: 'WEEK' },
  }
}

const availabilityAfterDelete = (availability, target) => {
  return availability[target.day].filter(option => option.id !== target.id)
}

const updateState = (availability, newValueData, updatedValue) => {
  return availability[newValueData.day].map(option =>
    option.id === newValueData.id ? { ...option, ...updatedValue } : option,
  )
}
