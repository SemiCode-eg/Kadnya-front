/* eslint-disable react/prop-types */
import { Menu } from '@mui/material'
import { CaretDown, Eye, EyeSlash } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import MenuItems from '../menu/MenuItems'

function DraftBtn({
  draftState,
  setDraftState,
  draftMenuItems = [
    {
      Icon: EyeSlash,
      text: 'Draft',
    },
    {
      Icon: Eye,
      text: 'Published',
    },
  ],
}) {
  const [title, setTitle] = useState(draftMenuItems[0].text)
  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)
  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    setTitle(draftState ? draftMenuItems[0].text : draftMenuItems[1].text)
  }, [draftMenuItems, draftState])

  const handleMenuItemClick = event => {
    switch (event.target.id) {
      case draftMenuItems[0].text: // draft
        setTitle(draftMenuItems[0].text)
        setDraftState(true)
        break
      case draftMenuItems[1].text: // publish
        setTitle(draftMenuItems[1].text)
        setDraftState(false)
        break
      default:
        break
    }
    setAnchorEl(null)
  }

  return (
    <>
      <button
        className="rounded-[15px] cursor-pointer bg-teal-500 text-white font-[500] flex items-center gap-1 py-[4px] px-[9px]"
        onClick={handleClickListItem}
        type="button">
        {draftState ? <EyeSlash weight="bold" /> : <Eye weight="bold" />}
        <span className="capitalize">{title}</span>
        <CaretDown />
      </button>
      <Menu
        id="draft-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        <MenuItems
          items={draftMenuItems}
          handlerFunction={handleMenuItemClick}
        />
      </Menu>
    </>
  )
}

export default DraftBtn
