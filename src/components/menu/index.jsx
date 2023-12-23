import { Alert, IconButton, Menu, Snackbar } from '@mui/material'
import {
  ChatCircle,
  CopySimple,
  DotsThreeOutlineVertical,
  Eye,
  PencilSimple,
  TrashSimple,
} from '@phosphor-icons/react'
import MenuItems from './MenuItems'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const createMenuItem = (Icon, text) => ({ Icon, text })

export default function SettingMenu({
  buttonIcon = <DotsThreeOutlineVertical size={28} />,
  id,
  isPreview = true,
  isComment = true,
  isDuplicate = true,
  isEdit = true,
  handleDelete = () => {},
  deleteLoading,
  deleteErrorMsg,
  previewPath = '',
  editPath = '',
}) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [deleteErrorOpen, setDeleteErrorOpen] = useState(false)

  const open = Boolean(anchorEl)

  const navigate = useNavigate()

  const handleOpenMenu = event => {
    event.preventDefault()
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = event => {
    event.preventDefault()
    setAnchorEl(null)
  }

  const settingMenuItems = useMemo(() => {
    const menuItems = []

    if (isPreview) {
      menuItems.push(createMenuItem(Eye, 'Preview'))
    }

    if (isEdit) {
      menuItems.push(createMenuItem(PencilSimple, 'Edit'))
    }

    if (isDuplicate) {
      menuItems.push(createMenuItem(CopySimple, 'Duplicate'))
    }

    if (isComment) {
      menuItems.push(createMenuItem(ChatCircle, 'Manage Comments'))
    }

    menuItems.push(
      createMenuItem(TrashSimple, deleteLoading ? 'Deleting...' : 'Delete'),
    )

    return menuItems
  }, [deleteLoading, isComment, isDuplicate, isEdit, isPreview])

  const handleMenuItemClick = event => {
    event.preventDefault()

    switch (event.target.id) {
      case 'Preview': // preview
        navigate(previewPath)
        setAnchorEl(null)
        break
      case 'Edit': // edit
        navigate(editPath)
        setAnchorEl(null)
        break
      case 'Manage Comments': // comments
        setAnchorEl(null)
        break
      case 'Duplicate': // duplicate
        setAnchorEl(null)
        break
      case 'Delete': // delete
        handleDelete(id)
        break
      default:
        setAnchorEl(null)
        break
    }
  }
  useEffect(() => {
    setDeleteErrorOpen(deleteErrorMsg === '' ? false : true)
  }, [deleteErrorMsg])

  return (
    <>
      <IconButton
        id="setting-menu-button"
        aria-controls={open ? 'setting-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpenMenu}>
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
        }}>
        <MenuItems
          items={settingMenuItems}
          handlerFunction={handleMenuItemClick}
        />
      </Menu>

      {!!deleteErrorMsg && (
        <Snackbar
          open={deleteErrorOpen}
          autoHideDuration={6000}
          onClose={() => setDeleteErrorOpen(false)}>
          <Alert
            severity="error"
            sx={{ width: '100%' }}
            onClose={() => setDeleteErrorOpen(false)}>
            {deleteErrorMsg}
          </Alert>
        </Snackbar>
      )}
    </>
  )
}
