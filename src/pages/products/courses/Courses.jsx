import { Presentation } from '@phosphor-icons/react';
import { useCallback, useMemo, useState } from 'react';
import ProductsHead from '../../../components/Product/ProductsHead';
import ProductCards from '../../../components/Product/card/ProductCards';
import useCourse from '../../../hooks/use-courses';
import AddCouseForm from './AddCourseForm';
import HandleErrorLoad from '../../../components/handleErrorLoad';

const COURSE_PER_PAGE = 4;

export default function Courses() {
  const { courses, errorMsg, loading } = useCourse();
  const [sortKey, setSortKey] = useState(sortOptions[0].value);
  const [page, setPage] = useState(1);

  const handleSortSelect = (event) => {
    const newSortKey = event.target.value;
    setSortKey(newSortKey);
  };
  const handleSort = useCallback(
    (a, b) => {
      switch (sortKey) {
        case 'NEWSET':
          return compareDates(a.ReleaseDate, b.ReleaseDate);
        case 'OLDEST':
          return compareDates(b.ReleaseDate, a.ReleaseDate);
        case 'MORE_SUBSCRIBERES':
          return compareNumber(b.clients.length, a.clients.length);
        case 'LESS_SUBSCRIBERES':
          return compareNumber(a.clients.length, b.clients.length);
      }
    },
    [sortKey]
  );

  const handlePage = (_, newPage) => {
    setPage(newPage);
  };

  const preparedCourses = useMemo(
    () =>
      sortKey === 'DEFAULT'
        ? [...courses]
        : [...courses].sort(handleSort).slice(),
    [courses, handleSort, sortKey]
  );

  return (
    <HandleErrorLoad loading={loading} errorMsg={errorMsg}>
      <ProductsHead
        Form={AddCouseForm}
        ButtonIcon={Presentation}
        buttonText="Add Course"
        countTitle="Courses"
        productCount={preparedCourses.length}
        sortKey={sortKey}
        handleSort={handleSortSelect}
        sortOptions={sortOptions}
      />

      <ProductCards
        data={preparedCourses}
        page={page}
        onPagination={handlePage}
        productPerPage={COURSE_PER_PAGE}
      />
    </HandleErrorLoad>
  );
}

const sortOptions = [
  { value: 'DEFAULT', label: 'Default' },
  { value: 'NEWEST', label: 'Newest' },
  { value: 'OLDEST', label: 'Oldest' },
  { value: 'MORE_SUBSCRIBERES', label: 'More Subscribers' },
  { value: 'LESS_SUBSCRIBERES', label: 'Less Subscribers' },
];

function compareDates(dateString1, dateString2) {
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);

  if (date1 < date2) return -1;
  else if (date1 > date2) return 1;

  return 0;
}

function compareNumber(num1, num2) {
  if (num1 < num2) return -1;
  else if (num1 > num2) return 1;

  return 0;
}

// const coursesData = [
// 	{
// 		image:
// 			"https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
// 		title: "Dummy Product 1",
// 		category: "Category 1",
// 		date: "2023-08-29",
// 		subscribersCount: 1200,
// 	},
// 	{
// 		image:
// 			"https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
// 		title: "Dummy Product 2",
// 		category: "Category 2",
// 		date: "2023-08-30",
// 		subscribersCount: 800,
// 	},
// 	{
// 		image:
// 			"https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
// 		title: "Dummy Product 3",
// 		category: "Category 3",
// 		date: "2023-09-01",
// 		subscribersCount: 1500,
// 	},
// 	{
// 		image:
// 			"https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
// 		title: "Dummy Product 3",
// 		category: "Category 3",
// 		date: "2023-09-01",
// 		subscribersCount: 1500,
// 	},
// 	{
// 		image:
// 			"https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
// 		title: "Dummy Product 3",
// 		category: "Category 3",
// 		date: "2023-09-01",
// 		subscribersCount: 1500,
// 	},
// 	{
// 		image:
// 			"https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
// 		title: "Dummy Product 3",
// 		category: "Category 3",
// 		date: "2023-09-01",
// 		subscribersCount: 1500,
// 	},
// ];
