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
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteCourse } from '../../utils/ApiCalls';

/* eslint-disable react/prop-types */
export default function SettingMenu({
  buttonIcon = <DotsThreeOutlineVertical size={28} />,
  id,
  setRefetch = () => {},
  isPreview = true,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
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

  const settingMenuItems = useMemo(() => {
    const menuItems = [
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
        text: deleteLoading ? 'Deleting...' : 'Delete',
      },
    ];

    if (isPreview) {
      return [
        {
          Icon: Eye,
          text: 'Preview',
        },
        ...menuItems,
      ];
    } else {
      return [...menuItems];
    }
  }, [deleteLoading, isPreview]);

  const handleMenuItemClick = (event) => {
    event.preventDefault();

    switch (event.target.id) {
      case 'Preview': // preview
        navigate(`/products/courses/${id}/outline`);
        setAnchorEl(null);
        break;
      case 'Edit': // edit
        navigate(`/products/courses/${id}/sittings`);
        setAnchorEl(null);
        break;
      case 'Manage Comments': // comments
        setAnchorEl(null);
        break;
      case 'Duplicate': // duplicate
        setAnchorEl(null);
        break;
      case 'Delete': // delete
        handleDeleteCourse(id);
        break;
      default:
        setAnchorEl(null);
        break;
    }
  };

  const handleDeleteCourse = (id) => {
    setDeleteErrorMsg('');
    setDeleteLoading(true);

    deleteCourse(id).then((data) => {
      setDeleteLoading(false);
      if (
        !data.request ||
        data.request.status === 200 ||
        data.request.status === 204
      ) {
        if (!isPreview) {
          navigate(`/products/courses`);
        } else {
          setRefetch((prev) => !prev);
          setAnchorEl(null);
        }
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
