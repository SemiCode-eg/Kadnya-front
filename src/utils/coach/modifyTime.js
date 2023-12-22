export const roundTimeTo15Minutes = time =>
  time
    .set('minute', Math.round(time.minute() / 15) * 15)
    .set('second', 0)
    .set('millisecond', 0)