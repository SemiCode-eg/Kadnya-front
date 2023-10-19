import { Presentation } from "@phosphor-icons/react";
import { useState } from "react";
import ProductsHead from "../../../components/Product/ProductsHead";
import ProductCards from "../../../components/Product/Card/ProductCards";

export default function Courses() {
	const [courses, setCourses] = useState(coursesData);

	const handleCourses = (setStateCallback) => {
		setCourses(setStateCallback);
	};

	return (
		<>
			<ProductsHead
				// Form={AddProduct}s
				ButtonIcon={Presentation}
				buttonText="Add Course"
				countTitle="Courses"
				productCount={courses.length}
				handleProducts={handleCourses}
			/>

			<ProductCards data={courses} />
		</>
	);
}

const coursesData = [
	{
		image:
			"https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		title: "Dummy Product 1",
		category: "Category 1",
		date: "2023-08-29",
		subscribersCount: 1200,
	},
	{
		image:
			"https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		title: "Dummy Product 2",
		category: "Category 2",
		date: "2023-08-30",
		subscribersCount: 800,
	},
	{
		image:
			"https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		title: "Dummy Product 3",
		category: "Category 3",
		date: "2023-09-01",
		subscribersCount: 1500,
	},
	{
		image:
			"https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		title: "Dummy Product 3",
		category: "Category 3",
		date: "2023-09-01",
		subscribersCount: 1500,
	},
	{
		image:
			"https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		title: "Dummy Product 3",
		category: "Category 3",
		date: "2023-09-01",
		subscribersCount: 1500,
	},
	{
		image:
			"https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		title: "Dummy Product 3",
		category: "Category 3",
		date: "2023-09-01",
		subscribersCount: 1500,
	},
];
