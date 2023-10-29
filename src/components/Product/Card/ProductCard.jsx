import { Link, useResolvedPath } from 'react-router-dom';
import SettingMenu from '../../Menu';
import CardImage from './CardImage';
import CardMain from './CardMain';
import CardMeta from './CardMeta';

/* eslint-disable react/prop-types */
export default function ProductCard({
  id,
  image,
  title,
  category,
  date,
  subscribersCount,
}) {
  const { pathname } = useResolvedPath();

  return (
    <li>
      <div className="bg-white rounded-lg border border-gray-300 sm:p-2 p-2 pb-3 flex sm:flex-row flex-col gap-5 cursor-pointer hover:bg-teal-100 hover:border-gray-200 duration-200 ease-in-out">
        <Link to={`${pathname}/${id}/outline`} className="sm:w-1/4 w-full">
          <CardImage image={image} />
        </Link>
        <div className="flex gap-2 items-center sm:w-3/4 w-full sm:px-0 px-1">
          <div className="flex flex-col items-start sm:w-2/5 w-5/12 text-left">
            <CardMain title={title} category={category} />
          </div>

          <div className="sm:w-2/5 w-5/12 text-left">
            <CardMeta date={date} subscribersCount={subscribersCount} />
          </div>

          <div className="ml-auto w-2/12">
            <SettingMenu id={id} />
          </div>
        </div>
      </div>
    </li>
  );
}
