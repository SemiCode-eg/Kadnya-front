import { useState } from 'react'
import TextField from '../../customFields/TextField'
import SortSelect from '../../SortSelect'
import { FormLabel } from '@mui/material'
import { ClockCountdown } from '@phosphor-icons/react'

function SchedulingOptionsForm({
  optionsData: { noticePeriodValue = 15, noticePeriodType = 'MIN' },
  dispatchFormData = () => {},
}) {
  const [noticePeriodKey, setNoticePeriodKey] = useState(noticePeriodType)

  return (
    <div className="text-left">
      <FormLabel className="!text-sky-950 !font-[400] !text-md">
        Minimum notice scheduling{' '}
        <ClockCountdown size={18} className="inline" />
      </FormLabel>

      <div className="flex gap-4 mt-2 mb-1">
        <TextField
          placeholder="Minimum notice period"
          type="number"
          className="sm:flex-[0.25]"
          id="notice-period"
          value={noticePeriodValue}
        />
        <SortSelect
          className="sm:flex-[0.25]"
          options={noticePeriodOptions}
          sortKey={noticePeriodKey}
          onSelect={e => setNoticePeriodKey(e.target.value)}
          selectClasses="!rounded-xl !text-left"
          hideLabel={true}
        />
      </div>
      <p className="text-neutral-500 text-sm">
        Set how far you require clients to book a coaching session.
      </p>
    </div>
  )
}

export default SchedulingOptionsForm

const noticePeriodOptions = [
  { value: 'MIN', label: 'minutes' },
  { value: 'HOUR', label: 'hours' },
]
