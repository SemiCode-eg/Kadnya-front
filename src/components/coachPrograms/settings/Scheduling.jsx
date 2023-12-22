import ProgramTimeLocationForm from '../../coaching/programs/createProgramForm/ProgramTimeLocationForm'

function Scheduling({
  programData: { scheduleType, scheduleURL, duration, location },
  dispatchFormData,
}) {
  return (
    <div className="border-[1.5px] border-[#ddd] rounded-[10px] p-6">
      <div className="flex flex-col gap-5">
        <div className="w-full mx-auto mb-5">
          <p className="text-sky-950 font-[600] text-lg tracking-[-0.25px]">
            Scheduling
          </p>
          <p className="text-neutral-500 text-sm">
            Choose how clients can schedule your sessions. You can schedule
            through Calendly, custom links, or manual bookings.
          </p>
        </div>

        <ProgramTimeLocationForm
          dispatchFormData={dispatchFormData}
          scheduleTypeValue={scheduleType || 'WEBSITE'}
          scheduleURLValue={scheduleURL}
          durationValue={duration}
          locationValue={location}
        />
      </div>
    </div>
  )
}

export default Scheduling
