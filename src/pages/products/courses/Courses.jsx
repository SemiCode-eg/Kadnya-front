import ProductCard from "../../../components/productCard/ProductCard";


export default function Courses() {
    const CoursesData = [
        {
            image: 'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
            title: 'Dummy Product 1',
            category: 'Category 1',
            date: '2023-08-29',
            subscribersCount: 1200,
        },
        {
            image: 'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
            title: 'Dummy Product 2',
            category: 'Category 2',
            date: '2023-08-30',
            subscribersCount: 800,
        },
        {
            image: 'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
            title: 'Dummy Product 3',
            category: 'Category 3',
            date: '2023-09-01',
            subscribersCount: 1500,
        },
        {
            image: 'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
            title: 'Dummy Product 3',
            category: 'Category 3',
            date: '2023-09-01',
            subscribersCount: 1500,
        },
        {
            image: 'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
            title: 'Dummy Product 3',
            category: 'Category 3',
            date: '2023-09-01',
            subscribersCount: 1500,
        },
        {
            image: 'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
            title: 'Dummy Product 3',
            category: 'Category 3',
            date: '2023-09-01',
            subscribersCount: 1500,
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-6 w-full">
            {CoursesData.map((course, index) => (
                <ProductCard
                    key={index}
                    image={course.image}
                    title={course.title}
                    category={course.category}
                    date={course.date}
                    subscribersCount={course.subscribersCount}
                />
            ))}
        </div>
    );
}
