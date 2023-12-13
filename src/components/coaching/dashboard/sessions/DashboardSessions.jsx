import { useLocation, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import SessionCards from './sessionCard/SessionCards'
import NoEvent from './NoEvent'
import CustomTabs from '../../../customTabs/CustomTabs'
import CustomTabPanel from './CustomTabPanel'
import useCoachSessions from '../../../../hooks/use-coach-sessions'
import HandleErrorLoad from '../../../handleErrorLoad'

function a11yProps(type) {
  return {
    id: `simple-tab-${type}`,
    'aria-controls': `simple-tabpanel-${type}`,
  }
}

function DashboardSessions() {
  const [filterValue, setFilterValue] = useState(sessionsType[0].id)
  const { sessionsData, errorMsg, loading } = useCoachSessions(
    sessionsType.find(type => type.id === filterValue).label,
  )
  const navigate = useNavigate()
  const location = useLocation()

  const handleChange = (_, newValue) => {
    setFilterValue(newValue)
    const selectedType = sessionsType.find(type => type.id === newValue)
    navigate(`?filter=${selectedType.label}`)
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const filter = queryParams.get('filter')
    const defaultFilter = sessionsType[0].id

    const selectedType = sessionsType.find(type => type.label === filter)
    setFilterValue(selectedType ? selectedType.id : defaultFilter)
  }, [location.search])

  return (
    <div className="flex-[0.75] shadow-sm p-5 rounded-[15px] border">
      <p className="text-sky-950 text-lg text-left font-semibold mb-5">
        Sessions
      </p>
      <Box sx={{ width: '100%' }}>
        <CustomTabs
          value={filterValue}
          handleChange={handleChange}
          a11yProps={a11yProps}
          tabs={sessionsType}
        />
        <HandleErrorLoad loading={loading} errorMsg={errorMsg}>
          {sessionsType.map(type => (
            <CustomTabPanel value={filterValue} type={type.id} key={type.id}>
              {sessionsData.length > 0 ? (
                <SessionCards data={sessionsData} />
              ) : (
                <NoEvent title={type.label} />
              )}
            </CustomTabPanel>
          ))}
        </HandleErrorLoad>
      </Box>
    </div>
  )
}

export default DashboardSessions

const sessionsType = [
  { id: 0, label: 'upcoming' },
  { id: 1, label: 'past' },
  { id: 2, label: 'pending' },
]
