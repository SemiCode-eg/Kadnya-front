import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import SingleRange from './SingleRange'
import MainButton from '../../../../mainButton/MainButton'
import { Plus } from '@phosphor-icons/react'
import { settingsReducerKey } from '../../../../../hooks/use-coach-settings-reducer'

function AvailabilityTiming({ data = [], dispatchSettingsData, activeDay }) {
  const handleAddAvailability = () => {
    dispatchSettingsData({
      type: settingsReducerKey.ADD_AVAILABILITY,
      payload: activeDay,
    })
  }

  return (
    <div className="py-4 pr-2 h-full flex-1 flex flex-col gap-5 justify-between">
      {data.length === 0 ? (
        <p className="text-md text-center mt-5">Add your availability here.</p>
      ) : (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="flex flex-col gap-5 overflow-y-auto">
            {data.map((time, index) => (
              <SingleRange
                key={index}
                startTime={time.timing.start}
                endTime={time.timing.end}
                bookingWindowData={time.timing.bookingWindow}
                dispatchSettingsData={dispatchSettingsData}
                index={index}
              />
            ))}
          </div>
        </LocalizationProvider>
      )}

      <div className="flex flex-col gap-2">
        <div>
          <MainButton
            text="Add availability"
            icon={<Plus size={20} />}
            className="text-teal-500 !px-3.5 text-sm font-[500] border-[1px] border-teal-500 duration-150 hover:text-white hover:bg-teal-500"
            handleClick={handleAddAvailability}
            isPrimary={false}
          />
        </div>
        <p className="text-xs text-neutral-400">
          All times are being displayed in Riyadh.
        </p>
      </div>
    </div>
  )
}

export default AvailabilityTiming
