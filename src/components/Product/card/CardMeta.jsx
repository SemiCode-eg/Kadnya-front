import { ArchiveBox, CalendarBlank, Users } from '@phosphor-icons/react';

/* eslint-disable react/prop-types */
export default function CardMeta({
  date,
  subscribersCount,
  isProgram = false,
}) {
  return (
    <>
      <p className="sm:text-sm text-xs text-sky-950 text-opacity-50 flex gap-2 font-medium items-center">
        {isProgram ? (
          <>
            <ArchiveBox size={24} weight="bold" /> {date + ' Sessions'}
          </>
        ) : (
          <>
            <CalendarBlank size={24} weight="bold" /> {date}
          </>
        )}
      </p>
      <p className="sm:text-sm text-xs font-semibold text-sky-950 text-opacity-80 mt-2 flex gap-2 items-center">
        <Users size={24} weight="bold" />
        {subscribersCount} Subscribers
      </p>
    </>
  );
}
