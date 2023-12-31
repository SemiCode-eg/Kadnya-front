import { Outlet } from 'react-router-dom'
import CustomCard from '../../components/customCard/CustomCard'
import MiniSide from '../../components/miniSide/MiniSide'
import GoBackBtn from '../../components/goBackBtn/GoBackBtn'

const tabs = [
  { title: 'Outline', path: 'outline' },
  { title: 'Certificate', path: 'certificate' },
  { title: 'Settings', path: 'settings' },
]

function SingleCourse() {
  return (
    <CustomCard>
      <div className="flex lg:flex-row flex-col lg:gap-5 gap-10 mt-5">
        <div className="flex lg:flex-col flex-row lg:justify-normal items-center justify-between gap-[60px]">
          <div className="flex items-center self-start gap-[9px]">
            <GoBackBtn />
            <p className="text-sky-950 text-[31px]">Course</p>
          </div>
          <div className="flex-1">
            <MiniSide tabs={tabs} />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <Outlet />
        </div>
      </div>
    </CustomCard>
  )
}

export default SingleCourse
