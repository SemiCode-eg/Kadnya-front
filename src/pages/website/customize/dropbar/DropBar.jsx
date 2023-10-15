import { useState } from "react";
import { ArrowLineLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Sections from "./sections/Sections";
import Settings from "./settings/Settings";

const DropBar = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="border-r">
      <div className="p-4">
        <span
          className="flex w-10 mb-6 border border-gray-400 shadow-sm
           rounded-md p-1 cursor-pointer text-gray-400
         hover:text-gray-700 hover:border-gray-700
           transition ease-in duration-150"
        >
          <Link to="/website">
            <ArrowLineLeft size={30} weight="fill" />
          </Link>
        </span>
        <h1 className="font-medium text-lg">mohammad eid's First Site</h1>
      </div>
      <div className="flex">
        <div
          className={`cursor-pointer border border-b-4 border-gray-200 text-center p-4 w-1/2 text-sm ${
            activeTab === "tab1" ? " border-b-blue-500 font-semibold" : "border-gray-200"
          }`}
          onClick={() => handleTabChange("tab1")}
        >
          Sections
        </div>
        <div
          className={`cursor-pointer border border-l-0 border-gray-200 border-b-4 text-center text-sm p-4 w-1/2 ${
            activeTab === "tab2" ? "border-b-blue-500 font-semibold" : "border-gray-200"
          }`}
          onClick={() => handleTabChange("tab2")}
        >
          Settings
        </div>
      </div>
      <div>
        <div className={"pl-2 pr-4"}>
          {activeTab === "tab1" && (
            <>
              <Sections />
            </>
          )}
        </div>
        <div>
          {activeTab === "tab2" && (
            <>
              <Settings />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropBar;
