import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Typography } from '@mui/material'
import EditForm from '../../../components/coachPrograms/session/editForm'
import useCoachSession from '../../../hooks/use-coach-session'
import HandleErrorLoad from '../../../components/handleErrorLoad'
import useCoachSessionReducer from '../../../hooks/use-coach-session-reducer'
import { deleteSession, updateSession } from '../../../api/coachProgram'

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
    if (session.agendas.length === 0)
      return setError("Please, add session's agendas")
    if (
      session.fileResources.length === 0 &&
      session.linkResources.length === 0
    )
      return setError("Please, add session's Resources")

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
    <Container className="!max-w-3xl">
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
