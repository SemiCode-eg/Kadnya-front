import { useState } from 'react'
import MainButton from '../../../mainButton/MainButton'
import MenuItems from '../../../menu/MenuItems'
import {
  Stack,
  FolderSimple,
  Folders,
  File,
  CheckSquareOffset,
} from '@phosphor-icons/react'
import { Menu } from '@mui/material'
import styled from '@emotion/styled'

const MUIMenu = styled(Menu)(() => ({
  '& .MuiList-root': {
    padding: '0',
  },
  '& .MuiPaper-root': {
    marginTop: '2px',
    borderRadius: '10px',
    width: '9.8rem',
  },
  '& .MuiMenuItem-root': {
    padding: '15px',
    color: '#fff',
    fontSize: '17px',
    [`&#Module`]: {
      background:
        'linear-gradient(180deg, rgba(40,172,166,1) 38%, rgba(82,163,194,1) 93%)',
    },
    [`&#Submodule`]: {
      background:
        'linear-gradient(180deg, rgba(82,163,194,1) 38%, rgba(109,156,209,1) 93%)',
    },
    [`&#Lesson`]: {
      background:
        'linear-gradient(180deg, rgba(109,156,209,1) 35%, rgba(140,157,225,1) 93%)',
    },
    [`&#Quiz`]: {
      background:
        'linear-gradient(180deg, rgba(140,157,225,1) 30%, rgba(182,175,247,1) 85%)',
    },
    '&:hover': {
      opacity: '0.9',
    },
  },
}))

function AddContentMenu({
  setOpenModuleForm,
  setOpenSubModuleForm,
  setOpenLessonForm,
  setOpenQuizForm,
  coursesCount,
}) {
  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)
  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = event => {
    event.preventDefault()

    switch (event.target.id) {
      case addMenuItems[0].text: // Module
        setOpenModuleForm(true)
        break
      case addMenuItems[1].text: // Submodule
        setOpenSubModuleForm(true)
        break
      case addMenuItems[2].text: // Lesson
        setOpenLessonForm(true)
        break
      case addMenuItems[3].text: // Quiz
        setOpenQuizForm(true)
        break
      default:
        break
    }
    handleClose()
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className="relative">
      <MainButton
        text="Add Content"
        icon={
          <>
            <Stack size={25} weight="fill" />
          </>
        }
        reverse={true}
        className={`text-white hover:bg-teal-200 hover:text-sky-950 !px-5 !text-sm ${
          anchorEl === null
            ? 'bg-sky-950'
            : 'bg-gradient-to-b from-[#28ACA6] to-[#28ACA6]'
        }`}
        handleClick={handleClickListItem}
        id="add-button"
      />
      <MUIMenu
        id="add-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'add-button',
        }}>
        <MenuItems
          items={
            coursesCount > 0
              ? addMenuItems
              : addMenuItems.filter(item => item.text === addMenuItems[0].text)
          }
          handlerFunction={handleMenuItemClick}
          iconClasses="text-white"
        />
      </MUIMenu>
    </div>
  )
}

export default AddContentMenu

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
]
