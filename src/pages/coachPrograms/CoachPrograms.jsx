import { Outlet } from 'react-router-dom';
import CustomCard from '../../components/customCard/CustomCard';
import GoBackBtn from '../../components/goBackBtn/GoBackBtn';
import MiniSide from '../../components/miniSide/MiniSide';
import ProgramHeader from '../../components/coachPrograms/ProgramHeader';

const tabs = [
  {
    title: 'Clients',
    path: 'clients',
  },
  {
    title: 'Package outline',
    path: 'sessions',
  },
  {
    title: 'Offers',
    path: 'offers',
  },
  {
    title: 'Sittings',
    path: 'sittings',
  },
];

function CoachPrograms() {
  return (
    <CustomCard>
      <div className="flex lg:flex-row flex-col lg:gap-5 gap-10 mt-5">
        <div className="flex lg:flex-col flex-row lg:justify-normal items-center justify-between gap-[60px]">
          <div className="flex items-center self-start gap-[9px]">
            <GoBackBtn />
            <p className="text-sky-950 text-[31px]">Coaching</p>
          </div>
          <MiniSide tabs={tabs} />
        </div>
        <div className="w-full">
          <ProgramHeader title="Program" ReleaseDate="12/10/2022" />
          <Outlet />
        </div>
      </div>
    </CustomCard>
  );
}

export default CoachPrograms;
