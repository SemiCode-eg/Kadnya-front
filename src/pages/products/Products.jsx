import MiniSide from "../../components/miniSide/MiniSide";
import AllProducts from "./allProducts/AllProducts";
import Courses from "./courses/Courses";
import { Outlet } from "react-router-dom";
import SearchInput from "../../components/SearchInput";
import CustomCard from "../../components/customCard/CustomCard";
import { useState } from "react";

const tabs = [
	{
		title: "All Products",
		path: "all",
		content: <AllProducts />,
	},
	{ title: "Courses", path: "courses", content: <Courses /> },
	{ title: "coaching", path: "coaching", content: <h1>Caoching</h1> },
];

export default function Products() {
	const [searchData, setSearchData] = useState(null);
	const [searchLoading, setSearchLoading] = useState(false);

	const handleSearchLoading = (newValue) => {
		setSearchLoading(newValue);
	};

	return (
		<CustomCard
			titleComponent={
				<h1 className="font-bold text-2xl w-full ml-1">Products</h1>
			}
		>
			<SearchInput
				setData={setSearchData}
				URL="courses/?q="
				handleLoading={handleSearchLoading}
			/>
			<div className="flex sm:flex-row flex-col items-center gap-5 mt-5 relative">
				<div className="self-start lg:self-stretch sm:static absolute top-0 right-2">
					<MiniSide tabs={tabs} />
				</div>
				<div className="mainContent w-full h-full">
					<Outlet context={[searchData, searchLoading]} />
				</div>
			</div>
		</CustomCard>
	);
}
