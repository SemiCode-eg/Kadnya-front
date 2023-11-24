import { Pagination } from '@mui/material';
import ProductCard from './ProductCard';
import { deleteCourse } from '../../../utils/ApiCalls';
import { useResolvedPath } from 'react-router-dom';

/* eslint-disable react/prop-types */
export default function ProductCards({
  data = [],
  page = 1,
  onPagination = () => {},
  productPerPage = 10,
  targerCousesRefetch = () => {},
}) {
  const { pathname } = useResolvedPath();

  return (
    <>
      <ul className="flex flex-col gap-6 sm:pr-5 w-full h-[40dvh] overflow-y-scroll overflow-x-hidden">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            category={item.category.name}
            date={item.ReleaseDate}
            subscribersCount={item.clients.length}
            targerCousesRefetch={targerCousesRefetch}
            endPointDelete={deleteCourse}
            path={`${pathname}/${item.id}/outline`}
            editPath={`${pathname}/${item.id}/sittings`}
          />
        ))}
      </ul>
      <Pagination
        count={Math.ceil(data.length / productPerPage)}
        page={page}
        onChange={onPagination}
        classes={{
          root: 'absolute -bottom-[4.2rem] right-0',
        }}
      />
    </>
  );
}
