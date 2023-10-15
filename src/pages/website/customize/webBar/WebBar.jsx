import { Disclosure } from "@headlessui/react";
import { List, X } from "@phosphor-icons/react";

export default function WebBar({ toggleDropbar, isDropbarOpen }) {
  return (
    <>
      {/* Content */}
      <div className="flex flex-col flex-grow">
        <Disclosure as="nav" className="p-4 sm:pr-16">
          {" "}
          {/* border-b-2 shadow-sm */}
          {/* Webbar */}
          <div className="flex items-center justify-between">
            <Disclosure.Button
              className="text-gray-400 hover:text-gray-800
              focus:outline-none transition duration-150 ease-linear"
              onClick={() => toggleDropbar()}
            >
              {isDropbarOpen ? (
                <button
                  className="text-gray-400 hover:text-blue-400 hover:scale-110
                focus:outline-none transition duration-150 ease-linear md:hidden block"
                  onClick={toggleDropbar}
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              ) : (
                <button
                  className="text-gray-400 hover:text-blue-400 hover:scale-110
                focus:outline-none transition duration-150 ease-linear md:hidden block"
                  onClick={toggleDropbar}
                >
                  <List className="h-6 w-6" aria-hidden="true" />
                </button>
              )}
            </Disclosure.Button>
            <div className="flex items-center">
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-400
              hover:text-gray-800 outline-none focus:outline-none focus:ring-2 
                focus:ring-white focus:ring-offset-2"
              >
                <button>preview</button>
              </button>
            </div>
          </div>
        </Disclosure>
      </div>
    </>
  );
}
