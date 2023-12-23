import { CalendarBlank } from '@phosphor-icons/react'

function sessionDetails({ title }) {
  return (
    <div className="flex gap-2 items-center">
      <CalendarBlank size={18} weight="bold" />
      <p className="text-sm font-semibold capitalize">{title}</p>
    </div>
  )
}

export default sessionDetails
