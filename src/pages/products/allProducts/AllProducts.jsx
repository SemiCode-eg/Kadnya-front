import { Presentation } from "@phosphor-icons/react";
import AddProduct from "../AddProduct";
import ProductsHead from "../../../components/ProductsHead";
import ProductCards from "../../../components/ProductCards";
import { useState } from "react";

export default function AllProducts() {
	const [products, setProducts] = useState(productsData);

	const handleProducts = (setStateCallback) => {
		setProducts(setStateCallback);
	};

	return (
		<>
			<ProductsHead
				Form={AddProduct}
				ButtonIcon={Presentation}
				buttonText="Add Product"
				countTitle="Products"
				productCount={products.length}
				handleProducts={handleProducts}
			/>

			<ProductCards data={products} />
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
