import { Box } from '@mui/material'

function CustomTabPanel({ children, value, type, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== type}
      id={`simple-tabpanel-${type}`}
      aria-labelledby={`simple-tab-${type}`}
      {...other}>
      {value === type && (
        <Box className="!w-full">
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

export default CustomTabPanel
