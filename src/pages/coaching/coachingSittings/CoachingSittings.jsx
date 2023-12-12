import Availability from '../../../components/coaching/settings/availability/Availability'
import NoticePeriod from '../../../components/coaching/settings/noticePeriod/NoticePeriod'
import MainButton from '../../../components/mainButton/MainButton'
import useCoachSettingReducer from '../../../hooks/use-coach-settings-reducer'

function CoachingSittings() {
  const { settingsData, dispatchSettingsData } = useCoachSettingReducer()

  return (
    <form className="flex flex-col gap-5">
      <Availability
        data={settingsData.availability}
        dispatchSettingsData={dispatchSettingsData}
      />
      <NoticePeriod
        noticePeriodValue={settingsData.noticePeriod.value}
        noticePeriodUnit={settingsData.noticePeriod.unit}
        dispatchSettingsData={dispatchSettingsData}
      />
      <div>
        <MainButton
          text="Save"
          type="submit"
          handleClick={e => e.preventDefault()}
        />
      </div>
    </form>
  )
}

export default CoachingSittings
