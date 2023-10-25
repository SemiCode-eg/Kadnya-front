/* eslint-disable react/prop-types */
import { CaretRight } from '@phosphor-icons/react';
import { NavLink, useLocation } from 'react-router-dom';
import SmallMiniSideLinks from '../smallMiniSideLinks/SmallMiniSideLinks';

export default function MiniSide({ tabs }) {
  const location = useLocation();
  const parts = location.pathname.split('/');

  function getLastPartOfPath() {
    return parts[parts.length - 1];
  }

  return (
    <div className="miniSide lg:mr-5 lg:border-r-2 lg:pr-4 h-full">
      <div className="miniSide-content">
        <ul className="lg:flex gap-3 flex-col hidden">
          {tabs.map((tab, index) => (
            <NavLink
              key={index}
              to={tab.path}
              className={({ isActive }) => {
                return `cursor-pointer px-3 py-2 flex justify-between
                font-medium rounded-r-lg w-40 transition-all duration-300 ease-in
                hover:bg-gradient-to-r hover:from-violet-200 hover:to-teal-300 ${
                  isActive
                    ? `bg-gradient-to-r from-violet-200 to-teal-300 
                     text-sky-950`
                    : ``
                }`;
              }}
            >
              {tab.title}
              {getLastPartOfPath() === tab.path && (
                <CaretRight size={22} weight="bold" />
              )}
            </NavLink>
          ))}
        </ul>
        <SmallMiniSideLinks tabs={tabs} />
      </div>
    </div>
  );
}
