import { FormLabel } from '@mui/material'
import SortSelect from '../../../SortSelect'
import { useState } from 'react'
import TextField from '../../../customFields/TextField'
import useProgramReducer from '../../../../hooks/use-program-reducer'

/* eslint-disable react/prop-types */
function ProgramTimeLocationForm({
  scheduleTypeValue,
  scheduleURLValue,
  durationValue,
  locationValue,
  dispatchFormData = () => {},
}) {
  const [scheduleSortKey, setScheduleSortKey] = useState(scheduleTypeValue)
  const [durationSortKey, setDurationSortKey] = useState(durationValue)
  const { formReducerKeys } = useProgramReducer()

  const handleScheduleTypeChange = value => {
    setScheduleSortKey(value)
    dispatchFormData({
      type: formReducerKeys.SET_SCHEDULE_TYPE,
      payload: value,
    })
  }

  const handleLocationChange = value => {
    dispatchFormData({
      type: formReducerKeys.SET_LOCATION,
      payload: value,
    })
  }

  const handleDurationChange = value => {
    setDurationSortKey(value)
    dispatchFormData({
      type: formReducerKeys.SET_DURATION,
      payload: value,
    })
  }

  const handleScheduleURLChange = value => {
    dispatchFormData({
      type: formReducerKeys.SET_SCHEDULE_URL,
      payload: value,
    })
  }

  return (
    <>
      <div className="flex flex-col gap-[7px] items-start w-full">
        <FormLabel className="!text-sky-950 !font-[400] !text-md">
          Scheduling preference
        </FormLabel>
        <SortSelect
          className="!w-full"
          sx={{
            '& .MuiSelect-select ': {
              paddingTop: '0.6rem',
              paddingBottom: '0.6rem',
            },
          }}
          options={scheduleOptions}
          sortKey={scheduleSortKey}
          onSelect={e => handleScheduleTypeChange(e.target.value)}
          selectClasses="!rounded-xl !text-left"
          hideLabel={true}
        />
      </div>

      {scheduleSortKey === 'WEBSITE' ? (
        <>
          <div className="flex flex-col gap-[7px] items-start w-full">
            <FormLabel className="!text-sky-950 !font-[400] !text-md">
              Location
            </FormLabel>
            <TextField
              placeholder="Enter a location, or a scheduling url"
              value={locationValue}
              handleChange={e => handleLocationChange(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-[7px] items-start w-full">
            <FormLabel className="!text-sky-950 !font-[400] !text-md">
              Session duration
            </FormLabel>
            <SortSelect
              className="!w-full"
              sx={{
                '& .MuiSelect-select ': {
                  paddingTop: '0.6rem',
                  paddingBottom: '0.6rem',
                },
              }}
              options={durationOptions}
              sortKey={durationSortKey}
              onSelect={e => handleDurationChange(e.target.value)}
              selectClasses="!rounded-xl !text-left"
              hideLabel={true}
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-[7px] items-start w-full">
          <FormLabel className="!text-sky-950 !font-[400] !text-md">
            Scheduling url
          </FormLabel>
          <TextField
            placeholder="Custom link"
            value={scheduleURLValue}
            handleChange={e => handleScheduleURLChange(e.target.value)}
          />
          <p className="text-neutral-500">
            You can use a link from Calendly, Acuity, Google Calendar, etc.
          </p>
        </div>
      )}
    </>
  )
}

export default ProgramTimeLocationForm

const scheduleOptions = [
  { value: 'WEBSITE', label: 'Website book' },
  // { value: 'LINK', label: 'Custom link' },
]

const durationOptions = [
  { value: 15, label: '15 minutes' },
  { value: 30, label: '30 minutes' },
  { value: 45, label: '45 minutes' },
  { value: 60, label: '60 minutes' },
  { value: 75, label: '75 minutes' },
  { value: 90, label: '90 minutes' },
]
