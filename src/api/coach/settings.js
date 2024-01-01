import api from '../api'

export const getCoachSettings = async id => {
  try {
    const response = await api.get(`coach/${id}/settings`)

    return response
  } catch (error) {
    return error
  }
}

export const sendCoachSettingsData = async (data, coachId) => {
  const availabilities = refactoredAvailability(data.availability)
  const coachSettingsData = new FormData()

  Object.keys(availabilities).forEach(day => {
    availabilities[day].length > 0
      ? availabilities[day].forEach((option, i) => {
          coachSettingsData.append(
            `availabilities[${day}][${i}][start_time]`,
            option.start_time,
          )
          coachSettingsData.append(
            `availabilities[${day}][${i}][end_time]`,
            option.end_time,
          )
          coachSettingsData.append(
            `availabilities[${day}][${i}][period]`,
            option.period,
          )
        })
      : coachSettingsData.append(`availabilities[${day}]`, '')
  })

  coachSettingsData.append(
    'minimum_notice_scheduling',
    parseInt(
      data.noticePeriod.unit === 'HOUR'
        ? data.noticePeriod.value * 60
        : data.noticePeriod.value,
    ),
  )

  try {
    const response = await api.post(
      `coach/${coachId}/settings/update/`,
      coachSettingsData,
      {
        headers: { 'content-type': 'application/json' },
      },
    )

    return response
  } catch (error) {
    return error
  }
}

const refactoredAvailability = availability => {
  const result = JSON.parse(JSON.stringify(availability))

  Object.keys(availability).forEach(day => {
    result[day] = availability[day].map(option => {
      const start_time = new Date(option.startTime).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })

      const end_time = new Date(option.endTime).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })

      const period =
        option.bookingWindow.unit === 'DAY'
          ? option.bookingWindow.value
          : option.bookingWindow.unit === 'WEEK'
            ? option.bookingWindow.value * 7
            : option.bookingWindow.value * 30

      return {
        start_time,
        end_time,
        period,
      }
    })
  })

  return result
}
