/* eslint-disable react/prop-types */
function SessionInfo({ sessionTitle, coachingType }) {
  return (
    <div className="flex flex-col gap-2 items-start">
      <p className="font-semibold">{sessionTitle}</p>
      <p
        className="bg-gradient-to-r from-violet-200 to-teal-300
                  text-sky-950 text-opacity-80 px-2 py-1.5
                  rounded-md font-semibold text-xs text-start whitespace-nowrap"
      >
        {coachingType}
      </p>
    </div>
  )
}

export default SessionInfo
