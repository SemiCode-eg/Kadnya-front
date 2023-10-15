import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DropSection from "../../../../../components/dropSection/DropSection";
import HeadSection from "../../../../../components/headSection/HeadSection";
import { SelectionAll } from "@phosphor-icons/react";

export default function Sections() {
  const [sections, setSections] = useState([
    { id: "hero1", text: "Hero 1" },
    { id: "hero2", text: "Hero 2" },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedSections = Array.from(sections);
    const [reorderedSection] = updatedSections.splice(result.source.index, 1);
    updatedSections.splice(result.destination.index, 0, reorderedSection);

    setSections(updatedSections);
  };

  return (
    <div>
      <>
        <HeadSection text={"Header"} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="sections">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {sections.map((section, index) => (
                  <DropSection
                    key={section.id}
                    icon={<SelectionAll size={25} weight="fill" />}
                    text={section.text}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </>
    </div>
  );
}