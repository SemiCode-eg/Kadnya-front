import { NavLink, useLocation } from 'react-router-dom';

function CoachingDashboard() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get('filter');

  return (
    <div className="flex lg:flex-row flex-col">
      <div className="flex-[0.75] shadow p-5 rounded-[15px]">
        <p className="text-sky-950 text-lg text-left font-semibold mb-5">
          Sessions
        </p>
        <nav className="mb-5">
          <ul className="flex items-center gap-5 text-md">
            <li className=" cursor-pointer font-semibold">
              <NavLink
                to="?filter=upcoming"
                className={`opacity-95 hover:opacity-100 duration-75 pb-3 ${
                  filter === 'upcoming' && 'border-b-2 border-b-black'
                } `}
              >
                Upcoming
              </NavLink>
            </li>
            <li className=" cursor-pointer font-semibold">
              <NavLink
                to="?filter=past"
                className={`opacity-95 hover:opacity-100 duration-75 pb-3 ${
                  filter === 'past' && 'border-b-2 border-b-black'
                } `}
              >
                Past
              </NavLink>
            </li>
            <li className=" cursor-pointer font-semibold">
              <NavLink
                to="?filter=pending"
                className={`opacity-95 hover:opacity-100 duration-75 pb-3 ${
                  filter === 'pending' && 'border-b-2 border-b-black'
                } `}
              >
                Pending
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-[0.25]">
        <p className="text-sky-950 text-lg">Sessions</p>
      </div>
    </div>
  );
}

export default CoachingDashboard;
