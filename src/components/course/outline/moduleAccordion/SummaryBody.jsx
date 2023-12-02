import { useState } from 'react'
import { PencilSimple, Plus } from '@phosphor-icons/react'
import FolderIcon from '../../../../assets/icons/FolderSimple.svg'
import MenuItems from '../../../menu/MenuItems'
import { Menu } from '@mui/material'

function SummaryBody({
  isClicked,
  Icon,
  iconClasses,
  setIsAddSubmodule,
  setIsEditModule,
  setIsAddLesson,
  title,
  isSubmodule
}) {
  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)
  
  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = event => {
    switch (event.target.id) {
      case addMenuItems[0].text: // Submodule
        setIsAddSubmodule(true)
        break
      case addMenuItems[1].text: // Lesson
        setIsAddLesson(true)
        break
      default:
        break
    }
    setAnchorEl(null)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return (
    <div className="flex justify-between flex-1 mr-2">
      <div className="flex items-center gap-2">
        {isClicked ? (
          <img src={FolderIcon} alt="folder" className="w-[25px]" />
        ) : (
          <Icon size={24} className={iconClasses} />
        )}
        <p className="font-[500] text-sm">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={e => {
            e.stopPropagation()
            setIsEditModule(true)
          }}>
          <PencilSimple size={15} weight="bold" />
        </button>
        <button
          onClick={e => {
            e.stopPropagation()
            handleClickListItem(e)
          }}
          id="plus-add-button">
          <Plus size={15} weight="bold" />
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
          }}>
          <MenuItems
            items={isSubmodule ? [{ text: 'Lesson' }] : addMenuItems}
            handlerFunction={handleMenuItemClick}
          />
        </Menu>
      </div>
    </div>
  )
}

export default SummaryBody

const addMenuItems = [
  {
    text: 'Submodule',
  },
  {
    text: 'Lesson',
  },
]
