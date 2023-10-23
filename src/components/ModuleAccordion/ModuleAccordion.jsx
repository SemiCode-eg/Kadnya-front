/* eslint-disable react/prop-types */
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { CaretDown, PencilSimple, Plus } from '@phosphor-icons/react';
import FolderIcon from '../../assets/icons/FolderSimple.svg';
import { useState } from 'react';

function ModuleAccordion({
  children,
  title,
  handleEditBtn,
  HandleAddBtn,
  Icon,
  summaryClasses = '',
  paperClasses = '',
  iconclasses = '',
}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Accordion className={paperClasses}>
      <AccordionSummary
        expandIcon={<CaretDown size={25} weight="bold" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        onClick={() => setIsClicked((prev) => !prev)}
        className={summaryClasses}
      >
        <div className="flex justify-between flex-1 mr-2">
          <div className="flex items-end gap-2">
            {isClicked ? (
              <img src={FolderIcon} alt="folder" className="w-[30px]" />
            ) : (
              <Icon size={30} className={iconclasses} />
            )}
            <p className="font-[500]">{title}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleEditBtn}>
              <PencilSimple size={20} weight="bold" />
            </button>
            <button onClick={HandleAddBtn}>
              <Plus size={20} weight="bold" />
            </button>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails className="!bg-gray-50 !border-t-[0.5px] !border-t-[#DDD]">
        <Typography>{children}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default ModuleAccordion;
