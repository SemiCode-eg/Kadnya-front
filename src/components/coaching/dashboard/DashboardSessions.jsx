/* eslint-disable react/prop-types */
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SessionsTabs = styled(Tabs)(() => ({
  '& .MuiTabs-indicator': {
    backgroundColor: 'black',
  },
}));

function DashboardSessions() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get('filter');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(
      newValue === 0
        ? '?filter=upcoming'
        : newValue === 1
        ? '?filter=past'
        : '?filter=pending'
    );
  };

  useEffect(() => {
    if (filter === 'upcoming') {
      setValue(0);
    } else if (filter === 'past') {
      setValue(1);
    } else if (filter === 'pending') {
      setValue(2);
    } else {
      setValue(0);
    }
  }, [filter]);

  return (
    <div className="flex-[0.75] shadow p-5 rounded-[15px]">
      <p className="text-sky-950 text-lg text-left font-semibold mb-5">
        Sessions
      </p>
      <Box sx={{ width: '100%' }}>
        <Box>
          <SessionsTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
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
          </SessionsTabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </div>
  );
}

export default DashboardSessions;
