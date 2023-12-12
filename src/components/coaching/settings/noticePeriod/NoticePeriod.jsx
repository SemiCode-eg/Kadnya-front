import { settingsReducerKey } from '../../../../hooks/use-coach-settings-reducer'
import OptionsInput from '../optionsInput'

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
      <div className="w-full mx-auto mb-8">
        <p className="text-sky-950 font-[600] text-md tracking-[-0.25px]">
          Scheduling options
        </p>
        <p className="text-neutral-500 text-sm">
          Select your availability window.
        </p>
      </div>

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
