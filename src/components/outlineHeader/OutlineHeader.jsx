/* eslint-disable react/prop-types */
import {
  DotsThree,
  Stack,
  FolderSimple,
  Folders,
  File,
  CheckSquareOffset,
} from '@phosphor-icons/react';
import imageSquare from '../../assets/images/courses/ImageSquare.png';
import MainButton from '../MainButton/MainButton';
import { Menu } from '@mui/material';
import { useState } from 'react';
import MenuItems from '../Menu/MenuItems';
import styled from '@emotion/styled';
import AddModule from '../../pages/course/addForms/addModule';
import AddSubmodule from '../../pages/course/addForms/AddSubmodule';
import AddLesson from '../../pages/course/addForms/AddLesson';
import SettingMenu from '../Menu';

const MUIMenu = styled(Menu)(() => ({
  '& .MuiList-root': {
    padding: '0',
  },
  '& .MuiPaper-root': {
    width: '200px',
    marginTop: '2px',
    borderRadius: '10px',
  },
  '& .MuiMenuItem-root': {
    padding: '15px',
    color: '#fff',
    fontSize: '20px',
    [`&#${addMenuItems[0].text}`]: {
      background:
        'linear-gradient(180deg, rgba(40,172,166,1) 38%, rgba(82,163,194,1) 93%)',
    },
    [`&#${addMenuItems[1].text}`]: {
      background:
        'linear-gradient(180deg, rgba(82,163,194,1) 38%, rgba(109,156,209,1) 93%)',
    },
    [`&#${addMenuItems[2].text}`]: {
      background:
        'linear-gradient(180deg, rgba(109,156,209,1) 35%, rgba(140,157,225,1) 93%)',
    },
    [`&#${addMenuItems[3].text}`]: {
      background:
        'linear-gradient(180deg, rgba(140,157,225,1) 30%, rgba(182,175,247,1) 85%)',
    },
    '&:hover': {
      opacity: '0.9',
    },
  },
}));

function OutlineHeader({ courseData }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModuleForm, setOpenModuleForm] = useState(false);
  const [opensubModuleForm, setOpensubModuleForm] = useState(false);
  const [openLessonForm, setOpenLessonForm] = useState(false);
  const [openQuizForm, setOpenQuizForm] = useState(false);

  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event) => {
    switch (event.target.id) {
      case addMenuItems[0].text: // Module
        setOpenModuleForm(true);
        break;
      case addMenuItems[1].text: // Submodule
        setOpensubModuleForm(true);
        break;
      case addMenuItems[2].text: // Lesson
        setOpenLessonForm(true);
        break;
      case addMenuItems[3].text: // Quiz
        setOpenQuizForm(true);
        break;
      default:
        break;
    }
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const previewedForm = () => {
    if (openModuleForm) {
      return (
        <AddModule
          open={openModuleForm}
          onClose={() => setOpenModuleForm(false)}
          title="New Module"
        />
      );
    } else if (opensubModuleForm) {
      return (
        <AddSubmodule
          open={opensubModuleForm}
          onClose={() => setOpensubModuleForm(false)}
          title="New Submodule"
          modules={courseData?.modules}
        />
      );
    } else if (openLessonForm) {
      return (
        <AddLesson
          open={openLessonForm}
          onClose={() => setOpenLessonForm(false)}
          title="New Lesson"
          modules={courseData?.modules}
          isMainBtn={true}
        />
      );
    } else if (openQuizForm) {
      // return <AddQuiz />
    }
  };

  return (
    <>
      {previewedForm()}
      <div className="mb-2 flex gap-5 flex-col lg:flex-row">
        <div className="flex justify-between gap-[35px] flex-1 flex-col lg:flex-row flex-wrap">
          <div className="flex items-center gap-[20px]">
            <img
              src={courseData?.image ? courseData?.image : imageSquare}
              alt="course image"
              className="w-full max-w-[141px] h-[114px] bg-white rounded-[10px] shadow-1"
            />

            <p className="text-gray-950 capitalize text-[20px]">
              {courseData?.title}
            </p>
          </div>
          <div className="flex items-center gap-[20px] flex-1 justify-end">
            <SettingMenu
              id={courseData?.id}
              buttonIcon={<DotsThree size={40} weight="bold" />}
            />
            <MainButton
              text="Add Content"
              icon={
                <>
                  <Stack size={30} weight="fill" />
                </>
              }
              reverse={true}
              className={`text-white hover:bg-teal-200 hover:text-sky-950 ${
                anchorEl === null
                  ? 'bg-sky-950'
                  : 'bg-gradient-to-b from-[#28ACA6] to-[#28ACA6]'
              }`}
              handleClick={handleClickListItem}
            />
            <MUIMenu
              id="add-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'setting-menu-button',
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
                items={addMenuItems}
                handlerFunction={handleMenuItemClick}
                iconClasses="text-white"
              />
            </MUIMenu>
          </div>
        </div>
      </div>
    </>
  );
}

export default OutlineHeader;

const addMenuItems = [
  {
    Icon: FolderSimple,
    text: 'Module',
  },
  {
    Icon: Folders,
    text: 'Submodule',
  },
  {
    Icon: File,
    text: 'Lesson',
  },
  {
    Icon: CheckSquareOffset,
    text: 'Quiz',
  },
];
