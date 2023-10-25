/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import { Menu } from '@mui/material';
import { CaretRight, List, X } from '@phosphor-icons/react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MUIMenu = styled(Menu)(() => ({
  '& .MuiList-root': {
    padding: '0',
  },
  '& .MuiPaper-root': {
    width: 'calc(50%)',
    marginTop: '2px',
    borderRadius: '6px',
  },
}));

function SmallMiniSideLinks({ tabs }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const location = useLocation();
  const parts = location.pathname.split('/');

  function getLastPartOfPath() {
    return parts[parts.length - 1];
  }

  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <button className="flex lg:hidden ml-auto" onClick={handleClickListItem}>
        <List size={30} weight="bold" />
      </button>
      <MUIMenu
        id="links-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'links-menu-button',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <button className="flex ml-auto p-2" onClick={handleClose}>
          <X size={30} weight="bold" />
        </button>
        {tabs.map((tab, index) => (
          <NavLink
            key={index}
            to={tab.path}
            className={({ isActive }) => {
              return `w-full cursor-pointer px-3 py-2 mb-1 flex justify-between items-center
                font-medium transition-all duration-300 ease-in
                hover:bg-gradient-to-r hover:from-violet-200 hover:to-teal-300 ${
                  isActive
                    ? `bg-gradient-to-r from-violet-200 to-teal-300 
                     text-sky-950`
                    : ``
                }`;
            }}
          >
            {tab.title}
            {getLastPartOfPath() === tab.path && (
              <CaretRight size={22} weight="bold" />
            )}
          </NavLink>
        ))}
      </MUIMenu>
    </>
  );
}

export default SmallMiniSideLinks;
