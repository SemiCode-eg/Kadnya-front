export const checkOverlapping = (
  availability,
  dispatchSettingsData,
  setOverlappedAvailability,
  dispatchType,
) => {
  for (let day of ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']) {
    const dayAvailabilities = availability.filter(item => item.day === day)

    for (let i = 0; i < dayAvailabilities.length - 1; i++) {
      for (let j = i + 1; j < dayAvailabilities.length; j++) {
        const startI = dayAvailabilities[i].startTime['$H']
        const endI = dayAvailabilities[i].endTime['$H']
        const startJ = dayAvailabilities[j].startTime['$H']
        const endJ = dayAvailabilities[j].endTime['$H']

        if (!(startI >= endJ || endI <= startJ)) {
          dispatchSettingsData({
            type: dispatchType,
            payload: `Overlapping availability is not allowed.`,
          })

          setOverlappedAvailability({
            id: dayAvailabilities[j].id,
            day: dayAvailabilities[j].day,
          })
          return false
        }
      }
    }
  }
  return true
}
