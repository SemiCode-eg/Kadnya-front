import { useState } from 'react'
import CustomTimeField from '../../../../../customTimeField/CustomTimeField'

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
    // console.log(value['$H'])
    dispatchSettingsData({
      type: settingsReducerKey.UPDATE_END_TIME,
      payload: { id, value: modifiedTime(value) },
    })
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
