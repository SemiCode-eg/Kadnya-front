import AvailabilityForm from './AvailabilityForm'
import AvailabilityTitle from './AvailabilityTitle'

function Availability({ data, dispatchSettingsData = () => {} }) {
  return (
    <div className="border-[1.5px] border-[#ddd] rounded-[10px] p-6">
      <AvailabilityTitle />
      <AvailabilityForm
        data={data}
        dispatchSettingsData={dispatchSettingsData}
      />
    </div>
  )
}

export default Availability
