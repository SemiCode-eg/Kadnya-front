/* eslint-disable react/prop-types */
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { CaretDown, PencilSimple, Plus } from '@phosphor-icons/react';
import FolderIcon from '../../assets/icons/FolderSimple.svg';
import { useState } from 'react';
import { styled } from '@mui/material';

const MUIAccordionDetails = styled(AccordionDetails)(() => ({
  borderTop: '1px solid #DDD',
  backgroundColor: '#F9FAFB',
}));

function ModuleAccordion({
  children,
  title,
  handleEditBtn,
  HandleAddBtn,
  Icon,
  SummaryStyles = {},
  paperStyles = {},
}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Accordion style={paperStyles}>
      <AccordionSummary
        expandIcon={<CaretDown size={25} weight="bold" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        onClick={() => setIsClicked((prev) => !prev)}
        style={SummaryStyles}
      >
        <div className="flex justify-between flex-1 mr-2">
          <div className="flex items-end gap-2">
            {isClicked ? (
              <img src={FolderIcon} alt="folder" className="w-[30px]" />
            ) : (
              <Icon size={30} />
            )}
            <p className="font-semibold">{title}</p>
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
      <MUIAccordionDetails>
        <Typography>{children}</Typography>
      </MUIAccordionDetails>
    </Accordion>
  );
}

export default ModuleAccordion;
