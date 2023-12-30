import { useState } from 'react'
import { Button, Menu, MenuItem, Typography } from '@mui/material'
import { Plus } from '@phosphor-icons/react'
import FileResource from './FileResource'
import LinkResource from './LinkResource'

export default function Resources({
  fileResources,
  addFileResource,
  deleteFileResource,
  linkResources,
  addLinkResources,
  deleteLinkResource,
  editLinkResource,
  setError,
}) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleOpenResourceMenu = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleAddFileResource = event => {
    handleClose()
    const file = event.target.files[0]

    if (!file) return

    if (file.type !== 'application/pdf') {
      setError('Wrong file type. Please select a PDF file.')
      return
    }

    // Check file size (in bytes)
    if (file.size > 20 * 1024 * 1024) {
      // 5 MB
      setError('File is too large. Please select a smaller file.')
      return
    }

    // Check file size (in bytes)
    if (file.name.length > 100) {
      setError('Maximum file name characters is 100.')
      return
    }

    addFileResource(file)
  }

  const handleAddLinkResource = () => {
    handleClose()
    addLinkResources()
  }

  return (
    <div className="flex flex-col gap-4 items-start">
      <Typography variant="h6">Resources</Typography>

      {!!fileResources?.length && (
        <ul className="w-full flex flex-col gap-3 ml-3">
          {fileResources?.map((fileResource, index) => (
            <FileResource
              key={`fileResource-${index}`}
              index={index}
              fileResource={fileResource}
              deleteFileResource={deleteFileResource}
            />
          ))}
        </ul>
      )}

      {!!linkResources?.length && (
        <ul className="w-full flex flex-col gap-3 ml-3">
          {linkResources?.map((linkResource, index) => (
            <LinkResource
              key={`linkResource-${index}`}
              index={index}
              linkResource={linkResource}
              deleteLinkResource={deleteLinkResource}
              editLinkResource={editLinkResource}
            />
          ))}
        </ul>
      )}

      {!fileResources?.length && !linkResources?.length && (
        <p className="ml-3">No resources added yet!</p>
      )}

      <Button
        id="add-resource-button"
        aria-controls={open ? 'resources-type-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        className="!capitalize !text-gray-800"
        onClick={handleOpenResourceMenu}
        startIcon={<Plus />}>
        Add Resource
      </Button>
      <Menu
        id="resources-type-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'add-resource-button',
        }}>
        <MenuItem className="!text-sm">
          <label htmlFor="resource-file-input">File Resource</label>
          <input
            id="resource-file-input"
            type="file"
            onChange={handleAddFileResource}
            style={{
              clip: 'rect(0 0 0 0)',
              clipPath: 'inset(50%)',
              height: 1,
              overflow: 'hidden',
              position: 'absolute',
              bottom: 0,
              left: 0,
              whiteSpace: 'nowrap',
              width: 1,
            }}
          />
        </MenuItem>
        <MenuItem className="!text-sm" onClick={handleAddLinkResource}>
          Link Resource
        </MenuItem>
      </Menu>
    </div>
  )
}
