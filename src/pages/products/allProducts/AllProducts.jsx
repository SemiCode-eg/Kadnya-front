import { useState } from "react";
import ProductCard from "../../../components/productCard/ProductCard";
import { Presentation } from "@phosphor-icons/react";
import AddProduct from "../AddProduct";

export default function AllProducts() {
	const [showForm, setShowForm] = useState(false);

	return (
		<>
			{showForm === true && <AddProduct />}
			<div className="flex">
				<div className="flex items-center justify-start w-full mb-3">
					<p
						className={`flex gap-2 items-center text-sky-950
                  outline-none transition-all duration-150 ease-in
                  rounded-lg text-lg font-semibold py-3 mr-2`}
					>
						<span className="font-bold">5</span> Products
					</p>
				</div>
				<div className="flex items-end justify-end w-full mb-6">
					<button
						className={`flex gap-2 items-center text-white
                  outline-none transition-all duration-150 ease-in
                  rounded-lg text-md font-semibold px-8 py-3 mr-2
                  bg-sky-950 hover:bg-teal-200 hover:text-sky-950`}
						onClick={() => setShowForm((prev) => !prev)}
					>
						<Presentation size={25} weight="bold" />
						Add Product
					</button>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-6 w-full">
				{productsData.map((product, index) => (
					<ProductCard
						key={index}
						image={product.image}
						title={product.title}
						category={product.category}
						date={product.date}
						subscribersCount={product.subscribersCount}
					/>
				))}
			</div>
		</>
	);
}

const productsData = [
	{
		image: "",
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
];
