/* eslint-disable react/prop-types */
import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

const MuiSessionsTabs = styled(Tabs)(() => ({
  '& .MuiTabs-indicator': {
    backgroundColor: 'black',
  },
}))

function CustomTabs({ value, handleChange, a11yProps, tabs = [] }) {
  return (
    <Box>
      <MuiSessionsTabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        className="!mb-8 !border-b border-b-gray-300">
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            label={tab.label}
            {...a11yProps(tab.id)}
            className="!opacity-90 hover:!opacity-100 !duration-75 !font-semibold !text-md !capitalize !text-black !p-0"
          />
        ))}
      </MuiSessionsTabs>
    </Box>
  )
}

export default CustomTabs
