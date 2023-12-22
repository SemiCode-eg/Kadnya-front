import { useState } from 'react'
import CustomTimeField from '../../../../../customTimeField/CustomTimeField'
import {
  isValidRange,
  roundTimeTo15Minutes,
} from '../../../../../../utils/coach'

function TimeRange({
  id,
  dispatchSettingsData,
  settingsReducerKey,
  startTime,
  endTime,
}) {
  const [timeValue, setTimeValue] = useState(null)

  const handleStartTimeChange = value => {
    if (isValidRange(roundTimeTo15Minutes(value), endTime)) {
      dispatchSettingsData({
        type: settingsReducerKey.UPDATE_START_TIME,
        payload: { id, value: roundTimeTo15Minutes(value) },
      })
    } else {
      dispatchSettingsData({
        type: settingsReducerKey.SET_ERROR,
        payload: 'End time should be after start time.',
      })
      dispatchSettingsData({
        type: settingsReducerKey.UPDATE_START_TIME,
        payload: { id, value: endTime.set('hour', endTime['$H'] - 1) },
      })
    }
  }

  const handleEndTimeChange = value => {
    if (isValidRange(startTime, roundTimeTo15Minutes(value))) {
      dispatchSettingsData({
        type: settingsReducerKey.UPDATE_END_TIME,
        payload: { id, value: roundTimeTo15Minutes(value) },
      })
    } else {
      dispatchSettingsData({
        type: settingsReducerKey.SET_ERROR,
        payload: 'End time should be after start time.',
      })
      dispatchSettingsData({
        type: settingsReducerKey.UPDATE_END_TIME,
        payload: { id, value: startTime.set('hour', startTime['$H'] + 1) },
      })
    }
  }

  return (
    <div className="flex gap-4 flex-col sm:flex-row w-full mb-2">
      <CustomTimeField
        label="Start time"
        value={startTime}
        onChange={newValue => setTimeValue(newValue)}
        onBlur={() => handleStartTimeChange(timeValue)}
        className="sm:flex-[0.5]"
      />

      <CustomTimeField
        label="End time"
        value={endTime}
        onChange={newValue => setTimeValue(newValue)}
        onBlur={() => handleEndTimeChange(timeValue)}
        className="sm:flex-[0.5]"
      />
    </div>
  )
}

export default TimeRange
