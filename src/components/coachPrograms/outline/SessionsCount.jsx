function SessionsCount({ count }) {
  return (
    <div className="border-b-2 border-[#ddd] pb-2 text-left w-full text-lg">
      {count || 0} sessions
    </div>
  )
}

export default SessionsCount
