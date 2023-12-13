import AvailabilityForm from './AvailabilityForm'

function Availability({ data, dispatchSettingsData = () => {} }) {
  return (
    <div className="border-[1.5px] border-[#ddd] rounded-[10px] p-6">
      <div className="w-full mx-auto mb-8">
        <p className="text-sky-950 font-[600] text-md tracking-[-0.25px]">
          Availability
        </p>
        <p className="text-neutral-500 text-sm">
          Select the days and times that you are available to book sessions.
        </p>
      </div>

      <AvailabilityForm
        data={data}
        dispatchSettingsData={dispatchSettingsData}
      />
    </div>
  )
}

export default Availability
