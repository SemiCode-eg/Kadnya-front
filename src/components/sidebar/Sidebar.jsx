import { useState } from "react";
import {
  House,
  Package,
  Airplay,
  ChartPieSlice,
  Users,
  Gear,
  SignOut,
} from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    icon: <House size={25} />,
    name: "Dashboard",
    link: "/",
  },
  {
    icon: <Package size={25} />,
    name: "Products",
    link: "/products",
  },
  {
    icon: <ChartPieSlice size={25} />,
    name: "Sales",
    link: "/sales",
  },
  { icon: <Airplay size={25} />, name: "Website", link: "/website" },
  { icon: <Users size={25} />, name: "Contacts", link: "/contacts" },
  { icon: <Gear size={25} />, name: "Setting", link: "/setting" },
  { icon: <SignOut size={25} />, name: "Logout", link: "/login" },
];

const SidebarItem = ({ icon, name, link, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === link;

  const handleClick = () => {
    onClick();
  };

  return (
    <Link
      tag={Link}
      to={link}
      active={isActive}
      onClick={handleClick}
      className={classNames(
        isActive
          ? "bg-gradient-to-r from-violet-200 to-teal-300 text-sky-950"
          : "text-sky-950 hover:bg-gradient-to-r hover:from-violet-200 hover:to-teal-300",
        `py-1.5 px-4 text-sm font-medium rounded-md flex items-center
         gap-2 duration-300 ease-linear`
      )}
    >
      {icon}
      {name}
    </Link>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ isSidebarOpen, closeSidebar }) {
  const initialPath = localStorage.getItem("currentPath") || "/dashboard";

  const [activeIndex, setActiveIndex] = useState(
    navigation.findIndex((item) => item.link === initialPath)
  );

  const handleItemClick = (index, link) => {
    setActiveIndex(index);
    localStorage.setItem("currentPath", link);
    if (window.innerWidth <= 768) {
      closeSidebar();
    }
  };

  return (
    <div className="flex h-screen md:w-3/12 lg:w-2/12 fixed w-full bg-gray-50 border-r border-gray-200">
      {/* Sidebar */}
      <nav
        className={`flex flex-col w-full bg-gray-50 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center h-16 bg-gray-50">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <div className="flex-grow p-4">
          <div className="flex flex-col space-y-4">
            {navigation.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                name={item.name}
                link={item.link}
                onClick={() => handleItemClick(index, item.link)}
              />
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
