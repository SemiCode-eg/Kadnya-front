/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import SessionCards from './sessionCard/SessionCards';
import NoEvent from './NoEvent';
import CustomTabs from '../../../customTabs/CustomTabs';

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
        <Box className="!w-full">
          <div>{children}</div>
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
    <div className="flex-[0.75] shadow-sm p-5 rounded-[15px] border">
      <p className="text-sky-950 text-lg text-left font-semibold mb-5">
        Sessions
      </p>
      <Box sx={{ width: '100%' }}>
        <CustomTabs
          value={value}
          handleChange={handleChange}
          a11yProps={a11yProps}
        />
        <CustomTabPanel value={value} index={0}>
          {upcomingSessionsData.length > 0 ? (
            <SessionCards data={upcomingSessionsData} />
          ) : (
            <NoEvent title="upcoming" />
          )}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NoEvent title="past" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <NoEvent title="pending" />
        </CustomTabPanel>
      </Box>
    </div>
  );
}

export default DashboardSessions;

const upcomingSessionsData = [
  {
    id: 1,
    image: 'dsf',
    userName: 'Mohamed',
    sessionTitle: 'Session 1',
    date: '25/10/2020',
    time: '4:00 PM',
    coachingType: 'coaching package 1',
  },
  {
    id: 2,
    image: 'dsf',
    userName: 'Mohamed',
    sessionTitle: 'Session 3',
    date: '25/10/2020',
    time: '5:00 PM',
    coachingType: 'coaching package',
  },
];
