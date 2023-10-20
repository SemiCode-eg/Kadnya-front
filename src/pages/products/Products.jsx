import { Typography } from '@material-tailwind/react';
import MiniSide from '../../components/miniSide/MiniSide';
import AllProducts from './allProducts/AllProducts';
import Courses from './courses/Courses';
import { Outlet } from 'react-router-dom';
import CustomCard from '../../components/customCard/CustomCard';

export default function Products() {
  const tabs = [
    {
      title: 'All Products',
      path: 'all',
      content: <AllProducts />,
    },
    { title: 'Courses', path: 'courses', content: <Courses /> },
    { title: 'Coaching', path: 'coaching', content: 'Coaching' },
    { title: 'Community', path: 'community', content: 'Community' },
    { title: 'Codcasts', path: 'codcasts', content: 'Podcasts' },
  ];
  return (
    <CustomCard
      titleComponent={
        <div className="ml-5 w-4/6">
          <h1 className="font-bold text-2xl">Products</h1>
        </div>
      }
    >
      <Typography variant="h5" color="blue-gray" className="mb-2">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium 
              text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div
              className="absolute inset-y-0 left-0 flex items-center
              pl-3 pointer-events-none"
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm 
                  rounded-lg border-2
                 border-gray-300 placeholder-gray-400 
                 text-gray-900 focus:border-sky-950 outline-none
                  transition-all duration-200 ease-in"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className={`text-white font-semibold
                absolute right-2.5 bottom-2
                bg-sky-950 outline-none
                transition-all duration-150 ease-in
                rounded-lg px-5 py-2 text-base
                hover:bg-none hover:bg-teal-200 hover:text-sky-950`}
            >
              Search
            </button>
          </div>
        </form>
      </Typography>
      <MiniSide tabs={tabs} Outlet={Outlet} />
    </CustomCard>
  );
}
