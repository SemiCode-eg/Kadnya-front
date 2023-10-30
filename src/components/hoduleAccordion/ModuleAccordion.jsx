/* eslint-disable react/prop-types */
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { CaretDown, PencilSimple, Plus } from '@phosphor-icons/react';
import FolderIcon from '../../assets/icons/FolderSimple.svg';
import { useState } from 'react';
import AddModule from '../../pages/course/addForms/AddModule';
import AddSubmodule from '../../pages/course/addForms/AddSubmodule';
import AddLesson from '../../pages/course/addForms/AddLesson';
import MenuItems from '../henu/MenuItems';
import { Menu } from '@mui/material';

function ModuleAccordion({
  children,
  title,
  description,
  image,
  Icon,
  summaryClasses = '',
  paperClasses = '',
  iconclasses = '',
  moduleID,
  modules,
  isSubmodule = false,
  submodule = [],
  parentModuleID,
  setRefetch = () => {},
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [isEditModule, setIsEditModule] = useState(false);
  const [isAddSubmodule, setIsAddSubmodule] = useState(false);
  const [isAddLesson, setIsAddLesson] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event) => {
    switch (event.target.id) {
      case addMenuItems[0].text: // Submodule
        setIsAddSubmodule(true);
        break;
      case addMenuItems[1].text: // Lesson
        setIsAddLesson(true);
        break;
      default:
        break;
    }
    setAnchorEl(null);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const RefactoredSubmodule = (submodule) => {
    return submodule.length > 0
      ? [{ value: submodule[0].id, label: submodule[0].title }]
      : [];
  };

  const previewedForm = () => {
    if (isEditModule) {
      return (
        <AddModule
          isEdit={true}
          moduleTitle={title}
          moduleDescription={description}
          moduleImage={image}
          moduleID={moduleID}
          open={isEditModule}
          onClose={() => setIsEditModule(false)}
          popupTitle="Edit Module"
          submitBtnTitle="Update Module"
          isSubmodule={isSubmodule}
          parentModuleID={parentModuleID}
          setRefetch={setRefetch}
        />
      );
    } else if (isAddSubmodule) {
      return (
        <AddSubmodule
          open={isAddSubmodule}
          onClose={() => setIsAddSubmodule(false)}
          modules={modules}
          setRefetch={setRefetch}
        />
      );
    } else if (isAddLesson) {
      return (
        <AddLesson
          open={isAddLesson}
          onClose={() => setIsAddLesson(false)}
          modules={modules}
          submodules={RefactoredSubmodule(submodule)}
          setRefetch={setRefetch}
        />
      );
    }
  };

  return (
    <>
      {previewedForm()}

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
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditModule(true);
                }}
              >
                <PencilSimple size={20} weight="bold" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClickListItem(e);
                }}
              >
                <Plus size={20} weight="bold" />
              </button>
              <Menu
                id="plus-add"
                open={open}
                onClose={handleCloseMenu}
                anchorEl={anchorEl}
                MenuListProps={{
                  'aria-labelledby': 'plus-add-button',
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <MenuItems
                  items={isSubmodule ? [{ text: 'Lesson' }] : addMenuItems}
                  handlerFunction={handleMenuItemClick}
                />
              </Menu>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className="!bg-gray-50 !border-t-[0.5px] !border-t-[#DDD]">
          <Typography>{children}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default ModuleAccordion;

const addMenuItems = [
  {
    text: 'Submodule',
  },
  {
    text: 'Lesson',
  },
];
