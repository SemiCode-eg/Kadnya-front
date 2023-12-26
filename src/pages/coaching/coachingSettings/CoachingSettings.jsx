import { useState } from 'react'
import Availability from '../../../components/coaching/settings/availability/Availability'
import NoticePeriod from '../../../components/coaching/settings/noticePeriod/NoticePeriod'
import HandleErrorLoad from '../../../components/handleErrorLoad'
import MainButton from '../../../components/mainButton/MainButton'
import useCoachSettingReducer from '../../../hooks/use-coach-settings-reducer'
import { checkOverlapping } from '../../../utils/coach'

function CoachingSettings() {
  const [overlappedAvailability, setOverlappedAvailability] = useState(null)
  const { settingsData, dispatchSettingsData, settingsReducerKey } =
    useCoachSettingReducer()

  const handleSubmit = e => {
    e.preventDefault()
    setOverlappedAvailability(null)

    if (
      !checkOverlapping(settingsData.availability, setOverlappedAvailability)
    ) {
      dispatchSettingsData({
        type: settingsReducerKey.SET_ERROR,
        payload: 'Overlapping availability is not allowed.',
      })

      return
    } else {
      // console.log('Not overlapping')
    }
  }

  return (
    <HandleErrorLoad
      errorMsg={settingsData.error}
      setErrorMsg={error =>
        dispatchSettingsData({
          type: settingsReducerKey.SET_ERROR,
          payload: error,
        })
      }
      closeByClickAway={false}>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <Availability
          data={settingsData.availability}
          dispatchSettingsData={dispatchSettingsData}
          overlappedAvailability={overlappedAvailability}
        />
        <NoticePeriod
          noticePeriodValue={settingsData.noticePeriod.value}
          noticePeriodUnit={settingsData.noticePeriod.unit}
          dispatchSettingsData={dispatchSettingsData}
        />
        <div>
          <MainButton text="Save" type="submit" />
        </div>
      </form>
    </HandleErrorLoad>
  )
}

export default CoachingSettings
