import { Link, Outlet } from 'react-router-dom';
import Outline from './outline/Outline';
import CustomCard from '../../components/customCard/CustomCard';
import MiniSide from '../../components/miniSide/MiniSide';
import { ArrowLeft } from '@phosphor-icons/react';
import OutlineHeader from '../../components/outlineHeader/OutlineHeader';

const tabs = [
  {
    title: 'Outline',
    path: 'outline',
    content: <Outline />,
  },
  { title: 'Questions', path: 'questions', content: 'Questions' },
  { title: 'Sittings', path: 'sittings', content: 'Sittings' },
  { title: 'Results', path: 'results', content: 'Results' },
];

function SingleCourse() {
  return (
    <CustomCard>
      <div className="flex gap-5 mt-5 h-[33rem]">
        <div className="flex flex-col gap-[60px]">
          <div className="flex items-center gap-[9px]">
            <Link
              to={-1}
              className="w-[50px] h-[50px] text-white rounded-full flex items-center justify-center duration-100 ease-out bg-gradient-to-r from-violet-300 to-teal-300 hover:from-transparent hover:to-transparent hover:text-sky-950 hover:border-[2px] hover:border-teal-300"
            >
              <ArrowLeft size={35} />
            </Link>
            <p className="text-sky-950 text-[31px]">Course</p>
          </div>
          <div className="flex-1">
            <MiniSide tabs={tabs} />
          </div>
        </div>
        <div className="w-full h-full overflow-auto">
          <OutlineHeader />
          <Outlet />
        </div>
      </div>
    </CustomCard>
  );
}

export default SingleCourse;