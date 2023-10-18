import ProductCard from '../../../components/productCard/ProductCard';

const CoursesData = [
  {
    id: 1,
    image:
      'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
    title: 'Dummy Product 1',
    category: 'Category 1',
    date: '2023-08-29',
    subscribersCount: 1200,
  },
  {
    id: 2,
    image:
      'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
    title: 'Dummy Product 2',
    category: 'Category 2',
    date: '2023-08-30',
    subscribersCount: 800,
  },
  {
    id: 3,
    image:
      'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
    title: 'Dummy Product 3',
    category: 'Category 3',
    date: '2023-09-01',
    subscribersCount: 1500,
  },
  {
    id: 4,
    image:
      'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
    title: 'Dummy Product 3',
    category: 'Category 3',
    date: '2023-09-01',
    subscribersCount: 1500,
  },
  {
    id: 5,
    image:
      'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
    title: 'Dummy Product 3',
    category: 'Category 3',
    date: '2023-09-01',
    subscribersCount: 1500,
  },
  {
    id: 6,
    image:
      'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
    title: 'Dummy Product 3',
    category: 'Category 3',
    date: '2023-09-01',
    subscribersCount: 1500,
  },
];

export default function Courses() {
  return (
    <div className="grid grid-cols-1 gap-6 w-full">
      {CoursesData.map((course) => (
        <ProductCard
          key={course.id}
          image={course.image}
          title={course.title}
          category={course.category}
          date={course.date}
          subscribersCount={course.subscribersCount}
          id={course.id}
        />
      ))}
    </div>
  );
}
