import { useOutletContext } from 'react-router-dom'

function ProgramOutline() {
  const {
    // programData: { sessions },
    programId,
    setRefetch,
  } = useOutletContext()

  return <div></div>
}

export default ProgramOutline
