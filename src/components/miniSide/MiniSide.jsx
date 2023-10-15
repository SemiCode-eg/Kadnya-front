/* eslint-disable react/prop-types */
import { useState } from "react";
import { CaretRight } from "@phosphor-icons/react";

export default function MiniSide({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const renderTabContent = () => {
    if (activeTab < tabs.length) {
      return <div>{tabs[activeTab].content}</div>;
    }
    return null;
  };

  return (
    <div
      className={"flex gap-5 mt-5 "}
      style={{
        height: "33rem",
      }}
    >
      <div className="miniSide mr-5 border-r-2 pr-4">
        <div className="miniSide-content">
          <ul className={"flex gap-3 flex-col"}>
            {tabs.map((tab, index) => (
              <li
                key={index}
                onClick={() => handleTabChange(index)}
                className={`cursor-pointer px-3 py-2 flex justify-between
                font-medium rounded-r-lg w-40 transition-all duration-300 ease-in
                hover:bg-gradient-to-r hover:from-violet-200 hover:to-teal-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r from-violet-200 to-teal-300 
                     text-sky-950`
                    : ``
                }`}
              >
                {tab.title}
                {index === activeTab && <CaretRight size={22} weight="bold" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mainContent w-full h-full overflow-auto">
        {renderTabContent()}
      </div>
    </div>
  );
}
