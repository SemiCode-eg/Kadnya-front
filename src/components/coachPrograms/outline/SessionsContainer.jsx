import EmptySessionMsg from './EmptySessionMsg'
import SessionCard from './sessionCard/SessionCard'

function SessionsContainer({ sessionsData }) {
  return (
    <div className="w-full text-left flex flex-col gap-2">
      {sessionsData?.length > 0 ? (
        sessionsData?.map(session => (
          <SessionCard key={session.id} session={session} />
        ))
      ) : (
        <>
          <EmptySessionMsg />
        </>
      )}
    </div>
  )
}

export default SessionsContainer
