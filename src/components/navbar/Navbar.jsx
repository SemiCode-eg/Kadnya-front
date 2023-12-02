import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bell, List, X } from '@phosphor-icons/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ toggleSidebar, isSidebarOpen }) {
  return (
    <>
      {/* Content */}
      <div className="flex flex-col flex-grow z-50 sticky top-0">
        <Disclosure
          as="nav"
          className="bg-gray-50 border-b border-gray-200 p-4 sm:px-14"
        >
          {/* Navbar */}
          <div className="flex items-center justify-between">
            <Disclosure
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={() => toggleSidebar()}
            >
              {isSidebarOpen ? (
                <button
                  className="text-gray-400 hover:text-sky-950 hover:scale-110
                focus:outline-none transition duration-150 ease-linear md:hidden block"
                  onClick={toggleSidebar}
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              ) : (
                <button
                  className="text-gray-400 hover:text-sky-950 hover:scale-110
                focus:outline-none transition duration-150 ease-linear md:hidden block"
                  onClick={toggleSidebar}
                >
                  <List className="h-6 w-6" aria-hidden="true" />
                </button>
              )}
            </Disclosure>
            <div className="flex items-center">
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-900 
                hover:text-gray-400 focus:outline-none duration-150 ease-linear"
              >
                <Bell className="h-6 w-6" aria-hidden="true" />
              </button>
              {/* Profile dropdown */}
              <Menu as="div" className="relative mx-4">
                <div>
                  <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none ">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    className="absolute right-0 z-10 mt-2 
                  w-48 origin-top-right rounded-md
                   bg-white py-1 shadow-lg ring-1
                    ring-black ring-opacity-5 focus:outline-none"
                  >
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700',
                          )}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700',
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700',
                          )}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </Disclosure>

        {/* Content Area */}
        <main className="p-4">{/* Your page content goes here */}</main>
      </div>
    </>
  )
}
