import { Outlet, useParams } from 'react-router-dom'
import CustomCard from '../../components/customCard/CustomCard'
import GoBackBtn from '../../components/goBackBtn/GoBackBtn'
import MiniSide from '../../components/miniSide/MiniSide'
import useCoachProgram from '../../hooks/use-coach-program'
import HandleErrorLoad from '../../components/handleErrorLoad'
import ProgramHeader from '../../components/coachPrograms/ProgramHeader'

const tabs = [
  {
    title: 'Clients',
    path: 'clients',
  },
  {
    title: 'Package outline',
    path: 'outline',
  },
  {
    title: 'Settings',
    path: 'settings',
  },
]

function CoachPrograms() {
  const { programId } = useParams()
  const { programData, loading, errorMsg, setRefetch } =
    useCoachProgram(programId)

  return (
    <CustomCard>
      <div className="flex lg:flex-row flex-col lg:gap-5 gap-10 mt-5">
        <div className="flex lg:flex-col flex-row lg:justify-normal items-center justify-between gap-[60px]">
          <div className="flex items-center self-start gap-[9px]">
            <GoBackBtn path="/products/coaching/programs" />
            <p className="text-sky-950 text-[31px]">Coaching</p>
          </div>
          <MiniSide tabs={tabs} />
        </div>
        <div className="w-full">
          <ProgramHeader
            title={programData?.title}
            ReleaseDate={programData?.ReleaseDate}
            image={programData?.image}
          />
          <HandleErrorLoad errorMsg={errorMsg} loading={loading}>
            <Outlet context={{ programData, programId, setRefetch }} />
          </HandleErrorLoad>
        </div>
      </div>
    </CustomCard>
  )
}

export default CoachPrograms
