import AvailabilityForm from './AvailabilityForm'
import AvailabilityTitle from './AvailabilityTitle'

function Availability({
  data,
  dispatchSettingsData = () => {},
  overlappedAvailability,
}) {
  return (
    <div className="border-[1.5px] border-[#ddd] rounded-[10px] p-6">
      <AvailabilityTitle />
      <AvailabilityForm
        data={data}
        dispatchSettingsData={dispatchSettingsData}
        overlappedAvailability={overlappedAvailability}
      />
    </div>
  )
}

export default Availability
