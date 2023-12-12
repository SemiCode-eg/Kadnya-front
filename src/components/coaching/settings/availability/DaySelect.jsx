function DaySelect({ activeDay, setActiveDay = () => {} }) {
  return (
    <div className="bg-neutral-200 py-3 pl-2 w-14 h-full rounded-l-[10px] text-xs flex flex-col justify-between items-center gap-2">
      {days.map(day => (
        <div
          role="button"
          key={day}
          className={`w-full py-3 text-center rounded-l-2xl 
                      duration-150 ease-in transition-[background-color] 
                      ${
                        activeDay === day &&
                        'bg-white font-semibold text-teal-500'
                      }`}
          onClick={() => setActiveDay(day)}>
          <span
            className={`border-r-2 pr-1 duration-100 ease-in ${
              activeDay === day && ' border-teal-500'
            }`}>
            {day}
          </span>
        </div>
      ))}
    </div>
  )
}

export default DaySelect

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
