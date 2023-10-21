import ProductCard from "./ProductCard";

/* eslint-disable react/prop-types */
export default function ProductCards({ data = [] }) {
	return (
		<ul className="flex flex-col gap-6 pr-5 w-full h-[45dvh] overflow-y-scroll">
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
