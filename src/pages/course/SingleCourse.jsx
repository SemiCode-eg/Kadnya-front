import { Outlet } from 'react-router-dom';
import Outline from './outline/Outline';
import CustomCard from '../../components/customCard/CustomCard';
import CourseHeader from '../../components/courseHeader/CourseHeader';
import MiniSide from '../../components/miniSide/MiniSide';

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
      <CourseHeader />
      <div
        className='flex gap-5 mt-5 h-[33rem]'
      >
        <MiniSide tabs={tabs} />
        <div className="w-full h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </CustomCard>
  );
}

export default SingleCourse;
