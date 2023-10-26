/* eslint-disable react/prop-types */
import { Menu } from '@mui/material';
import { CaretDown, Eye, EyeSlash } from '@phosphor-icons/react';
import { useState } from 'react';
import MenuItems from '../SettingMenu/MenuItems';

function DraftBtn({ draftState, setDraftState }) {
  const [title, setTitle] = useState('draft');
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event) => {
    switch (event.target.id) {
      case draftMenuItems[0].text: // draft
        setTitle('draft');
        setDraftState(true);
        break;
      case draftMenuItems[1].text: // publish
        setTitle('published');
        setDraftState(false);
        break;
      default:
        break;
    }
    setAnchorEl(null);
  };

  return (
    <>
      <button
        className="rounded-[15px] bg-teal-500 text-white font-[500] flex items-center gap-1 py-[4px] px-[9px]"
        onClick={handleClickListItem}
      >
        {draftState ? <EyeSlash weight="bold" /> : <Eye />}
        <span className="capitalize">{title}</span>
        <CaretDown />
      </button>
      <Menu
        id="draft-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'draft-menu-button',
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
          items={draftMenuItems}
          handlerFunction={handleMenuItemClick}
        />
      </Menu>
    </>
  );
}

export default DraftBtn;

const draftMenuItems = [
  {
    Icon: EyeSlash,
    text: 'Draft',
  },
  {
    Icon: Eye,
    text: 'Published',
  },
];
