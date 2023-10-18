import { Outlet } from 'react-router-dom';
import MiniSide from '../../components/miniSide/MiniSide';
import Outline from './outline/Outline';

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
    <div>
      <MiniSide tabs={tabs} Outlet={Outlet} />
    </div>
  );
}

export default SingleCourse;
