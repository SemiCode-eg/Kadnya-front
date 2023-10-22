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
import MenuItems from '../SettingMenu/MenuItems';
import styled from '@emotion/styled';

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
    '&:nth-child(1)': {
      background:
        'linear-gradient(180deg, rgba(40,172,166,1) 38%, rgba(82,163,194,1) 93%)',
    },
    '&:nth-child(2)': {
      background:
        'linear-gradient(180deg, rgba(82,163,194,1) 38%, rgba(109,156,209,1) 93%)',
    },
    '&:nth-child(3)': {
      background:
        'linear-gradient(180deg, rgba(109,156,209,1) 35%, rgba(140,157,225,1) 93%)',
    },
    '&:nth-child(4)': {
      background:
        'linear-gradient(180deg, rgba(140,157,225,1) 30%, rgba(182,175,247,1) 85%)',
    },
    "&:hover": {
      opacity: "0.9"
    }
  },
}));

function OutlineHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event) => {
    switch (event.target.id) {
      case addMenuItems[0].text:
        console.log('module');
        break;
      case addMenuItems[1].text:
        console.log('Submodule');
        break;
      case addMenuItems[2].text:
        console.log('lesson');
        break;
      case addMenuItems[3].text:
        console.log('quiz');
        break;
      default:
        break;
    }
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mb-2 flex gap-5 flex-col lg:flex-row">
      <div className="flex justify-between gap-[35px] flex-1 flex-col lg:flex-row flex-wrap">
        <div className="flex items-center gap-[20px]">
          <img
            src={imageSquare}
            alt="course image"
            className="w-full max-w-[94px] h-auto bg-white rounded-[10px] border-[1.5px] border-neutral-400 shadow-1"
          />

          <p className="text-gray-950 capitalize text-[20px]">name</p>
        </div>
        <div className="flex items-center gap-[20px] flex-1 justify-end">
          <div className="rounded-full w-[40px] h-[40px] flex items-center justify-center border-[1px] border-black/10 cursor-pointer">
            <DotsThree size={40} weight="bold" />
          </div>
          <MainButton
            text="Add Content"
            icon={
              <>
                <Stack size={30} weight="fill" />
              </>
            }
            reverse={true}
            className={`text-white hover:bg-teal-200 hover:text-sky-950 ${
              anchorEl === null ? 'bg-sky-950' : 'bg-gradient-to-b from-[#28ACA6] to-[#28ACA6]'
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
