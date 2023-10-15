import { ArrowsOutCardinal } from "@phosphor-icons/react";
import { Draggable } from "react-beautiful-dnd";

const DropSection = ({ icon, text, index }) => {
  return (
    <Draggable draggableId={text} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-white shadow-md p-4 w-full
            flex items-center space-x-4 transition duration-300 
            transform border-gray-300 border border-b-0 border-l-2 hover:border-l-blue-500 hover:underline hover:shadow-lg cursor-pointer`}
        >
          <div className="text-2xl text-gray-500">{icon}</div>
          <a href="#" className="text-gray-800 font-medium">
            {text}
          </a>
          <div className="flex-grow"></div>
          <div className="ml-4">
            <span className="text-gray-400">
              <ArrowsOutCardinal size={24} weight="fill" />
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DropSection;
