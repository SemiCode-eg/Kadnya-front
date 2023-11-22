/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { CaretRight } from '@phosphor-icons/react';
import SessionInfo from './SessionInfo';
import UserSessionInfo from './UserSessionInfo';

function SessionCard({
  // id,
  image,
  userName,
  sessionTitle,
  date,
  time,
  coachingType,
}) {
  return (
    <li>
      <Link
        to={''}
        className="bg-white rounded-lg border border-gray-300 p-5 flex flex-wrap sm:flex-row 
                   flex-col gap-7 cursor-pointer hover:bg-teal-100 hover:border-gray-200 
                   duration-200 ease-in-out"
      >
        <div className="flex items-center gap-4">
          <UserSessionInfo
            image={image}
            userName={userName}
            date={date}
            time={time}
          />
        </div>

        <div className="flex items-center gap-2 justify-between flex-1">
          <SessionInfo
            sessionTitle={sessionTitle}
            coachingType={coachingType}
          />

          <div className=" text-neutral-500">
            <CaretRight size={25} />
          </div>
        </div>
      </Link>
    </li>
  );
}

export default SessionCard;
