import { CalendarBlank } from '@phosphor-icons/react'
import imageSquare from '../../../../../assets/images/courses/ImageSquare.png'

/* eslint-disable react/prop-types */
function UserSessionInfo({ image, userName, date, time }) {
  return (
    <>
      <div className="rounded-full border w-[80px] h-[80px]">
        <img
          src={image ? image : imageSquare}
          alt="User Image"
          className={`w-full h-full italic rounded-full text-sm ${
            image ? 'object-cover' : 'object-contain'
          } rounded-[10px]`}
        />
      </div>

      <div className="flex flex-col gap-2 items-start">
        <p className="font-semibold">{userName}</p>
        <div className="flex gap-1 items-center flex-wrap text-xs text-neutral-500">
          <CalendarBlank size={22} />
          <p id="session-date">{date}</p>
          <p id="session-time">at {time}</p>
        </div>
      </div>
    </>
  )
}

export default UserSessionInfo
