import { Card, CardBody } from "@material-tailwind/react";
import MiniSide from "../../components/miniSide/MiniSide";
import AllProducts from "./allProducts/AllProducts";
import Courses from "./courses/Courses";
import { Outlet } from "react-router-dom";
import SearchInput from "../../components/SearchInput";

const tabs = [
	{
		title: "All Products",
		path: "all",
		content: <AllProducts />,
	},
	{ title: "Courses", path: "courses", content: <Courses /> },
	{ title: "Coaching", path: "coaching", content: "Coaching" },
	{ title: "Community", path: "community", content: "Community" },
	{ title: "Codcasts", path: "codcasts", content: "Podcasts" },
];

export default function Products() {
	const handleSubmit = () => {};

	return (
		<main className="flex flex-col justify-center items-center w-10/12 mx-auto gap-8">
			<h1 className="font-bold text-2xl w-full ml-1">Products</h1>

			<Card className="w-full text-center flex justify-center border rounded-md shadow-none ">
				<CardBody>
					<SearchInput onSubmit={handleSubmit} />
					<MiniSide tabs={tabs} Outlet={Outlet} />
				</CardBody>
			</Card>
		</main>
	);
}
