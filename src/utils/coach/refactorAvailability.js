import dayjs from 'dayjs'

export const refactoredAvailability = availability => {
  const result = initialAvailability

  Object.keys(availability).forEach(day => {
    result[day] = availability[day].map((option, i) => {
      const startTime = dayjs()
        .set('hour', parseInt(option.start_time.split(':')[0]))
        .set('minute', parseInt(option.start_time.split(':')[1]))

      const endTime = dayjs()
        .set('hour', parseInt(option.end_time.split(':')[0]))
        .set('minute', parseInt(option.end_time.split(':')[1]))

      return {
        id: i,
        startTime,
        endTime,
        bookingWindow: parseBookingWindow(option.period),
      }
    })
  })

  return result
}

const parseBookingWindow = period => {
  if (period < 7) {
    return { value: period, unit: 'DAY' }
  } else if (period < 30) {
    return { value: period / 7, unit: 'WEEK' }
  } else {
    return { value: period / 30, unit: 'MONTH' }
  }
}

const initialAvailability = {
  Sun: [],
  Mon: [],
  Tue: [],
  Wed: [],
  Thu: [],
  Fri: [],
  Sat: [],
}
