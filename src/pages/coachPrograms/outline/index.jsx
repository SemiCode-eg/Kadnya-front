import { useParams } from 'react-router-dom'
import useCoachProgramSessions from '../../../hooks/use-coach-program-sessions'
import HandleErrorLoad from '../../../components/handleErrorLoad'
import ProgramOutlineHeader from '../../../components/coachPrograms/outline/ProgramOutlineHeader'
import SessionsCount from '../../../components/coachPrograms/outline/SessionsCount'
import SessionsContainer from '../../../components/coachPrograms/outline/SessionsContainer'

function ProgramOutline() {
  const { programId } = useParams
  const { sessionsData, loading, errorMsg, setRefetch } =
    useCoachProgramSessions(programId)

  return (
    <div className="flex flex-col gap-5 items-start min-h-[45vh]">
      <ProgramOutlineHeader setRefetch={setRefetch} />
      <HandleErrorLoad errorMsg={errorMsg} loading={loading}>
        <SessionsCount count={sessionsData?.length} />
        <SessionsContainer sessionsData={sessionsData} />
      </HandleErrorLoad>
    </div>
  )
}

export default ProgramOutline
