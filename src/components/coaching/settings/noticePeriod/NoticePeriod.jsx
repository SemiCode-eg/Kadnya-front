import { settingsReducerKey } from '../../../../hooks/use-coach-settings-reducer'
import OptionsInput from '../OptionsInput'
import NoticePeriodTitle from './NoticePeriodTitle'

function SchedulingOptions({
  noticePeriodValue,
  noticePeriodUnit,
  dispatchSettingsData = () => {},
}) {
  const handlePeriodChange = value => {
    dispatchSettingsData({
      type: settingsReducerKey.UPDATE_NOTICE_PERIOD_VALUE,
      payload: value,
    })
  }

  const handleUnitChange = value => {
    dispatchSettingsData({
      type: settingsReducerKey.UPDATE_NOTICE_PERIOD_UNIT,
      payload: value,
    })
  }

  return (
    <div className="border-[1.5px] border-[#ddd] rounded-[10px] p-6">
      <NoticePeriodTitle />
      <OptionsInput
        sortData={noticePeriodOptions}
        optionValue={noticePeriodValue}
        optionUnit={noticePeriodUnit}
        onValueChange={handlePeriodChange}
        onUnitChange={handleUnitChange}
        title="Minimum notice scheduling"
        subTitle="Set how far you require clients to book a coaching session."
      />
    </div>
  )
}

export default SchedulingOptions

const noticePeriodOptions = [
  { value: 'MIN', label: 'minutes' },
  { value: 'HOUR', label: 'hours' },
]
