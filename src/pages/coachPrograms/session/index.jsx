import { useParams } from 'react-router-dom'
import { Container, Typography } from '@mui/material'
import EditForm from '../../../components/coachPrograms/session/editForm'

export default function Session() {
  const { programId, sessionId } = useParams()

  return (
    <Container>
      <Typography></Typography>
      <EditForm />
    </Container>
  )
}
