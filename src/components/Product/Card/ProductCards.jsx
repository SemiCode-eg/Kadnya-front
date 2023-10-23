import { Pagination } from "@mui/material";
import ProductCard from "./ProductCard";

/* eslint-disable react/prop-types */
export default function ProductCards({
	data = [],
	page = 1,
	onPagination = () => {},
	productPerPage = 10,
}) {
	return (
		<>
			<ul className="flex flex-col gap-6 pr-5 w-full h-[40dvh] overflow-y-scroll">
				{data.map((item, index) => (
					<ProductCard
						key={index}
						id={index}
						image={item.image}
						title={item.title}
						category={item.category}
						date={item.date}
						subscribersCount={item.subscribersCount}
						className=""
					/>
				))}
			</ul>

			<Pagination
				count={Math.ceil(data.length / productPerPage)}
				page={page}
				onChange={onPagination}
				classes={{
					root: "absolute -bottom-11 right-0",
				}}
			/>
		</>
	);
}
