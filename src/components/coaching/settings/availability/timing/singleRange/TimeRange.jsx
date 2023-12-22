import { useState } from 'react'
import TimeField from '../../../../../timeField/TimeField'

const modifiedTime = time => {
  return time
    .set('minute', Math.round(time.minute() / 15) * 15)
    .set('second', 0)
    .set('millisecond', 0)
}

function TimeRange({
  id,
  dispatchSettingsData,
  settingsReducerKey,
  startTime,
  endTime,
}) {
  const [timeValue, setTimeValue] = useState(null)

  const handleStartTimeChange = value => {
    dispatchSettingsData({
      type: settingsReducerKey.UPDATE_START_TIME,
      payload: { id, value: modifiedTime(value) },
    })
  }

  const handleEndTimeChange = value => {
    dispatchSettingsData({
      type: settingsReducerKey.UPDATE_END_TIME,
      payload: { id, value: modifiedTime(value) },
    })
  }

  return (
    <div className="flex gap-4 flex-col sm:flex-row w-full mb-2">
      <TimeField
        label="Start time"
        value={startTime}
        onChange={newValue => setTimeValue(newValue)}
        onClose={() => handleStartTimeChange(timeValue)}
        className="sm:flex-[0.5]"
      />

      <TimeField
        label="End time"
        value={endTime}
        onChange={newValue => setTimeValue(newValue)}
        onClose={() => handleEndTimeChange(timeValue)}
        className="sm:flex-[0.5]"
      />
    </div>
  )
}

export default TimeRange
