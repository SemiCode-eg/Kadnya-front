import { useEffect, useState } from 'react'
import DaySelect from './DaySelect'
import AvailabilityTiming from './timing/AvailabilityTiming'

function AvailabilityForm({
  data,
  dispatchSettingsData,
  overlappedAvailability,
}) {
  const [activeDay, setActiveDay] = useState('Sun')
  const dayData = data.filter(option => option.day === activeDay)

  useEffect(() => {
    if (overlappedAvailability?.day) {
      setActiveDay(overlappedAvailability?.day)
    }
  }, [overlappedAvailability?.day])

  return (
    <div className="text-start border-[1.5px] border-[#ddd] rounded-[10px] flex sm:gap-7 gap-2 h-[60dvh]">
      <DaySelect activeDay={activeDay} setActiveDay={setActiveDay} />
      <AvailabilityTiming
        data={dayData}
        dispatchSettingsData={dispatchSettingsData}
        activeDay={activeDay}
        overlappedAvailability={overlappedAvailability}
      />
    </div>
  )
}

export default AvailabilityForm
