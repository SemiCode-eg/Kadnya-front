import { useState } from 'react'
import DaySelect from './DaySelect'
import AvailabilityTiming from './timing/AvailabilityTiming'

function AvailabilityForm({ data, dispatchSettingsData }) {
  const [activeDay, setActiveDay] = useState('Sun')
  const dayData = data.filter(option => option.day === activeDay)

  return (
    <div className="text-start border-[1.5px] border-[#ddd] rounded-[10px] flex gap-8 h-[55dvh]">
      <DaySelect activeDay={activeDay} setActiveDay={setActiveDay} />
      <AvailabilityTiming
        data={dayData}
        dispatchSettingsData={dispatchSettingsData}
        activeDay={activeDay}
      />
    </div>
  )
}

export default AvailabilityForm
