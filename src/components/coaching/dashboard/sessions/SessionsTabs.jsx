/* eslint-disable react/prop-types */
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

const MuiSessionsTabs = styled(Tabs)(() => ({
  '& .MuiTabs-indicator': {
    backgroundColor: 'black',
  },
}));

function SessionsTabs({ value, handleChange, a11yProps }) {
  return (
    <Box>
      <MuiSessionsTabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        className="!mb-8"
      >
        <Tab
          label="Upcoming"
          {...a11yProps(0)}
          className="!opacity-90 hover:!opacity-100 !duration-75 !font-semibold !text-md !capitalize !text-black !p-0"
        />
        <Tab
          label="Past"
          {...a11yProps(1)}
          className="!opacity-90 hover:!opacity-100 !duration-75 !font-semibold !text-md !capitalize !text-black !p-0"
        />
        <Tab
          label="Pending"
          {...a11yProps(2)}
          className="!opacity-90 hover:!opacity-100 !duration-75 !font-semibold !text-md !capitalize !text-black !p-0"
        />
      </MuiSessionsTabs>
    </Box>
  );
}

export default SessionsTabs;
