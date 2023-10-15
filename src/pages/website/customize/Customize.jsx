import { useEffect, useState } from "react";
import DropBar from "./dropbar/DropBar";
import WebBar from "./webBar/WebBar";

const Customize = () => {
  const [isDropbarOpen, setDropbarOpen] = useState(true);

  const toggleDropbar = () => {
    setDropbarOpen(!isDropbarOpen);
  };

  const handleWindowResize = () => {
    if (window.innerWidth <= 768) {
      setDropbarOpen(false);
    } else {
      setDropbarOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="flex w-full">
      <>
        <div
          className={`w-full md:w-4/12 lg:w-2/12 sm:relative sm:top-0 
            absolute top-16 h-screen bg-gray-100 duration-200 ease-linear ${
            // isSidebarOpen ? "block" : "hidden"
            isDropbarOpen ? "left-0" : "sm:hidden -left-full"
            }`}
        >
          <DropBar />
        </div>
        {/* Main Content */}
        <div
          className={`${
            isDropbarOpen ? "w-full sm:w-9/12 md:w-8/12 lg:w-10/12" : "w-full"
          } h-screen bg-white`}
        >
          <WebBar toggleDropbar={toggleDropbar} isDropbarOpen={isDropbarOpen} />
        </div>
      </>
    </div>
  );
};

export default Customize;
