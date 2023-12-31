import dayjs from 'dayjs'

export const refactoredAvailability = availability => {
  const result = {
    sun: [],
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
  }

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
        bookingWindow: { value: option.period, unit: 'DAY' },
      }
    })
  })

  return result
}
