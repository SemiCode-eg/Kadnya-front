/* eslint-disable react/prop-types */
import { CalendarBlank, Users } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export default function ProductCard({
  image,
  title,
  category,
  date,
  subscribersCount,
  id,
}) {
  return (
    <Link
      className="bg-white rounded-lg border border-gray-300 p-4 
    flex cursor-pointer hover:bg-teal-100 hover:border-gray-200
    duration-200 ease-in-out"
      to={`/course/${id}/outline`}
    >
      <div className="w-1/4">
        {image ? (
          <img src={image} className={`w-4/5 h-24 rounded-lg`} />
        ) : (
          <div
            className={`w-36 h-24 rounded-lg 
            bg-gradient-to-r from-violet-200 to-teal-300`}
          ></div>
        )}
      </div>
      <div className="flex flex-row justify-between items-center w-3/4">
        <div className="w-2/5 text-left ml-3">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p
            className="bg-gradient-to-r from-violet-200 to-teal-300
            text-sky-950 text-opacity-80 w-24 px-2 py-1.5
            rounded-md font-semibold mt-1"
          >
            {category}
          </p>
        </div>
        <div className="mt-4 w-2/5 text-left">
          <p
            className="text-sm text-sky-950 text-opacity-50
                      flex gap-2 font-medium items-center"
          >
            <CalendarBlank size={24} weight="bold" />
            {date}
          </p>
          <p
            className="text-sm font-semibold text-sky-950 text-opacity-80
                      mt-2 flex gap-2 items-center"
          >
            <Users size={24} weight="bold" />
            {subscribersCount} Subscribers
          </p>
        </div>
      </div>
    </Link>
  );
}
