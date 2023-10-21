import { useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import SettingMenu from "../../SettingMenu";
import CardImage from "./CardImage";
import CardMain from "./CardMain";
import CardMeta from "./CardMeta";
import {
	ChatCircle,
	CopySimple,
	Eye,
	PencilSimple,
	TrashSimple,
} from "@phosphor-icons/react";

/* eslint-disable react/prop-types */
export default function ProductCard({
	id,
	image,
	title,
	category,
	date,
	subscribersCount,
}) {
	const { pathname } = useResolvedPath();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleOpenMenu = (event) => {
		event.preventDefault();
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMenu = (event) => {
		event.preventDefault();
		setAnchorEl(null);
	};

	return (
		<li>
			<Link
				to={`${pathname}/${id}`}
				className="bg-white rounded-lg border border-gray-300 p-4 flex gap-5 cursor-pointer hover:bg-teal-100 hover:border-gray-200 duration-200 ease-in-out"
			>
				<div className="w-1/4">
					<CardImage image={image} />
				</div>
				<div className="flex gap-4 items-center w-3/4">
					<div className="w-2/5 text-left">
						<CardMain title={title} category={category} />
					</div>

					<div className="mt-4 w-2/5 text-left">
						<CardMeta date={date} subscribersCount={subscribersCount} />
					</div>

					<div className="ml-auto">
						<SettingMenu
							anchorElement={anchorEl}
							handleOpenMenu={handleOpenMenu}
							handleCloseMenu={handleCloseMenu}
							menuItems={settingMenuItems}
						/>
					</div>
				</div>
			</Link>
		</li>
	);
}

const settingMenuItems = [
	{
		Icon: Eye,
		text: "Preview",
	},
	{
		Icon: PencilSimple,
		text: "Edit",
	},
	{
		Icon: ChatCircle,
		text: "Manage Comments",
	},
	{
		Icon: CopySimple,
		text: "Duplicate",
	},
	{
		Icon: TrashSimple,
		text: "Delete",
	},
];
