/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import CustomTable from '../../../components/customTable/CustomTable'
import CustomTabs from '../../../components/customTabs/CustomTabs'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box className="!w-full">
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

function createData(id, name, email, date, progress) {
  const [day, month, year] = date.split('/')
  const formattedDate = new Date(`${year}-${month}-${day}`)

  return {
    id,
    name,
    email,
    date: formattedDate,
    result: progress,
  }
}

function ProgramClients() {
  const [value, setValue] = useState(0)
  const navigate = useNavigate()

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const filter = queryParams.get('filter')

  const handleChange = (event, newValue) => {
    setValue(newValue)
    navigate(newValue === 0 ? '?filter=active' : '?filter=past')
  }

  useEffect(() => {
    if (filter === 'active') {
      setValue(0)
    } else if (filter === 'past') {
      setValue(1)
    } else {
      setValue(0)
    }
  }, [filter])

  return (
    <Box sx={{ width: '100%' }}>
      <CustomTabs
        value={value}
        handleChange={handleChange}
        a11yProps={a11yProps}
        tabs={tabs}
      />
      <CustomTabPanel value={value} index={0}>
        {rows.length > 0 ? (
          <CustomTable rows={rows} headCells={headCells} title="your clients" />
        ) : (
          <p className="mt-10 text-center text-neutral-500 text-lg italic">
            No active clients.
          </p>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <p className="mt-10 text-center text-neutral-500 text-lg italic">
          No past clients.
        </p>
      </CustomTabPanel>
    </Box>
  )
}

export default ProgramClients

const tabs = [
  { id: 0, label: 'Active' },
  { id: 1, label: 'Past' },
]

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'date',
    numeric: false,
    disablePadding: false,
    label: 'Date Joined',
  },
  {
    id: 'progress',
    numeric: true,
    disablePadding: false,
    label: 'Program Progress',
  },
]

const rows = [
  createData(
    1,
    'name1',
    'email@email.com',
    '19/2/2022',
    'Completed 1 of 14 sessions',
  ),
  createData(
    2,
    'name2',
    'email@email.com',
    '19/1/2021',
    'Completed 0 of 14 sessions',
  ),
  createData(
    3,
    'name3',
    'email@email.com',
    '19/1/2020',
    'Completed 0 of 14 sessions',
  ),
  createData(
    4,
    'name4',
    'email@email.com',
    '19/2/2020',
    'Completed 2 of 14 sessions',
  ),
  createData(
    5,
    'name5',
    'email@email.com',
    '19/1/2020',
    'Completed 0 of 14 sessions',
  ),
  createData(
    6,
    'name6',
    'email@email.com',
    '19/1/2020',
    'Completed 3 of 14 sessions',
  ),
  createData(
    7,
    'name7',
    'email@email.com',
    '19/1/2019',
    'Completed 0 of 14 sessions',
  ),
]
