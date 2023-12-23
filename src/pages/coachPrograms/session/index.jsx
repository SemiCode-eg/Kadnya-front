import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { deleteSession, updateSession } from '../../../api/coach'
import { Container, Typography } from '@mui/material'
import EditForm from '../../../components/coachPrograms/session/editForm'
import useCoachSession from '../../../hooks/use-coach-session'
import HandleErrorLoad from '../../../components/handleErrorLoad'
import useCoachSessionReducer from '../../../hooks/use-coach-session-reducer'

export default function Session() {
  const { sessionId } = useParams()
  const { sessionData, errorMsg, loading } = useCoachSession(sessionId)
  const { session, dispatchSession, sessionKeys } = useCoachSessionReducer()
  const [sessionLoading, setSessionLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    dispatchSession({ type: sessionKeys.INIT, payload: sessionData })
  }, [sessionData, dispatchSession, sessionKeys.INIT])

  useEffect(() => {
    setError(errorMsg)
  }, [errorMsg])

  const handleSave = async () => {
    if (session.title.trim() === '')
      return setError('Please, type session title')
    if (session.description.trim() === '')
      return setError('Please, type session description')

    setSessionLoading(true)
    await updateSession(sessionId, session)
    setSessionLoading(false)
  }

  const handleDelete = async () => {
    setSessionLoading(true)
    await deleteSession(sessionId)
    setSessionLoading(false)
  }

  return (
    <Container maxWidth="sm">
      <HandleErrorLoad
        loading={loading || sessionLoading}
        errorMsg={error}
        setErrorMsg={setError}>
        <Typography variant="h3" component="h1">
          {sessionData.title}
        </Typography>
        <EditForm
          session={session}
          dispatchSession={dispatchSession}
          sessionKeys={sessionKeys}
          onSave={handleSave}
          onDelete={handleDelete}
          setError={setError}
        />
      </HandleErrorLoad>
    </Container>
  )
}
