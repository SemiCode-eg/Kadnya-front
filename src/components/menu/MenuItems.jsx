import { Divider, ListItemIcon, MenuItem } from '@mui/material'
import { red } from '@mui/material/colors'

/* eslint-disable react/prop-types */
export default function MenuItems({ items, handlerFunction, iconClasses }) {
  return items.map(({ text, Icon }, index) => (
    <div key={`${text}-${index}`}>
      {text === 'Delete' && <Divider className="!mb-1" />}
      <MenuItem
        sx={
          text === 'Delete'
            ? { color: red[700], '&:hover': { backgroundColor: red[50] } }
            : undefined
        }
        id={text}
        onClick={handlerFunction}>
        {Icon && (
          <ListItemIcon id={text}>
            <Icon
              size={22}
              color={text === 'Delete' ? red[700] : undefined}
              className={iconClasses}
              id={text}
            />
          </ListItemIcon>
        )}
        {text}
      </MenuItem>
    </div>
  ))
}
