import MainButton from './hainButton/MainButton';

/* eslint-disable react/prop-types */
export default function SearchInput({
  placeholder = 'Search Mockups, Logos...',
  onSubmit = () => {},
}) {
  return (
    <form onSubmit={onSubmit}>
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
          placeholder={placeholder}
          required
        />

        <MainButton
          text="Search"
          type="submit"
          className="absolute right-2.5 sm:bottom-2 bottom-3 sm:!px-5 sm:!py-2 !px-3 !py-1 sm:text-base text-sm"
        />
      </div>
    </form>
  );
}
