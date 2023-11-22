/* eslint-disable react/prop-types */
import SessionCard from './SessionCard';

function SessionCards({ data = [] }) {
  return (
    <>
      <ul className="flex flex-col gap-6 w-full h-[45dvh] pr-3 overflow-y-auto overflow-x-hidden">
        {data.map((session) => (
          <SessionCard
            key={session.id}
            id={session.id}
            image={session.image}
            userName={session.userName}
            sessionTitle={session.sessionTitle}
            date={session.date}
            time={session.time}
            coachingType={session.coachingType}
          />
        ))}
      </ul>
    </>
  );
}

export default SessionCards;
