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
					/>
				))}
			</ul>
			<Pagination
				count={Math.ceil(data.length / productPerPage)}
				page={page}
				onChange={onPagination}
				classes={{
					root: "absolute -bottom-16 right-0",
				}}
			/>
		</>
	);
}