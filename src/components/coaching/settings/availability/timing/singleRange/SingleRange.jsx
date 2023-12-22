import OptionsInput from '../../../OptionsInput'
import { settingsReducerKey } from '../../../../../../hooks/use-coach-settings-reducer'
import TimeRange from './TimeRange'
import DeleteRange from './DeleteRange'

function SingleRange({
  startTime,
  endTime,
  dispatchSettingsData = () => {},
  bookingWindowData,
  id,
}) {
  const handleBookValue = value => {
    dispatchSettingsData({
      type: settingsReducerKey.UPDATE_BOOK_VALUE,
      payload: { id, newValue: { value, unit: bookingWindowData.unit } },
    })
  }

  const handleBookUnit = unit => {
    dispatchSettingsData({
      type: settingsReducerKey.UPDATE_BOOK_UNIT,
      payload: {
        id,
        newValue: { value: bookingWindowData.value, unit },
      },
    })
  }

  return (
    <div className="border-[1.5px] border-[#ddd] rounded-[10px] p-4 relative">
      <TimeRange
        id={id}
        dispatchSettingsData={dispatchSettingsData}
        settingsReducerKey={settingsReducerKey}
        startTime={startTime}
        endTime={endTime}
      />

      <OptionsInput
        sortData={bookingWindowOptions}
        title="Booking time window"
        subTitle="Set your booking window to up to 3 months in the future."
        optionValue={bookingWindowData.value}
        optionUnit={bookingWindowData.unit}
        onValueChange={handleBookValue}
        onUnitChange={handleBookUnit}
      />

      <DeleteRange
        id={id}
        dispatchSettingsData={dispatchSettingsData}
        settingsReducerKey={settingsReducerKey}
      />
    </div>
  )
}

export default SingleRange

const bookingWindowOptions = [
  { value: 'DAY', label: 'days' },
  { value: 'WEEK', label: 'weeks' },
  { value: 'MONTH', label: 'months' },
]
