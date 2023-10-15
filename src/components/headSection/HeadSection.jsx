import { GridFour } from "@phosphor-icons/react";


const HeadSection = ({ text }) => {
  return (
    <div className="flex">
      <div className={`border-b px-5 py-4 mb-4 w-full flex hover:underline cursor-pointer`}>
        <span className="text-gray-400 w-1/6">
          <GridFour size={24} weight="fill" />
        </span>
        <span className="w-5/6">{text}</span>
      </div>
    </div>
  );
};

export default HeadSection;