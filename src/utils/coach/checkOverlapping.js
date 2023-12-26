export const checkOverlapping = (availability, setOverlappedAvailability) => {
  for (let day of days) {
    const dayAvailabilities = availability.filter(item => item.day === day)

    for (let i = 0; i < dayAvailabilities.length - 1; i++) {
      for (let j = i + 1; j < dayAvailabilities.length; j++) {
        const startI = dayAvailabilities[i].startTime
        const endI = dayAvailabilities[i].endTime
        const startJ = dayAvailabilities[j].startTime
        const endJ = dayAvailabilities[j].endTime

        /**
         * The reason why i made this !endI.isAfter(startJ) not endI.isBefore(startJ)
         * is to have the equal state !endI.isAfter(startJ) is the same as endI <= startJ
         */
        if (!(!startI.isBefore(endJ) || !endI.isAfter(startJ))) {
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

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
