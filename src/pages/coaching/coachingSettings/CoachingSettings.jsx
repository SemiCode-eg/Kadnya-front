import { useEffect, useState } from 'react'
import Availability from '../../../components/coaching/settings/availability/Availability'
import NoticePeriod from '../../../components/coaching/settings/noticePeriod/NoticePeriod'
import HandleErrorLoad from '../../../components/handleErrorLoad'
import MainButton from '../../../components/mainButton/MainButton'
import useCoachSettingReducer from '../../../hooks/use-coach-settings-reducer'
import { checkOverlapping } from '../../../utils/coach'
import useCoachSettings from '../../../hooks/use-coach-settings'
import { refactoredAvailability } from '../../../utils/coach/refactorAvailability'
import { sendCoachSettingsData } from '../../../api/coach'

function CoachingSettings() {
  const [overlappedAvailability, setOverlappedAvailability] = useState(null)
  const [successMsg, setSuccessMsg] = useState('')
  const { coachSettings, loading, errorMsg, setRefetch } = useCoachSettings(1)
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
      sendCoachSettingsData(settingsData, 1).then(data => {
        if (data.status === 201) {
          setSuccessMsg('Availability updated Successfully.')
          setRefetch(prev => !prev)
        } else {
          dispatchSettingsData({
            type: settingsReducerKey.SET_ERROR,
            payload: 'Something went wrong, please try again later.',
          })
        }
      })
    }
  }

  useEffect(() => {
    if (coachSettings) {
      if (coachSettings.availabilities) {
        dispatchSettingsData({
          type: settingsReducerKey.ADD_AVAILABILITIES,
          payload: refactoredAvailability(coachSettings.availabilities),
        })
      }

      if (coachSettings.minimum_notice_scheduling) {
        dispatchSettingsData({
          type: settingsReducerKey.UPDATE_NOTICE_PERIOD_VALUE,
          payload: coachSettings.minimum_notice_scheduling,
        })
        dispatchSettingsData({
          type: settingsReducerKey.UPDATE_NOTICE_PERIOD_UNIT,
          payload: 'MIN',
        })
      }
    }
  }, [coachSettings, dispatchSettingsData, settingsReducerKey])

  return (
    <HandleErrorLoad
      loading={loading}
      errorMsg={errorMsg || settingsData.error}
      setErrorMsg={error =>
        dispatchSettingsData({
          type: settingsReducerKey.SET_ERROR,
          payload: error,
        })
      }
      successMsg={successMsg}
      setSuccessMsg={setSuccessMsg}
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
