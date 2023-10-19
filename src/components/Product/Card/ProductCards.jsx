import ProductCard from "./ProductCard";

/* eslint-disable react/prop-types */
export default function ProductCards({ data = [] }) {
	return (
		<ul className="grid grid-cols-1 gap-6 w-full">
			{data.map((item, index) => (
				<ProductCard
					key={index}
					id={index}
					image={item.image}
					title={item.title}
					category={item.category}
					date={item.date}
					subscribersCount={item.subscribersCount}
				/>
			))}
		</ul>
	);
}
