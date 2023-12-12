import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import SingleRange from './SingleRange'
import { settingsReducerKey } from '../../../../../hooks/use-coach-settings-reducer'
import TimingFooter from './TimingFooter'

function AvailabilityTiming({ data = [], dispatchSettingsData, activeDay }) {
  const handleAddAvailability = () => {
    dispatchSettingsData({
      type: settingsReducerKey.ADD_AVAILABILITY,
      payload: {
        day: activeDay,
        id: Date.now().toString(36) + Math.floor(Math.random().toString(36)),
      },
    })
  }

  return (
    <div className="py-4 pr-2 h-full flex-1 flex flex-col gap-5 justify-between">
      {data.length === 0 ? (
        <p className="text-md text-center mt-5">
          You don&apos;t have availability here.
        </p>
      ) : (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="flex flex-col gap-5 overflow-y-auto">
            {data.map(option => (
              <SingleRange
                key={option.id}
                startTime={option.startTime}
                endTime={option.endTime}
                bookingWindowData={option.bookingWindow}
                dispatchSettingsData={dispatchSettingsData}
                id={option.id}
              />
            ))}
          </div>
        </LocalizationProvider>
      )}

      <TimingFooter handleAddAvailability={handleAddAvailability} />
    </div>
  )
}

export default AvailabilityTiming
