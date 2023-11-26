import { Divider, ListItemIcon, MenuItem } from '@mui/material'
import { red } from '@mui/material/colors'

/* eslint-disable react/prop-types */
export default function MenuItems({ items, handlerFunction, iconClasses }) {
  return items.map(({ text, Icon }, index) => (
    <>
      {text === 'Delete' && <Divider key={index} />}
      <MenuItem
        key={`${text}-${index}`}
        sx={
          text === 'Delete'
            ? { color: red[700], '&:hover': { backgroundColor: red[50] } }
            : undefined
        }
        id={text}
        onClick={handlerFunction}
      >
        {Icon && (
          <ListItemIcon>
            <Icon
              size={22}
              color={text === 'Delete' ? red[700] : undefined}
              className={iconClasses}
            />
          </ListItemIcon>
        )}
        {text}
      </MenuItem>
    </>
  ))
}
