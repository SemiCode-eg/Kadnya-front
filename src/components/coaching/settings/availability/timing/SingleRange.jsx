import { MobileTimePicker } from '@mui/x-date-pickers'
import OptionsInput from '../../optionsInput'
import { Trash } from '@phosphor-icons/react'
import { settingsReducerKey } from '../../../../../hooks/use-coach-settings-reducer'

function SingleRange({
  startTime,
  endTime,
  dispatchSettingsData = () => {},
  bookingWindowData,
  id,
}) {
  const handleStartTimeChange = value => {
    dispatchSettingsData({
      type: settingsReducerKey.SET_START_TIME,
      payload: { id, value },
    })
  }

  const handleEndTimeChange = value => {
    dispatchSettingsData({
      type: settingsReducerKey.SET_END_TIME,
      payload: { id, value },
    })
  }

  const handleBookValue = value => {
    dispatchSettingsData({
      type: settingsReducerKey.SET_BOOK_VALUE,
      payload: { id, newValue: { value, unit: bookingWindowData.unit } },
    })
  }

  const handleBookUnit = unit => {
    dispatchSettingsData({
      type: settingsReducerKey.SET_BOOK_UNIT,
      payload: {
        id,
        newValue: { value: bookingWindowData.value, unit },
      },
    })
  }

  const handleDelete = id => {
    dispatchSettingsData({
      type: settingsReducerKey.DELETE_AVAILABILITY,
      payload: id,
    })
  }

  return (
    <div className="border-[1.5px] border-[#ddd] rounded-[10px] p-4 relative">
      <div className="flex gap-4 flex-col sm:flex-row w-full mb-2">
        <MobileTimePicker
          label="Start time"
          value={startTime}
          onChange={newValue => handleStartTimeChange(newValue)}
          className="sm:flex-[0.5]"
          sx={timePickerSx}
        />

        <MobileTimePicker
          label="End time"
          value={endTime}
          onChange={newValue => handleEndTimeChange(newValue)}
          className="sm:flex-[0.5]"
          sx={timePickerSx}
        />
      </div>

      <OptionsInput
        sortData={bookingWindowOptions}
        title="Booking time window"
        subTitle="Set your booking window to up to 3 months in the future."
        optionValue={bookingWindowData.value}
        optionUnit={bookingWindowData.unit}
        onValueChange={handleBookValue}
        onUnitChange={handleBookUnit}
      />

      <button
        type="button"
        className="absolute right-2 bottom-2 duration-150 ease-out hover:bg-red-500/5 p-1 rounded-md"
        title="Delete"
        onClick={() => handleDelete(id)}>
        <Trash weight="fill" className="text-red-500" />
      </button>
    </div>
  )
}

export default SingleRange

const bookingWindowOptions = [
  { value: 'DAY', label: 'days' },
  { value: 'WEEK', label: 'weeks' },
  { value: 'MONTH', label: 'months' },
]

const timePickerSx = {
  '& .MuiInputBase-input': {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    borderRadius: '100%',
    fontSize: '0.8rem',
  },
  '& .MuiFormLabel-root': {
    fontSize: '0.8rem',
  },
}
