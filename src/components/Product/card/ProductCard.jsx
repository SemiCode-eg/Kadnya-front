import { Link, useResolvedPath } from "react-router-dom";
import SettingMenu from "../../menu";
import CardImage from "./CardImage";
import CardMain from "./CardMain";
import CardMeta from "./CardMeta";

/* eslint-disable react/prop-types */
export default function ProductCard({
	id,
	image,
	title,
	category,
	date,
	subscribersCount,
	targerCousesRefetch = () => {},
}) {
	const { pathname } = useResolvedPath();

	return (
		<li>
			<Link
				to={`${pathname}/${id}/outline`}
				className="bg-white rounded-lg border border-gray-300 sm:p-2 p-2 pb-3 flex sm:flex-row flex-col gap-5 cursor-pointer hover:bg-teal-100 hover:border-gray-200 duration-200 ease-in-out"
			>
				<div className="sm:w-1/4 w-full">
					<CardImage image={image} />
				</div>
				<div className="flex sm:gap-2 gap-3 items-center flex-wrap sm:w-3/4 w-full sm:px-0 px-1">
					<div className="flex flex-col items-start sm:w-2/6 w-full text-left">
						<CardMain title={title} category={category} />
					</div>

					<div className="sm:w-2/6 w-2/3 text-left">
						<CardMeta date={date} subscribersCount={subscribersCount} />
					</div>

					<div className="ml-auto sm:1/6 justify-self-end">
						<SettingMenu id={id} setRefetch={targerCousesRefetch} />
					</div>
				</div>
			</Link>
		</li>
	);
}
