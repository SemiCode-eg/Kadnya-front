import MiniSide from '../../components/miniSide/MiniSide';
import AllProducts from './allProducts/AllProducts';
import Courses from './courses/Courses';
import { Outlet } from 'react-router-dom';
import SearchInput from '../../components/SearchInput';
import CustomCard from '../../components/customCard/CustomCard';

const tabs = [
  {
    title: 'All Products',
    path: 'all',
    content: <AllProducts />,
  },
  { title: 'Courses', path: 'courses', content: <Courses /> },
  { title: 'Coaching', path: 'coaching', content: 'Coaching' },
  { title: 'Community', path: 'community', content: 'Community' },
  { title: 'Codcasts', path: 'codcasts', content: 'Podcasts' },
];

export default function Products() {
  const handleSubmit = () => {};

  return (
    <CustomCard
      titleComponent={
        <h1 className="font-bold text-2xl w-full ml-1">Products</h1>
      }
    >
      <SearchInput onSubmit={handleSubmit} />
      <div className="flex gap-5 mt-5 h-[33rem]">
        <MiniSide tabs={tabs} />
        <div className="mainContent w-full h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </CustomCard>
  );
}
