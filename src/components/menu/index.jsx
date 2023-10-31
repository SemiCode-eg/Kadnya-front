import { Alert, IconButton, Menu, Snackbar } from '@mui/material';
import {
  ChatCircle,
  CopySimple,
  DotsThreeOutlineVertical,
  Eye,
  PencilSimple,
  TrashSimple,
} from '@phosphor-icons/react';
import MenuItems from './MenuItems';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteCourse } from '../../utils/ApiCalls';

/* eslint-disable react/prop-types */
export default function SettingMenu({
  buttonIcon = <DotsThreeOutlineVertical size={28} />,
  id,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteErrorMsg, setDeleteErrorMsg] = useState('');
  const [deleteErrorOpen, setDeleteErrorOpen] = useState(false);

  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleOpenMenu = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (event) => {
    event.preventDefault();
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event) => {
    event.preventDefault();
    
    switch (event.target.id) {
      case settingMenuItems[0].text: // preview
        navigate(`/products/courses/${id}/outline`);
        break;
      case settingMenuItems[1].text: // edit
        break;
      case settingMenuItems[2].text: // comments
        break;
      case settingMenuItems[3].text: // duplicate
        break;
      case settingMenuItems[4].text: // delete
        handleDeleteCourse(id);
        break;
      default:
        break;
    }
    setAnchorEl(null);
  };

  const handleDeleteCourse = (id) => {
    deleteCourse(id).then((data) => {
      if (data.request.status === 200 || data.request.status === 201) {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setDeleteErrorMsg('Server error, try again later!');
      }
    });
  };

  useEffect(() => {
    setDeleteErrorOpen(deleteErrorMsg === '' ? false : true);
  }, [deleteErrorMsg]);

  return (
    <>
      <IconButton
        id="setting-menu-button"
        aria-controls={open ? 'setting-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpenMenu}
      >
        {buttonIcon}
      </IconButton>
      <Menu
        id="setting-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'setting-menu-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItems
          items={settingMenuItems}
          handlerFunction={handleMenuItemClick}
        />
      </Menu>

      {!!deleteErrorMsg && (
        <Snackbar
          open={deleteErrorOpen}
          autoHideDuration={6000}
          onClose={() => setDeleteErrorOpen(false)}
        >
          <Alert
            severity="error"
            sx={{ width: '100%' }}
            onClose={() => setDeleteErrorOpen(false)}
          >
            {deleteErrorMsg}
          </Alert>
        </Snackbar>
      )}
    </>
  );
}

const settingMenuItems = [
  {
    Icon: Eye,
    text: 'Preview',
  },
  {
    Icon: PencilSimple,
    text: 'Edit',
  },
  {
    Icon: ChatCircle,
    text: 'Manage Comments',
  },
  {
    Icon: CopySimple,
    text: 'Duplicate',
  },
  {
    Icon: TrashSimple,
    text: 'Delete',
  },
];
